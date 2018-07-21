const path = require('path');
const nconf = require('nconf');

const configProvider = new nconf.Provider({
    env: true,
    store:{
        type: "file",
        file: path.join(__dirname,`./../config/config.${process.env.NODE_ENV || "dev" }.json`)
    }
});


export function getServerConfig(){
    return configProvider.get("server");
}

export function getDatabaseConfig(){
    return configProvider.get("database");
}