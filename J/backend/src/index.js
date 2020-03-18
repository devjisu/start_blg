const koa = require('koa');
const app = new koa();

app.use(ctx => {
    ctx.body = 'hello koa';
})

app.listen(4000, () => {
    console.log('koa server OK');
})