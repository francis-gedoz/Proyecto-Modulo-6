const express = require('express');
const { getAllGuitars, createGuitar, updateGuitarById, deleteGuitarById, getGuitarById } = require('../controllers/guitar.controller');

const guitarRouter = express.Router();

guitarRouter.get('/', getAllGuitars); // localhost:3000/guitars
guitarRouter.get('/:id', getGuitarById); // localhost:3000/guitars/:id
guitarRouter.post('/', createGuitar); // localhost:3000/guitars
guitarRouter.put('/:id', updateGuitarById); // localhost:3000/guitars/:id
guitarRouter.delete('/:id', deleteGuitarById); // localhost:3000/guitars/:id

module.exports = guitarRouter;