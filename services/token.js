var jwt = require('jsonwebtoken');
const models = require('../models');


module.exports = {

    //generar el token
    encode: async (user) => {

        const token = jwt.sign({
            id: user.id,
            nombre: user.nombre,
            rol: user.rol,
            email: user.email
        }, 'cadena secreta',
            { expiresIn: 86400 });

        return token
    },
    //permite decodificar el token
    decode: async (token) => {
        try {
            const { id, exp } = await jwt.verify(token, 'cadena secreta');
            // console.log(exp);
            // console.log(id);
            const user = await models.Usuario.findOne({
                where: {
                    id: id,
                   // estado: 1
                }
            });

            // console.log(user);

            if (user) {
                return user;
            } else {
                return false;
            }
        } catch (error) {
            try {
                if (exp < Date().now() / 1000) {
                    const token = encode(user);
                    return token;
                } else {
                    return false;
                }
            } catch (error) {
                return false;
            }
        }
    }
}