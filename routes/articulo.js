/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const articuloController = require('../controllers/ArticuloController');
const auth = require('../middlewares/auth');

const router = routerx();


//.com/api/auth/list
router.get('/list' , articuloController.list);

//.com/api/auth/add
router.post('/add' ,  articuloController.add);

//.com/api/auth/activate
router.put('/activate',  articuloController.activate);

//.com/api/auth/deactivate
router.put('/deactivate',  articuloController.deactivate);

//.com/api/auth/update/
router.put('/update', articuloController.update);


module.exports = router;