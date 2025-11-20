const Resena = require(/Controles/resenacontroles); // Importa el modelo Resena de Mongoose

// C - Crear reseñ
exports.crearResena = async (req, res) => {
    try {
        const nuevaResena = new Resena(req.body); // Crea un objeto Resena con los datos enviados en el body
        await nuevaResena.save(); // Guarda la reseña en la base de datos
        res.status(201).json(nuevaResena); // Retorna la reseña creada con código 201
    } catch (error) {
        res.status(400).json({ // Si hay error en los datos enviados
            error: 'Error al crear la reseña', 
            details: error.message
        });
    }
};