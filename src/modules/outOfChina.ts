/**
 * @description: 这是一个判断是否在中国境内的函数
 * @param {number} lng 经度
 * @param {number} lat 维度
 * @return {*} 布尔值
 * @example
 * const bool = outOfChina(0, 0);
 */
export function outOfChina(lng: number, lat: number): boolean {
  // 纬度3.86~53.55,经度73.66~135.05  ||  韩国为 true
  return (
    !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55) ||
    (lng > 123.267246 && lng < 145.123572 && lat > 30.824269 && lat < 39.082198)
  );
}

/**
 * @description: 开心函数
 * @param {*} str
 * @return {*}
 */
export function happy(str: '高兴' | '快乐' | '开心'): string {
  return `今天真${str}`;
}

// 输出文档
// jsdoc2md ./dist/yuanquanke-js-utils.cjs.development.js > README.md
