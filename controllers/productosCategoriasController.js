const { Producto, Categoria } = require('../models')

async function obtenerProductosCategorias() {
    try {
        const productos = await Producto.findAll({
            include: {
                model: Categoria,
                as: 'categoria',
                attributes: ['id', 'nombre']
            }
        })

        console.log('Productos con categorias: ', productos.map(p => p.toJSON()))
    } catch (error) {
        console.error('Error al intentar obtener los productos con sus categorias.', error)
    }
}

async function obtenerCategoriasConProductos() {
    try {
        const categorias = await Categoria.findAll({
            include: {
                model: Producto,
                as: 'productos',
                attributes: ['id', 'nombre', 'precio', 'stock']
            }
        })
        console.log('Categorias con sus productos: ', categorias.map(c => c.toJSON()))
    } catch (error) {
        console.error('Error al intentar obtener las categorias con sus productos.', error)
    }
}

async function buscarProductos({ nombre, categoria, precio }) {
    try {
        const productosBuscados = {}
        if (nombre) productosBuscados.nombre = nombre
        if (precio) productosBuscados.precio = precio

        if (categoria) {
            const cat = await Categoria.findOne({ where: {nombre: categoria }})
            if (!cat) {
                console.log('No se encontró la categoría')
            }
            productosBuscados.categoriaId = cat.id
        }

        const productos = await Producto.findAll({
            where: productosBuscados,
            include: { model: Categoria, as: 'categoria'}
        })

        console.log('Productos encontrados: ', productos.map(p => p.toJSON()))
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    obtenerProductosCategorias,
    obtenerCategoriasConProductos,
    buscarProductos
}