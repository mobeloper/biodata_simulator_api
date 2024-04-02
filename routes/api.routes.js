import Router from "express-promise-router";

import {allDummy, authLogin, getActivity, getSleep, receiveHealthDataFromMetriport, authUserInfo} from "../controllers/health.controller.js"

const router = Router();

export default app => {

    router.get("/auth/login/v1",authLogin);
    router.get("/auth/userInfo/v1",authUserInfo);
    
    router.get("/health/mock/v1",allDummy);
    router.get("/health/activity/v1",getActivity);
    router.get("/health/sleep/v1",getSleep);
    
    router.post("/health/metriport/v1", receiveHealthDataFromMetriport);

    // //API root path
    // app.use("/api", router);
    app.use("", router);

};
