const { AsyncParallelHook } = require('tapable');

const hook = new AsyncParallelHook(['arg1', 'arg2']);

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
      resolve();
      // reject('xxxx');
    }, 500);
  });
});

hook.tapPromise('c', (arg1) => {
  return new Promise((resolve, reject) => {
    // resolve = callback()
    // reject = callback(err)
    setTimeout(() => {
      console.log('c promise');
      resolve();
    }, 2000);
  });
});

hook
  .promise('toimc')
  .then(() => {
    console.timeEnd('timer');
    console.log('promise is done');
  })
  .catch((err) => {
    console.log('promise error:' + err);
  });
