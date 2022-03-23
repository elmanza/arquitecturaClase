let userController = require("./controllers/userController");
let { Router } = require("express");
let router = new Router();
module.exports = app =>{
    app.use("/users", router);
    router.get("/", userController.get);
    router.post("/", userController.create);
    router.get("/getjson", userController.getDataJson);
}