const Bookshelf = require("../../database");


let Conductor = Bookshelf.Model.extend({
    idAttribute: "id",
    tableName: "conductor",
    documento: () =>{
        return this.hasOne(Documento);
    }
})

let Documento = Bookshelf.Model.extend({
    idAttribute: "id",
    tableName: "documento"
})

module.exports ={
    Conductor:Conductor,
    Documento:Documento
}