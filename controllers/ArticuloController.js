const models = require('../models');

exports.list = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.findAll();
        res.status(200).json(articulo);
    }
    catch (e) {
        res.status(404).send({
            message: 'No hay articulos'
        });
        next(e);
    }
};

exports.add = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.create(req.body);
        res.status(200).send({
            message: 'Realizado'
        });
    }
    catch (e) {
        res.status(500).send({
            message: 'Error'
        });
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.update(
            {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                codigo: req.body.codigo
            }, {
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


exports.activate = async (req, res, next) => {
    try {
        const articulo = await models.Articulo.update(
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
        const articulo = await models.Articulo.update(
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