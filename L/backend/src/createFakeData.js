import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map(i => ({
    title: `포스트 #${i}`,
    body:
      'President Donald Trump set out to steady a rattled nation and a diving economy in a solemn Oval Office address, but instead sowed more confusion and doubts that he is up to handling the fast-worsening coronavirus crisis.',
    tags: ['가짜', '데이터'],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
