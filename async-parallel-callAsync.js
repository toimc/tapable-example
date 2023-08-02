const { AsyncParallelHook } = require('tapable');

const hook = new AsyncParallelHook(['arg1', 'arg2']);

console.time('timer');
hook.tapAsync('a', (arg1, arg2, callback) => {
  console.log('async hook a', arg1, arg2);
  setTimeout(() => {
    // err
    console.log('a callback');
    callback(null);
  }, 1000);
});

hook.tapAsync('b', (arg1, arg2, callback) => {
  console.log('async hook b', arg1, arg2);
  setTimeout(() => {
    // err
    console.log('b callback');
    callback('error');
    // callback();
  }, 500);
});

hook.tapAsync('c', (arg1, arg2, callback) => {
  console.log('async hook c', arg1, arg2);
  setTimeout(() => {
    // err
    console.log('c callback');
    callback(null);
  }, 2000);
});

hook.callAsync('arg1', 'arg2', (err) => {
  console.log('callback is called');
  console.timeEnd('timer');
  if (err) {
    console.error(err);
  }
  // todo ...
});
