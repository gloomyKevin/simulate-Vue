import { mergeOptions } from '../../util/index.js'

let uid = 0

export function initMixin (Vue) {
    // _init是挂载在Vue原型上的内部方法
    Vue.prototype._init = function(options) {
        console.log('initMixin，参数为：', options)

        // 声明常量vm，this的值为当前实例
        // TODO深入思考此处的this
        const vm = this
        console.log('%c [ vm ]', 'font-size:13px; background:pink; color:#bf2c9f;', vm)
        console.log('%c [ vm.constructor ]', 'font-size:13px; background:pink; color:#bf2c9f;', vm.constructor)

        // uid定义在initMixin上，每实例化一个Vue实例，_uid的值都会+1
        // 即:uid是一个Vue实例的实例属性
        vm._uid = uid++

        // 标识一个对象是Vue实例
        // 可避免该对象被响应系统观测
        vm._isVue = true

        // 接下来的一大坨init方法，都依赖于vm的$options属性
        // 该函数即生成$options属性，挂在Vue实例上
        vm.$options = mergeOptions(
            resolveConstructorOptions(vm.constructor),
            options || {},
            vm
        )
    }
}

export function resolveConstructorOptions (Ctor) {
    let options = Ctor.options
    return options
}