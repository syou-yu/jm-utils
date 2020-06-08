/**
 * 设备判断的工具函数
 */

/**
 * 确定设备是 移动设备 还是 台式机/笔记本电脑
 */
export function deviceType() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop'
  ;
}