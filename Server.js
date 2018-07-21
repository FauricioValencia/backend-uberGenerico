//daniel se la suda a winstonimport * as hapi from "hapi";
const path = require("path");
const Inert = require("inert");
const Vision = require("vision");
const Jwt = require("hapi-auth-jwt2");
const HapiSwagger = require('hapi-swagger');
const { promisify } = require("util");
const fs = require("fs");
const Swagger = require("./Swagger");
const validatefn = require("./Auth");
const readDirAsync = promisify(fs.readdir);

async function init(config) {
    let server = new hapi.Server({
        port: config.port, 
        //host: config.host
    });

    await server.register([
        Vision,
        Inert,
        Jwt
    ]);

    await server.register({
        plugin: HapiSwagger,
        options: Swagger
    })

    server.auth.strategy('jwt', 'jwt', {
        key: config.jwtSecret,
        validate: validatefn,
        verifyOptions:{
            //ignoreExpiration: true,
            algorithms:['HS256'] 
        }
    });

    server.auth.default('jwt');

    let modulesPath = path.join(__dirname, "modules");
    let directories =  await readDirAsync(modulesPath);
    directories.forEach((dirName, index)=>{
        let dirPath = path.join(modulesPath,dirName);
            if(fs.statSync(dirPath).isDirectory()){
                require(dirPath).Init(server, config);
            }
    })
    await server.start();//just to start the server
}

module.exports.init = init;