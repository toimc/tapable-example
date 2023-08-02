const { SyncWaterfallHook } = require('tapable');

const hook = new SyncWaterfallHook(['arg1', 'arg2']);

hook.tap('a', (arg1) => {
  console.log('a arg1', arg1);
});

hook.tap('b', (arg1) => {
  console.log('b arg1', arg1);
  // 把值传递给c
  return 'value from b';
});

hook.tap('c', (arg1) => {
  console.log('c arg1', arg1);
});

hook.call('toimc');
