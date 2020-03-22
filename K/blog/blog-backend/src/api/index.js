import Router from 'koa-router';
import posts from './posts';

const api = new Router();

api.use('/posts', posts.routes());

// Test 예제
// api.get('/test', ctx => {
//     ctx.body = 'test 성공';
// });

// 라우터를 내보냅니다.
export default api;