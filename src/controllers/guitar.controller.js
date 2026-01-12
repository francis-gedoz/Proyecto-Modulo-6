const Guitar = require('../models/Guitar');
const mongoose = require('mongoose');

exports.getAllGuitars = async (req, res) => {
        try {
        const guitars = await Guitar.find({});
        return res.status(200).json({ guitars });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener las guitarras', 
            error: error.message,
        });
    }
}

exports.createGuitar = async (req, res) => {
        try {
        const { name, price, description } = req.body;
        const newGuitar = await Guitar.create({ name, price, description });

        if (!newGuitar) return res.status(400).json({ error: 'Nofue posible crear la guitarra' });

        return res.status(201).json({ datos: newGuitar });

    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear la guitarra',
            error: error.message,
        });
    }
}

exports.updateGuitarById = async (req, res) => {
        try {
        const { name, price, description } = req.body;
        const updatedGuitar = await Guitar.findByIdAndUpdate(
            req.params.id,
            { name, price, description },
            { new: true, runValidators: true }
        );
        if (!updatedGuitar) return res.status(404).json({ message: 'Guitarra no encontrada' });
        return res.status(200).json({ guitarrActualizada: updatedGuitar });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al actualizar la guitarra',
            error: error.message,
        });
    }
}

exports.deleteGuitarById = async (req, res) => {
        try {
        const deletedGuitar = await Guitar.findByIdAndDelete(req.params.id);
        if (!deletedGuitar) return res.status(404).json({ message: 'Guitarra no encontrada' });
        return res.status(200).json({ message: 'Guitarra eliminada correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al eliminar la guitarra',
            error: error.message,
        });
    }
}

exports.getGuitarById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'ID de guitarra inválido' });
        }

        const guitar = await Guitar.findById(id);
        if (!guitar) return res.status(404).json({ message: 'Guitarra no encontrada' });

        return res.status(200).json({ guitar });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener la guitarra',
            error: error.message,
        });
    }
}