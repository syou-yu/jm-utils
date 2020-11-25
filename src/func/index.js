// 常用的工具函数

/**
 * 休眠
 * 
 * @param {number} delay 休眠时间，单位毫秒
 * @return {Promise}
 */
export function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

/**
 * 防抖 思路：
 * 先开启一个定时任务执行，定时任务完成后则清空；当再调用时，如果定时任务仍存在则清空原来任务，创建新的定时任务
 */
export function debounce(fn, space) {
  let task = null;
  return function (){
    if(task) {
      clearTimeout(task);
    }
    task = setTimeout(fn.apply(this, arguments), space);
  }
}

 /**
  * 节流 思路：
  * 先开启一个定时任务执行，定时任务完成后则清空，当再调用时，如果定时任务仍存在则不执行任何操作
  */
export function throttle(fn, space) {
  let task = null;
  return function () {
    if(!task) {
      task = setTimeout(function () {
        task = null;
        fn.apply(this, arguments);
      }, space);
    }
  }
}
