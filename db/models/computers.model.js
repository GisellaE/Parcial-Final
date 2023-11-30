const { DataTypes } = require('sequelize');


function defineComputer( sequelize ) {
    sequelize.define('computer', {
        //Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Marca:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ram:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        almacenamiento:{
            type: DataTypes.STRING,
            allowNull: false
        },
        año:{
            type: DataTypes.DATE,
            allowNull: false
        },
        sn:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cpu:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Model:{
            type: DataTypes.STRING,
            allowNull: false
        },
        precio:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    
    }, {
        //Other model options go here
        timestamps: false
    });
}

module.exports = defineComputer;