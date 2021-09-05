import { ASSET_TYPES } from '../shared/constants.js'

// 给Vue添加全局API
// 全局API以静态属性和方法的形式被添加到Vue构造函数上
export function initGlobalAPI(Vue) {
    const configDef = {}

    configDef.get = function () {
        console.log('initGlobalAPI - configDef - get')
    }

    configDef.set = function () {
        console.log('initGlobalAPI - configDef - set')
    }

    Object.defineProperty(Vue, 'config', configDef)

    // 向Vue挂载options属性
    Vue.options = Object.create(null)

    ASSET_TYPES.forEach(type => {
        Vue.options[type + 's'] = Object.create(null)
    })

    console.log('%c [ Vue.options ]', 'font-size:13px; background:pink; color:#bf2c9f;', Vue.options)

    // 执行完后，Vue.options变成
    // Vue.options = {
    //     components: Object.create(null),
    //     directives: onabort.create(null),
    //     filters: Object.create(null)
    // }
}