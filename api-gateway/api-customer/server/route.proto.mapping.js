(() => {
  const { cbs } = require('proto/bundle');
  const clientLoader = require('client');

  module.exports = {
    '/api/v1/customer/auth/register': {
      POST: {
        client: clientLoader.customerAuthClient,
        method: 'registerCustomer',
        encode: cbs.customer_auth_service.RegisterRequest,
        decode: cbs.customer_auth_service.RegisterResponse,
      }
    },
    '/api/v1/customer/auth/login': {
      POST: {
        client: clientLoader.customerAuthClient,
        method: 'loginCustomer',
        encode: cbs.customer_auth_service.LoginRequest,
        decode: cbs.customer_auth_service.LoginResponse,
      }
    },
    '/api/v1/customer/auth/:id': {
      GET: {
        client: clientLoader.customerAuthClient,
        method: 'getCustomer',
        encode: cbs.customer_auth_service.GetRequest,
        decode: cbs.customer_auth_service.GetResponse,
      }
    },
  };
})();

