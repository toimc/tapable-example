const { SyncLoopHook } = require('tapable');

const hook = new SyncLoopHook(['arg1', 'arg2']);

const t = new Date().getTime();

hook.tap('a', (arg1) => {
  console.log('a arg1', arg1);
  console.log('time', new Date().getTime() - t);
  // 直接中断后面的b c执行
  return Math.random() > 0.5 ? undefined : 'error';
});

hook.tap('b', (arg1) => {
  console.log('b arg1', arg1);
});

hook.tap('c', (arg1) => {
  console.log('c arg1', arg1);
});

hook.call('toimc');
