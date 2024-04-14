(() => {
  const { cbs } = require('proto/bundle');
  const clientLoader = require('client');

  module.exports = {
    '/api/v1/customer/auth/login': {
      POST: {
        client: clientLoader.customerAuthClient,
        method: 'registerCustomer',
        encode: cbs.customer_auth_service.RegisterRequest,
        decode: cbs.customer_auth_service.RegisterResponse,
      }
    },
  };
})();

