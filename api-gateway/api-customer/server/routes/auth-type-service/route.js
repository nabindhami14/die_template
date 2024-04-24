"use strict";

(() => {
    const express = require("express");
    const authTypeRouter = express.Router();
    const authTypeRouterCtrl = require(".")

    authTypeRouter.route("/").get(authTypeRouterCtrl.GetAuthTypes)
    authTypeRouter.route("/:authtypeId").get(authTypeRouterCtrl.GetAuthType)


    module.exports = authTypeRouter
})()