let userService = require("../services/userService");
let Singleton = require("../../../utils/singleton");
class User {
    async get(req, res, next){
        try {
            let singleton = new Singleton();
            let personas = await userService.get();
            res.render('index', {personas});
        } catch (error) {
            
        }
    }

    async getDataJson(req, res, next){
        try {
            let singleton = new Singleton();
            let personas = await userService.get();
            res.json({personas, fecha: singleton});
        } catch (error) {
            
        }
    }
    
    async create(req, res, next){
        try {
            let singleton = new Singleton();
            await userService.create(req.body);
            res.redirect('/users');
        } catch (error) {
            
        }
    }
}

module.exports = new User();