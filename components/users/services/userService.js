
let personas = []
class User {
    async get(){
        try {
            return personas;
        } catch (error) {
            console.log(error);
        }
    }

    async create(persona){
        try {
            personas.push(persona);
            return personas;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new User();