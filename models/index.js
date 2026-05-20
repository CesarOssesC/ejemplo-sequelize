const sequelize = require('../config/db')
const Categoria = require('./Categoria')
const Producto = require('./Producto')

Categoria.hasMany(Producto, {
    foreignKey: 'categoriaId',
    as: 'productos'
})

Producto.belongsTo(Categoria, {
    foreignKey: 'categoriaId',
    as: 'categoria',
    onDelete: 'CASCADE'
})


module.exports = {
    sequelize,
    Categoria,
    Producto
}