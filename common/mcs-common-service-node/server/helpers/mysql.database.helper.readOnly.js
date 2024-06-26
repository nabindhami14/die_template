'use-strict';
const mysql = require('mysql2/promise');
// const console = require('./console_helper');
((connection) => {
  const {v4 : uuid} = require('uuid');
  let dbClient = null;
  let tranConn = null;
  let metaData = {
    debugId: uuid(),
    deviceId: 'query-log',
    ip: 'query-log',
    'elastic-apm-traceparent': '',
    userId: '1',
    'context-method': 'query-log',
    'context-service': 'query-log'
  }
  
  connection.init = async () => {
    try {
      if (!dbClient) {
        dbClient = await mysql.createPool({
          // user: process.env.MYSQL_DB_USER_READONLY,
          user: "root",
          // password: process.env.MYSQL_DB_PASSWORD_READONLY,
          password: "root",
          // host: process.env.MYSQL_DB_HOST_READONLY,
          host: "localhost",
          port: process.env.MYSQL_DB_MIGRATION_READONLY_PORT,
          // database: process.env.MYSQL_DB_NAME,
          database: "cbs",
          waitForConnections: true,
          connectionLimit: 1000,
	        dateStrings: true,
          queueLimit: 0
        });
      }
    console.log("CONNNECTEDDD");
      return dbClient;
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.init', error);
      throw error;
    }
  };

  connection.getConnection = async () => {
    try {
      if (!tranConn) tranConn = await dbClient.getConnection();
      return tranConn;
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.getConnection', error);
      throw error;
    }
  };

  connection.execute = (query, fields) => {
    try {
      //console.info(metaData , `executing query` , query)
      return  (tranConn || dbClient).query(query, fields);
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.query', error);
      throw error;
    }
    // finally{
    //   console.info({}, 'Finally releasing mysql connection.execute', {});
    //   if(connection){
    //     connection.release()
    //     console.info({}, 'mysql connection released', {});
    //   }    
    // }
  };

  connection.query = async (query, fields, metaData) => {
    try {
     // console.info({}, 'QUERY.STARTED.1ST', {query, fields}); 
      return  (tranConn || dbClient).query(query, fields);
     // console.info({}, 'QUERY.STARTED.ENDED.2ND',{});
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.query', error);
      throw error;
    }
    // finally{
    //   console.info({}, 'Finally releasing mysql connection.query', {});
    //   if(connection){
    //     connection.release()
    //     console.info({}, 'mysql connection released', {});
    //   }    
    // }
  };

  connection.beginTransaction = async () => {
    try {
      if (!tranConn) {
        await connection.getConnection();
      }
      return await tranConn.beginTransaction();
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.beginTransaction', error);
      throw error;
    }
  };

  connection.commit = async () => {
    try {
      if (!tranConn) {
        await connection.getConnection();
      }
      return await tranConn.commit();
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.commit', error);
      throw error;
    } finally {
      await connection.release();
    }
  };

  connection.rollback = async () => {
    try {
      if (!tranConn) {
        await connection.getConnection();
      }
      return await tranConn.rollback();
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.readonly.js connection.rollback', error);
      throw error;
    } finally {
      await connection.release();
    }
  };

  connection.release = async () => {
    try {
      if (!tranConn) {
        return;
      }
      await tranConn.release();
      tranConn = null;
      return;
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.release', error);
      throw error;
    }
  };

  connection.end = () => {
    try {
      return dbClient.end();
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.end', error);
      throw error;
    }
  };

  connection.escape = (string) => {
    try {
      return dbClient.escape(string);
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.escape', error);
      throw error;
    }
  };

  connection.escapeId = (string) => {
    try {
      return dbClient.escapeId(string);
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.escapeId', error);
      throw error;
    }
  };

  connection.format = (query, args) => {
    try {
      return dbClient.format(query, args);
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.format', error);
      throw error;
    }
  };

  connection.count = (query) => {
    try {
      query = query.replace(/"/g, "'").replace(/\n/g, ' ').toLowerCase().trim();
      const selectIndex = this.getIndexofKey(query, 'select ');
      const fromIndex = this.getIndexofKey(query, ' from ');
      query = query.substring(selectIndex, 6) + ' countstar count ' + query.substring(fromIndex, query.length);
      if (selectIndex === -1 || fromIndex === -1 || selectIndex !== 0 || fromIndex === 0) {
        throw new Error('Bad count query request');
      }
      const orderIndex = this.getIndexofKey(query, ' order by ');
      if (orderIndex > 0) {
        query = query.substring(0, orderIndex);
      } else {
        const limitIndex = this.getIndexofKey(query, ' limit ');
        if (limitIndex > 0) {
          query = query.substring(0, limitIndex);
        }
        const offsetIndex = this.getIndexofKey(query, ' offset ');
        if (offsetIndex > 0) {
          query = query.substring(0, offsetIndex);
        }
      }
      return dbClient.query(query);
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.count', error);
      throw error;
    }
  };
  connection.getIndexofKey = (query, key) => {
    return query.search(`${key}(?=(?:[^']*'[^']*')*[^']*$)`);
  };

  connection.queryFormat = (query, values) => {
    try {
      return (dbClient.config.queryFormat = function (query, values) {
        if (!values) return query;
        return query.replace(
          /\:(\w+)/g,
          function (txt, key) {
            if (values.hasOwnProperty(key)) {
              return this.escape(values[key]);
            }
            return txt;
          }.bind(this)
        );
      });
    } catch (error) {
      console.error({}, 'Error at mysql.database.helper.readonly.js connection.queryFormat', error);
      throw error;
    }
  };

  connection.makeWhereQuery = (opts) => {
    let string = `WHERE `;
    Object.entries(opts).forEach(([key, value]) => {
      typeof value !== 'undefined' ? (string += `${key} = ${value} AND `) : '';
    });
    string = string.substring(0, string.length - 5);
    return string;
  };

  connection.makeUpdateQuery = (opts) => {
    let updateString = `updated_date = ?, `,
      updateArr = [new Date().getTime()];
    Object.entries(opts).forEach(([key, value]) => {
      typeof value !== 'undefined' ? (updateString += `${key} = ?, `) : '';
      updateArr.push(value);
    });
    updateString = updateString.substring(0, updateString.length - 2);
    return {
      updateString,
      updateArr
    };
  };
})(module.exports);