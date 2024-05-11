const jwt = require('jsonwebtoken');

//Almacenamos la llave secreta
const JWT_SECRET = "96938040c389dd3025ac341ec27127ee9f9e218f2f3971c753520bad7a29a74b";

//creamos una funcion para generar el token
function generateToken(user) {
    const payload={
        userId: user._id,
        email: user.email
    };

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'});
    return token;
}

module.exports = {
    generateToken
}