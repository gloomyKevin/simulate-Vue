export function initMixin (Vue) {
    // _init是挂载在Vue原型上的内部方法
    Vue.prototype._init = function(options) {
        console.log('initMixin，参数为：', options)
    }
}