(() => {
  const { cbs } = require('proto/bundle');
  const clientLoader = require('client');

  module.exports = {
    '/api/v1/customers/health-check': {
      POST: {
        client: clientLoader.customerAuthClient,
        method: 'healthCheck',
        encode: cbs.customer_auth_service.HealthCheckRequest,
        decode: cbs.customer_auth_service.HealthCheckResponse,
      }
    },
    '/api/v1/customers/auth/login': {
      POST: {
        client: clientLoader.customerAuthClient,
        method: 'loginCustomer',
        encode: cbs.customer_auth_service.LoginRequest,
        decode: cbs.customer_auth_service.LoginResponse,
      }
    },
    '/api/v1/customers/auth/me': {
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

    // AUTH TYPE
    '/api/v1/admin/auth-types': {
      GET: {
        client: clientLoader.merchantClient,
        method: 'getAuthType',
        encode: cbs.merchant_service.GetAuthTypesRequest,
        decode: cbs.merchant_service.GetAuthTypesResponse
      }
    },
    '/api/v1/admin/auth-types/:authtypeId': {
      POST: {
        client: clientLoader.merchantClient,
        method: 'getAuthType',
        encode: cbs.merchant_service.GetAuthTypeRequest,
        decode: cbs.merchant_service.GetAuthTypeResponse
      }
    },

    // PAYMENTS
    '/api/v1/customers/payments': {
      POST: {
        client: clientLoader.merchantClient,
        method: 'createPayment',
        encode: cbs.merchant_service.CreatePaymentRequest,
        decode: cbs.merchant_service.CreatePaymentResponse,
      }
    },
  };
})();

