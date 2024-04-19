
![architecture](https://torq.io/wp-content/uploads/2021/10/image2.png)


***gRPC is a modern, high-performance framework that enables client and server applications to communicate transparently and build connected systems. Developed by Google, gRPC is based on defining a service and specifying the methods that can be called remotely with their parameters and return types. One of the key features of gRPC is its use of protocol buffers, a language-agnostic binary format, which makes it an efficient alternative to RESTful APIs that typically use JSON or XML.***

***The advantages of gRPC over REST are numerous. gRPC is designed to be faster, more efficient, and more robust. It supports multiple programming languages, making it versatile for diverse environments. gRPC's use of HTTP/2 allows for features like multiplexing and server push, contributing to its performance benefits. Additionally, gRPC supports bi-directional streaming, providing a more interactive communication pattern than REST.***


## [gRPC Ecosystem](https://www.dhiwise.com/post/integrating-react-grp-%20for-smooth-client-server-communication)

***The gRPC ecosystem comprises several components that enable seamless communication between clients and servers. At the heart of gRPC is the gRPC server, which hosts the gRPC service and handles incoming client calls. The gRPC client, on the other hand, is responsible for initiating these calls to the server.***

***Proto files, or protocol buffers, are the cornerstone of gRPC services. They define the service interface and the structure of the payload messages. These proto files are language agnostic, which means they can generate gRPC client and server code for various programming languages.***


[gRPC-web](https://torq.io/blog/grpc-web-using-grpc-in-your-front-end-application/)


![overall data flow for gRPC.](https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fb98afdcd-b567-4c90-9f47-5358df0adda6_1280x1619.jpeg)

> RPC (Remote Procedure Call) is called “remote” because it enables communications between remote services when services are deployed to different servers under microservice architecture.


## [gRPC at a glance](https://daily.dev/blog/build-a-chat-app-using-grpc-and-reactjs)

***gRPC is an inter-process communication technology that is used to execute remote sub-routines in a different address space. It uses the concept of message passing to signal a sub-routine residing in another system to execute. gRPC is awesome in that it creates a server service in a language and the service can be consumed from another platform in another language. This server service contains methods that can be called by the gRPC clients from anywhere in the world from any machine or platform.***

***gRPC has three components: Protocol Buffer, server, and client. Protocol Buffer is an open-source serialization tool built by Google. gRPC uses this to serialize the request and response message format between the server and the client. This is also where the service interface between the server and the client is defined. The service interface definition contains information on how your service can be consumed by consumers, what methods you allow the consumers to call remotely, what method parameters and message formats to use when invoking those methods, and so on.***

***The server as we already know contains methods/sub-routines/procedures, anything you choose to call it. These methods perform an action on the server. The client is where the methods in the gRPC server are called from.***



> ***Our client will be a React.js application which means will be in the browser. Browsers have to connect to gRPC services via a special proxy. This proxy is a process that can send HTTP/2 calls. So we send an HTTP 1.1 call to the proxy from the browser, the proxy gets it and calls the gRPC server via HTTP/2 sending the request URL and parameters with it. Then, it receives a response from the gRPC server via HTTP/2, the response is now sent to the client via HTTP 1.1 by the proxy. The ideal proxy process for this is [Envoy](https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy).***