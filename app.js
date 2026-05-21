const sequelize = require('./config/db')
// const { Categoria, Producto } = require('./models/index') 


const { listarProductos, crearProducto, actualizarProducto, eliminarProducto } = require('./controllers/productosController')
const { listarCategorias, crearCategoria, actualizarCategoria, eliminarCategoria} = require('./controllers/categoriasController')
const { obtenerProductosCategorias, obtenerCategoriasConProductos, buscarProductos } = require('./controllers/productosCategoriasController')

async function main() {
    try {
        await sequelize.sync({ force: true })
        console.log('Tablas creadas correctamente')

        //Creando categorias
        await crearCategoria('Notebooks')
        await crearCategoria('Periféricos')
        await crearCategoria('Smartphones')
        await listarCategorias()

        //Creando productos
        await crearProducto('Teclado Mecánico', 49.99, 10, 2)
        await crearProducto('Mouse Gamer', 79.99, 15, 2)
        await crearProducto('Lenovo Legion', 1000, 5, 1)
        await crearProducto('Poco X6 PRO', 799.99, 5, 3)
        await listarProductos()
        // await actualizarProducto(2, { precio: 59.99, stock: 20 })
        // await listarProductos()
        // eliminarProducto(3)
        // await listarProductos()

        console.log('Obtener Productos con su categoría')
        await obtenerProductosCategorias()

        console.log('Obtener Categorias con sus productos')
        await obtenerCategoriasConProductos()

        console.log('Productos encontrados')
        await buscarProductos({nombre: 'Mouse Gamer'})
        await buscarProductos({categoria: 'Periféricos'})
    } catch (error) {
        console.error('Error en la aplicación', error)
    }
}

main()