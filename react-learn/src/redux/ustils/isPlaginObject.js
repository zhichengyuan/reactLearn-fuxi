/**
 * 判断某个对象是否是一个plain-object
 * @param {*} obj 
 */

export default  function isPlainObject(obj) {
    if(typeof obj !== 'object') {
        return false;
    }
    return obj.__proto__ === Object.prototype;
}