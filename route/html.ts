import Router from 'koa-router';
import indexController from '/../src/controller/html/index';
import signController from '/../src/controller/html/signin';

const router = new Router();

router.get('/index', indexController.index);
router.get('/signin', signController.signin);
router.get('/signin-ok', signController.signinOk);
router.get('/signin-failed', signController.signinFailed);

export default router;
