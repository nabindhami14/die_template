((logWritterHelper) => {
    const { createLogger, transports } = require('winston');
    const utilityHelper = require('./utility.helper');
    const redisHelper = require('./redis_helper');
    const {
      sercretKeys: {
        maskObjectKeys
      },
    } = require('../configs');
    const { Client } = require('@elastic/elasticsearch');
    const elasticsearch_winston = require('winston-elasticsearch');
    const dotenv = require('dotenv');
    dotenv.config({ path: require('path').join(__dirname, '../../.env') });
  
    var elastic_client = new Client({ node: `${process.env.ELASTICSEARCH_HOST}:${process.env.ELASTICSEARCH_PORT}`, ensureMappingTemplate: false });
    var esTransportOpts = {
      client: elastic_client,
      //level:'error'
    };
  
    logWritterHelper.getFileName = (level) => {
      let fileName = utilityHelper.getFormattedDate(new Date(), '-');
      fileName = `${process.cwd()}/logs/${fileName}`;
      return fileName;
    };
  
    logWritterHelper.debug = (metaHeader, mesasge, payload) => {
      try {
        logWritterHelper.write('warn', mesasge, payload);
      } catch (error) {
        console.log(error);
      }
    };
  
    logWritterHelper.info = (metaHeader, logMessage, urlService, method) => {
      try {
        logWritterHelper.write('info', metaHeader, logMessage, urlService, method);
      } catch (error) {
        console.log(error);
      }
    };
  
    logWritterHelper.error = (metaHeader, logMessage, urlService, method) => {
      try {
        if (metaHeader.userId) {
          let redisKey = "txnRedisData" + metaHeader.userId;
          let redisCredKey = "txnCredRedisData" + metaHeader.userId;
          redisHelper.clearCacheKeys(redisKey, metaHeader.debugId);
          redisHelper.clearCacheKeys(redisCredKey, metaHeader.debugId);
        }
        const errorObj = {};
        errorObj.stack = logMessage.stack;
        logWritterHelper.write('error', metaHeader, errorObj, urlService, method);
      } catch (error) {
        console.log(error);
      }
    };
  
    logWritterHelper.getLogMessage = (data) => {
      try {
        data = maskObjectKeys(data);
        return JSON.stringify(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    logWritterHelper.write = (level, metaHeader, logMessage, urlService, message) => {
      try {
        const logger = createLogger({
          transports: [
            // new transports.Console({
            //   level: 'info',
            // }),
            new elasticsearch_winston(esTransportOpts),
          ]
        });
        if (metaHeader) {
          metaHeader['context-env'] = process.env.APP_ENV;
        }
        logger[level]((logMessage && logMessage.message) ? logMessage.message : `${message}`, {
          level: level,
          meta: {
            header: metaHeader,
            data: logWritterHelper.getLogMessage(logMessage)
          },
        });
        logger.end();
      } catch (error) {
        console.log(error);
      }
    };
  })(module.exports);