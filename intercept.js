const { SyncLoopHook } = require('tapable');

const hook = new SyncLoopHook(['arg1', 'arg2']);

hook.intercept({
  call: (arg1, arg2) => {
    console.log('Intercept before call', arg1, arg2);
  },
  register: (tapInfo) => {
    console.log(`Registered ${tapInfo.name}`);
    return tapInfo;
  },
  loop: (arg1, arg2) => {
    console.log('Loop intercepted');
  },
  tap: (tapInfo) => {
    console.log(`Tapped into ${tapInfo.name}`);
  },
});

const t = new Date().getTime();

hook.tap('a', (arg1) => {
  console.log('a arg1', arg1);
  console.log('time', new Date().getTime() - t);
  // 如果返回undefined则直接继续执行，否则中断，重新执行Loop最开始的一个tap注册函数
  return Math.random() > 0.5 ? undefined : 'error';
});

hook.tap('b', (arg1) => {
  console.log('b arg1', arg1);
});

hook.tap('c', (arg1) => {
  console.log('c arg1', arg1);
});

hook.call('toimc');
