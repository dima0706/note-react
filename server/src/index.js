const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

app.use((ctx, next) => {
  if (ctx.request.method === 'POST') {
    console.log(`Process ${ctx.request.method} ${ctx.request.url} => ${JSON.stringify(ctx.request.body)}`);
  } else {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
  }
  next();
});

app.use(router.routes());

app.listen(3000);
