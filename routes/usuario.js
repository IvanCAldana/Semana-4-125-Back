/* un Ejemplo  de como se veria la ruta listar - modelo del  articulo*/
const routerx = require('express-promise-router');
const usuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const router = routerx();

//.com/api/auth/list
router.get('/list' , auth.verifyUsuario, usuarioController.list);

//.com/api/auth/register/
router.post('/register' , auth.verifyUsuario, usuarioController.register);

//.com/api/auth/signin/
router.post('/login', usuarioController.login);

//.com/api/auth/update/
router.put('/update',auth.verifyUsuario, usuarioController.update);

module.exports = router;