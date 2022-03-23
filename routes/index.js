let apiUsers = require("../components/users");

module.exports = app =>{
    apiUsers(app);
    app.get("/", (req,res)=>{
        res.send("Ok!");
    });
}