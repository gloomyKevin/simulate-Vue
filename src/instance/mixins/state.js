export function stateMixin (Vue) {

    const dataDef = {}
    dataDef.get = function () {
        // return this._data
        console.log('触发stateMixin get: dataDef')
    }
    dataDef.set = function () {
        // return this._data
        console.log('触发stateMixin set: dataDef')
    }

    const propsDef = {}
    propsDef.get = function () {
        // return this._props
        console.log('触发stateMixin get: propsDef')
    }
    propsDef.set = function () {
        // return this._props
        console.log('触发stateMixin set: propsDef')
    }
    // 这里使用自定义程度更高的原型挂载方式
    // 思考：为什么要在这里特殊处理
    Object.defineProperty(Vue.prototype, '$state', dataDef)
    Object.defineProperty(Vue.prototype, '$props', propsDef)

    // Vue.prototype.$set = set
    // Vue.prototype.$delete = del

    Vue.prototype.$watch = function () {

    }
}

