const router = require('koa-router')({ prefix: '/api' });

router.get('/note/list', require('./note/getList'));
router.get('/note/:id', require('./note/getDetail'));
router.get('/note/category', require('./note/getCategory'));

module.exports = router;
