const Router = require('koa-router');
const posts = require('./posts');

const api = new Router();

api.use('/posts', posts.routes());

// Test 예제
// api.get('/test', ctx => {
//     ctx.body = 'test 성공';
// });

// 라우터를 내보냅니다.
module.exports = api;