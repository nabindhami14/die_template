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
    '/api/v1/customer/auth/me': {
      GET: {
        client: clientLoader.customerAuthClient,
        method: 'customerProfile',
        encode: cbs.customer_auth_service.CustomerProfileRequest,
        decode: cbs.customer_auth_service.CustomerProfileResponse,
      }
    },

    // MERCHANTS
    '/api/v1/customers/merchants': {
      GET: {
        client: clientLoader.merchantClient,
        method: 'getMerchants',
        encode: cbs.merchant_service.GetMerchantsRequest,
        decode: cbs.merchant_service.GetMerchantsResponse
      }
    },
    '/api/v1/customers/merchants/:merchantId': {
      GET: {
        client: clientLoader.merchantClient,
        method: 'getMerchant',
        encode: cbs.merchant_service.GetMerchantRequest,
        decode: cbs.merchant_service.GetMerchantsResponse
      }
    },
  };
})();

