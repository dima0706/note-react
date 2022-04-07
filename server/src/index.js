const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')({ prefix: '/api' });

router.get('/note/list', async (ctx) => {
  ctx.body = '列表';
});

router.get('/note/:id', async (ctx) => {
  ctx.body = '详情';
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
