/**
 * GRPC client connector
 *
 * @module Connector
 */
'use strict';


const protoLoader = require('@grpc/proto-loader');
const grpc = require('@grpc/grpc-js');
const path = require('path');

const commonDir = path.resolve(__dirname, '../../../');
const commonProtoRootDir = path.join(commonDir, 'mcs-protos');

((grpcHelper) => {
  /**
   * 
   */
  grpcHelper.loadMultiplePackageForServer = (rpcServiceList, version) => {
    const packages = {};
    const packageList = Object.keys(rpcServiceList);
    for (const rpcService of packageList) {
      const serviceConfig = grpcHelper.getServiceConfig(rpcServiceList[rpcService], version);
      packages[rpcService] = grpcHelper.loadPackage(serviceConfig.rpcProtoFile);
    }
    return packages;
  },

    /**
     * 
      @param {} rpcService 
      @param {} version 
     */
    grpcHelper.loadPackageForServer = (rpcService, version) => {
      const serviceConfig = grpcHelper.getServiceConfig(rpcService, version);
      return grpcHelper.loadPackage(serviceConfig.rpcProtoFile);
    };

  /**
   * 
   */
  grpcHelper.loadPackage = (filename) => {
    try {
      const PROTO_PATH = path.join(commonProtoRootDir, 'protos', `${filename}.proto`);
      const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        defaults: true,
        oneofs: true
      });
      return grpc.loadPackageDefinition(packageDefinition);
    } catch (error) {
      throw error
    }
  };

  /**
   * 
   */
  grpcHelper.getServiceConfig = (rpcService, version = null) => {

    if (!version) {
      const firstKey = Object.keys(rpcService)[0];
      return rpcService[firstKey];
    }
    return rpcService[version];
  };

  /**
   * 
   */
  grpcHelper.buildClient = (rpcService, version) => {
    const serviceConfig = grpcHelper.getServiceConfig(rpcService, version);
    return new grpc.Client(`${serviceConfig.host}:${serviceConfig.port}`, grpc.credentials.createInsecure());
  }
  /**
   * 
   */
  grpcHelper.buildClientWithSize = (rpcService, version) => {
    const serviceConfig = grpcHelper.getServiceConfig(rpcService, version);
    const client = new grpc.Client(`${serviceConfig.host}:${serviceConfig.port}`, grpc.credentials.createInsecure(), {
      'grpc.max_receive_message_length': -1,
      'grpc.max_send_message_length': -1
    });
    return client;
  }

  /**
   * 
   */
  grpcHelper.getRpcPath = (servicePackage, method) => {
    return `bfi.${servicePackage}.${method}`;
  };

  /**
   * 
   */
  grpcHelper.createRpcImpl = (metadata, rpcService, client) => {
    return (method, requestData, callback) => {
      client.makeUnaryRequest(
        getRpcPath(rpcService, method.name),
        arg => arg,
        arg => arg,
        requestData,
        metadata,
        callback
      )
    }
  };

  /**
   * 
   */
  grpcHelper.getRpc = (client, rpcService, metadata, version) => {
    {
      try {
        const serviceConfig = grpcHelper.getServiceConfig(rpcService, version);
        const rpcImpl = grpcHelper.createRpcImpl(metadata, serviceConfig, client);
        return bfi[serviceConfig.packageName][serviceConfig.serviceName].create(rpcImpl, false, false);
      } catch (err) {
        throw new Error(err);
      }
    }
  };

  // grpcClientHelper.buildClient = (rpcService, version = null) => {
  //   const serviceConfig = grpcClientHelper.getServiceConfig(rpcService, version);
  //   const proto = grpcClientHelper.loadPackage(serviceConfig.rpcProtoFile);
  //   const splittedPackageName = grpcClientHelper.splitStringPackageName(serviceConfig.packageName);
  //   let ProtoRpc = proto;
  //   for (let i = 0; i < splittedPackageName.length; i++) {
  //     ProtoRpc = ProtoRpc[splittedPackageName[i]];
  //   }
  //   ProtoRpc = ProtoRpc[serviceConfig.rpcService];
  //   return new ProtoRpc(`${serviceConfig.host}:${serviceConfig.port}`,
  //     grpc.credentials.createInsecure())

  // };

  grpcHelper.buildClients = (rpcService, version) => {
    const serviceConfig = grpcHelper.getServiceConfig(rpcService, version);
    const proto = grpcHelper.loadPackage(serviceConfig.rpcProtoFile);
    const splittedPackageName = grpcHelper.splitStringPackageName(serviceConfig.packageName);
    let ProtoRpc = proto;

    for (let i = 0; i < splittedPackageName.length; i++) {
      ProtoRpc = ProtoRpc[splittedPackageName[i]];
    }

    ProtoRpc = ProtoRpc[serviceConfig.rpcService];
    let grpcConfigString = `${serviceConfig.host}:${serviceConfig.port}`
    return new ProtoRpc(`${grpcConfigString}`,
      grpc.credentials.createInsecure())
  };

  grpcHelper.buildClientsWithSize = (rpcService, version) => {
    const serviceConfig = grpcHelper.getServiceConfig(rpcService, version);
    const proto = grpcHelper.loadPackage(serviceConfig.rpcProtoFile);
    const splittedPackageName = grpcHelper.splitStringPackageName(serviceConfig.packageName);
    let ProtoRpc = proto;
    for (let i = 0; i < splittedPackageName.length; i++) {
      ProtoRpc = ProtoRpc[splittedPackageName[i]];
    }
    ProtoRpc = ProtoRpc[serviceConfig.rpcService];
    let grpcConfigString = `${serviceConfig.host}:${serviceConfig.port}`
    return new ProtoRpc(`${grpcConfigString}`,
      grpc.credentials.createInsecure(),
      {
        'grpc.max_receive_message_length': -1,
        'grpc.max_send_message_length': -1
      })
  };

  grpcHelper.splitStringPackageName = packageName => {
    const array = packageName.split('.');
    return array.map(item => item.trim());
  };

  grpcHelper.setTimeOut = timeout => {
    try {
      const timeoutVal = timeout ? parseInt(timeout) : parseInt(process.env.RPC_REQUEST_TIMEOUT || 20)
      return { deadline: new Date(Date.now() + timeoutVal * 1000) }
    } catch (error) {
      throw error;
    }
  }
})(module.exports);