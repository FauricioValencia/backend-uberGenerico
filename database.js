// var fs = require('fs');
var Knex =require('Knex');
var Bookshelf= require('bookshelf');
var { getDatabaseConfig} = require ('./Config');

let config = getDatabaseConfig();
let conn =  Knex({
    client: config.provider,//db engine
    connection:{
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.db,
        // charset: config.charset,
        port: config.port
    }
});
let Orm = Bookshelf(conn);

Orm.knex.raw
module.exports={
    Orm
} 