```sh
npm run bundle-win
```


```proto
message Merchant {
    string name = 1;

    AuthType auth_type = 2;

    <!-- Map<string, string> auth_credentials = 4; -->
    BasicAuth basic_auth = 3;
    OAuth2Auth oauth2_auth = 4;
    JwtAuth jwt_auth = 5;

    string senderId = 6;
    string receiverId = 7;
    double amount = 8;
    string remark = 9;
}

message CreateMerchantRequest {
    Merchant merchant = 1;
}

message CreateMerchantResponse {
    string status = 1;
    bool success = 2;
}
```