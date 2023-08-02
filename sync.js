const { SyncHook } = require('tapable');

const hook = new SyncHook(['name']);

hook.tap('a', (name) => {
  console.log('a name: ', name);
});

hook.tap('b', (name) => {
  console.log('b name: ', name);
});

hook.call('toimc');

// 多参数示例
const hook1 = new SyncHook(['arg1', 'arg2']);

hook1.tap('a', (arg1, arg2) => {
  console.log('a arg1', arg1);
  console.log('a arg2', arg2);
});

hook1.tap('b', (arg1, arg2) => {
  console.log('b arg1', arg1);
  console.log('b arg2', arg2);
});

hook1.call('arg1 value', 'arg2 value');
