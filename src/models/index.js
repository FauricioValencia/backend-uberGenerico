const Bookshelf = require("../../database");


let Conductor = Bookshelf.Model.extend({
    tableName: "conductor",
    documento: () =>{
        return this.hasOne(Documento);
    }
})

let Documento = Bookshelf.Model.extend({
    tableName: "documento"
})

module.exports ={
    Conductor:Conductor,
    Documento:Documento
}