const path = require('path');
const nconf = require('nconf');

console.log(__dirname);

const configProvider = new nconf.Provider({
    env: true,
    store:{
        type: "file",
        file: path.join(__dirname,`./../config/config.${process.env.NODE_ENV || "dev" }.json`)
    }
});


function getServerConfig(){
    return configProvider.get("server");
}

function getDatabaseConfig(){
    return configProvider.get("database");
}

module.exports = {
    getServerConfig: getServerConfig(),
    getDatabaseConfig: getDatabaseConfig()
}