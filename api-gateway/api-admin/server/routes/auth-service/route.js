"use strict";

(() => {

    const express = require("express");
    const authRouter = express.Router();
    const authRouterCtrl = require(".")

    authRouter.route("/login").post(authRouterCtrl.LoginAdmin)
    module.exports = authRouter
})()