const { AsyncSeriesWaterfallHook } = require('tapable');

const hook = new AsyncSeriesWaterfallHook(['arg1', 'arg2']);

console.time('timer');

hook.tapPromise('a', (arg1) => {
  return new Promise((resolve, reject) => {
    // resolve = callback()
    // reject = callback(err)
    setTimeout(() => {
      console.log('a promise');
      resolve();
    }, 1000);
  });
});

hook.tapPromise('b', (arg1) => {
  return new Promise((resolve, reject) => {
    // resolve = callback()
    // reject = callback(err)
    setTimeout(() => {
      console.log('b promise');
      resolve('b result');
      // reject('xxxx');
    }, 500);
  });
});

hook.tapPromise('c', (arg1) => {
  console.log('🚀 ~ file: index.js:31 ~ hook.tapPromise ~ arg1:', arg1);
  return new Promise((resolve, reject) => {
    // resolve = callback()
    // reject = callback(err)
    setTimeout(() => {
      console.log('c promise');
      resolve('c result');
    }, 2000);
  });
});

hook
  .promise('toimc')
  .then((res) => {
    console.log('🚀 ~ file: index.js:44 ~ .then ~ res:', res);
    console.timeEnd('timer');
    console.log('promise is done');
  })
  .catch((err) => {
    console.log('promise error:' + err);
  });
