// 类型判断的工具函数

const toString = Object.prototype.toString;

/**
 * 判断是否为 'Array'
 * 
 * @param {Object} val 要测试的值
 * @returns {boolean} 如果value是一个'Array'，则返回true，否则返回false
 */
export function isArray(val) {
  return toString.call(val) === '[object Array]';
}