const sequelize = require('./config/db')
const { Categoria, Producto } = require('./models/index') 


// const { listarProductos, crearProducto, actualizarProducto, eliminarProducto } = require('./controllers/productosController')

async function main() {
    try {
        await sequelize.sync({ force: true })
        console.log('Tablas creadas correctamente')

        // await crearProducto('Teclado Mecánico', 49.99, 10)
        // await crearProducto('Mouse Gamer', 79.99, 15)
        // await crearProducto('Lenovo Legion', 1000, 5)
        // await listarProductos()
        // await actualizarProducto(2, { precio: 59.99, stock: 20 })
        // await listarProductos()
        // eliminarProducto(3)
        // await listarProductos()
    } catch (error) {
        console.error('Error en la aplicación', error)
    }
}

main()