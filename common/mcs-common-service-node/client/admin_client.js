


((adminServiceClient) => {
  'use strict';
  const helpers = require('common/helpers');
  const configs = require('common/configs');

  let _client = Object.create({});

  adminServiceClient.init = (version) => {
    _client = helpers.grpcClientHelper.buildClients(configs.service.adminService, version);
  };
  adminServiceClient.getClient = () => {
    return _client;
  };
})(module.exports);