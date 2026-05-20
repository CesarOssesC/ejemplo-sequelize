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
        
    }
}