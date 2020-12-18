const routerx = require('express-promise-router');
const categoriaRouter = require('./categoria');
const articuloRouter = require('./articulo');
const usuarioRouter = require('./usuario');



const router = routerx();

router.use('/articulo', articuloRouter);
router.use('/usuario', usuarioRouter);
router.use('/categoria', categoriaRouter);

module.exports = router;