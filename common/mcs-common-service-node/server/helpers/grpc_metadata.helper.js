'use strict';
((grpcMetaHelper) => {
  const grpc = require('@grpc/grpc-js');

  grpcMetaHelper.setMetadata = (metaData, metaObject) => {
    try {
      let meta = new grpc.Metadata();
      let metadataObject = Object.assign({}, metaData, metaObject);
      if ('context-service' in metadataObject) delete metadataObject['context-service'];
      if ('context-method' in metadataObject) delete metadataObject['context-method'];
      Object.entries(metadataObject).map(([key, value]) => meta.add(key, value ? value.toString() : ''));
      return meta;
    } catch (error) {
      throw error;
    }
  };

  grpcMetaHelper.getMetadata = (metadata) => {
    const header = ['token', 'debugId', 'context-service', 'context-method', 'deviceId', 'ip', 'apiSpan', 'userId', 'cbsId', 'userType', 'userUuid', 'profileId', 'fullName', 'channel', 'debugId', 'accessBranch', 'branchId', 'isCorporate', 'x-user-agent', 'elastic-apm-traceparent', 'accountName', 'accountNumber', 'from', 'lang', 'customerMobile', 'sec-ch-ua', 'isSupplement', 'suppUserId', 'suppUserUuid', 'suppProfileId', 'suppFullName', 'suppBranchId', 'suppCbsId'];
    try {
      let metaData = {};
      for (let i = 0; i < header.length; i++) {
        if (typeof metadata.get(header[i])[0] !== 'undefined') {
          metaData[header[i]] = metadata.get(header[i])[0];
        }
      }
      return metaData;
    } catch (error) {
      throw error;
    }
  };

  grpcMetaHelper.getSuppMetadata = (metadata) => {
    const headers = ['isSupplement', 'suppUserId', 'suppUserUuid', 'suppProfileId', 'suppFullName', 'suppBranchId', 'suppCbsId']
    try {
      let metaData = grpcMetaHelper.getMetadata(metadata);
      for (let i = 0; i < headers.length; i++) {
        if (typeof metadata.get(headers[i])[0] !== 'undefined') {
          metaData[headers[i]] = metadata.get(headers[i])[0];
        }
      }
      return metaData;
    } catch (error) {
      throw error;
    }
  }
})(module.exports);