/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const usuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const router = routerx();

//.com/api/auth/list
router.get('/list' ,  usuarioController.list);

//.com/api/auth/register/
router.post('/register' ,  usuarioController.register);

//.com/api/auth/signin/
router.post('/login', usuarioController.login);

//.com/api/auth/update/
router.put('/update', usuarioController.update);

//.com/api/auth/deactivate
router.put('/deactivate', usuarioController.deactivate);

//.com/api/auth/update/
router.put('/activate', usuarioController.activate);

module.exports = router;