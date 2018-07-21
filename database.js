// var fs = require('fs');
var Knex =require('knex');
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

module.exports = Orm ;