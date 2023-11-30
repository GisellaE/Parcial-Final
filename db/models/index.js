const defineComputer = require("./computers.model");

function defineModels( sequelize ){
    defineComputer(sequelize)
    //Other models go here
}

module.exports = defineModels