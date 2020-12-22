const models = require('../models');
const bcrypt = require('bcryptjs');
const tokenservices = require('../services/token');

exports.login = async (req, res, next) => {
    try { 
        const user = await models.Usuario.findOne(
            { where: { email: req.body.email } });

        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)
            if (passwordIsValid) {
                const token = await tokenservices.encode(user);

                res.status(200).send({
                    auth: true,
                    tokenReturn: token
                });
            } else {
                res.status(401).send({
                    auth: false, accessToken: null, reason:
                        "Invalid Password!"
                });
            }
        } else {
            res.status(404).send('User Not Found.');
        }
    } catch (e) {
        res.status(500).json({ message: 'Error!!!!' });
        next(e);
    }
};

exports.register = async (req, res,next) => {
    try {
        console.log("datos usuario a crear ", req.body);
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        console.log("datos usuario a crear ", req.body);
        const users = await models.Usuario.create(req.body);
        res.status(200).json(users);
    }
    catch (e) {
        res.status(500).json({ message: 'Error!!!!' });
        next('Error en registro',e);
    }
}

exports.list = async (req, res,next) => {
    try {
        const users = await models.Usuario.findAll();
        res.status(200).json(users);
    }
    catch (e) {
        res.status(500).json({ message: 'Error!!!!' });
        next('Error listado', e);
    }
};

exports.update = async (req, res, next) => {
    try {
        //console.log(req.body)
        const user = await models.Usuario.findOne({ where: { id: req.body.id }});
        if (user) {
            const user = await models.Usuario.update({ 
                nombre: req.body.nombre,
                rol: req.body.rol,
                email: req.body.email
             },
                {
                    where: {
                        id: req.body.id
                    },
                });
            res.status(200).json(user);
        } else {
            res.status(404).send({
                message: 'usuario no encontrado'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }
};

exports.activate = async (req, res, next) => {
    try {
        const user = await models.Usuario.update(
            { estado: 1 },
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).send({
            message: 'Realizado'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }
};


exports.deactivate = async (req, res, next) => {
    try {
        const user = await models.Usuario.update(
            { estado: 0 },
            {
                where: {
                    id: req.body.id
                },
            });
        res.status(200).send({
            message: 'Realizado'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }
};
