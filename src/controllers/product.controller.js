const Product = require('../models/Product');
const mongoose = require('mongoose');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener los productos',
            error: error.message,
        });
    }
}

exports.createProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const newProduct = await Product.create({ name, price, description });

        if (!newProduct) return res.status(400).json({ error: 'No fue posible crear el producto' });

        return res.status(201).json({ datos: newProduct });

    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear el producto',
            error: error.message,
        });
    }
}

exports.updateProductById = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price, description },
            { new: true, runValidators: true }
        );
        if (!updatedProduct) return res.status(404).json({ message: 'Producto no encontrado' });
        return res.status(200).json({ productoActualizado: updatedProduct });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al actualizar el producto',
            error: error.message,
        });
    }
}

exports.deleteProductById = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ message: 'Producto no encontrado' });
        return res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al eliminar el producto',
            error: error.message,
        });
    }
}

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de producto inválido' });
        }

        const product = await Product.findById(id);
        if (!product) return res.status(404).json({ message: 'Producto no encontrado' });

        return res.status(200).json({ product });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener el producto',
            error: error.message,
        });
    }
}
