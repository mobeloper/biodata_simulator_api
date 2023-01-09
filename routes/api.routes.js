module.exports = app => {
    
    var router = require("express").Router();
    const healthAPI = require("../controllers/health.controller.js");

    router.get("/health/all/v1",healthAPI.all);
    router.get("/health/activity/v1",healthAPI.activity);

    //API root path
    app.use("/api", router);
};
    