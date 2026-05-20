const { DataTypes } = require('sequelize')
const sequelize = require('../config/db')



const Categoria = sequelize.define('categoria', 
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: 'categorias'
    }    
)


module.exports = Categoria;