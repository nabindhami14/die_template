"use strict";

(() => {
    const express = require("express");
    const authTypeRouter = express.Router();
    const authTypeRouterCtrl = require(".")

    authTypeRouter.route("/").post(authTypeRouterCtrl.CreateAuthType)
    authTypeRouter.route("/:authtypeId").get(authTypeRouterCtrl.GetAuthType)


    module.exports = authTypeRouter
})()