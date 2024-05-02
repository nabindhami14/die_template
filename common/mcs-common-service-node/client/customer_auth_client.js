


((customerAuthServiceClient) => {
  'use strict';
  const helpers = require('common/helpers');
  const configs = require('common/configs');
  
  let _client = Object.create({});

  customerAuthServiceClient.init = (version) => {
    _client = helpers.grpcClientHelper.buildClients(configs.service.customerService, version);
  };
  customerAuthServiceClient.getClient = (metadata) => {
    return _client;
  };
})(module.exports);