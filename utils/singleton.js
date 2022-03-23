

class Singleton {
    static dateConexion;
    constructor(){
        if(Singleton.dateConexion){
            return Singleton.dateConexion
        }
        this.fecha = new Date().toLocaleTimeString();
        Singleton.dateConexion = this;
    }
}

module.exports = Singleton;