const models = require('../models');

exports.list = async (req, res,next) => {
    try {
        const categoria = await models.Categoria.findAll();
        res.status(200).json(categoria);
    }
    catch (e) {
        res.status(404).send({
            message: 'No hay categorias'
        });
        next(e);
    }
};

exports.add = async (req, res, next) => {
    try {
        //console.log(req.body);
        const categoria = await models.Categoria.create(req.body);
        res.status(200).json(categoria);
    }
    catch (e) {
        res.status(500).send({
            message: 'Error'
        });
        next(e);
    }
};

exports.update = async (req, res, next) => {
    try {
        const categoria = await models.Categoria.update(
            {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion
            }, {
            where: {
                id: req.body.id
            },
        });
        res.status(200).json(categoria);
    } catch (e) {
        res.status(500).send({
            message: 'Error'
        });
        next(e);
    }
};


exports.activate = async (req, res, next) => {
    try {
        const categoria = await models.Categoria.update(
            { estado: 1 },
            {
                where: {
                    id: req.body.id,
                },
            });
        res.status(200).send({
            message: 'Realizado'
        });;
    } catch (e) {
        res.status(500).send({
            message: 'Error'
        });
        next(e);
    }
};


exports.deactivate = async (req, res, next) => {
    try {
        console.log(req.body.id);
        const categoria = await models.Categoria.update(
            { estado: 0 },
            {
                where: {
                    id: req.body.id,
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
