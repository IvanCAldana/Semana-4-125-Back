/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const categoriaController = require('../controllers/CategoriaController');
const auth = require('../middlewares/auth');

const router = routerx();


//.com/api/auth/list
router.get('/list' , categoriaController.list);

//.com/api/auth/add
router.post('/add' , auth.verifyUsuario, categoriaController.add);

//.com/api/auth/activate
router.put('/activate', auth.verifyUsuario, categoriaController.activate);

//.com/api/auth/deactivate
router.put('/deactivate', auth.verifyUsuario, categoriaController.deactivate);

//.com/api/auth/update/
router.put('/update',auth.verifyUsuario, categoriaController.update);


module.exports = router;