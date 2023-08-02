const { SyncBailHook } = require('tapable');

const hook = new SyncBailHook(['arg1', 'arg2']);

hook.tap('a', (arg1) => {
  console.log('a arg1', arg1);
  // 直接中断后面的b c执行
  return 'unexpected';
});

hook.tap('b', (arg1) => {
  console.log('b arg1', arg1);
});

hook.tap('c', (arg1) => {
  console.log('c arg1', arg1);
});

hook.call('toimc');
