// url 相关方法

/**
 * 将当前的 url query 解析成 key => value 的形式
 */
export function parseQuery() {
  const q = {};
  if (!location) {
    throw new Error('全局没有 location，请检查运行环境');
  }

  location.search.replace(/([^?&=]+)=([^&]+)/g,(_,k,v)=>q[k]=v);
  return q;
}