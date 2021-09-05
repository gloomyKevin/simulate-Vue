// 存放Vue构造函数

// inject mixin
import { initMixin } from './mixins/initMixin.js'
import { stateMixin } from './mixins/state.js'
import { eventsMixin } from './mixins/events.js'

function Vue (options) {
    // 实例挂载方法
    // 在new Vue 的时候，将该方法作为一切的起点
    this._init(options)

    // this.initMixinTest(options)
}

// 以 Vue 作为参数传递给Mixin
// 通过Mixin不断增强构造函数Vue的能力，避免直接在构造函数里写一大坨的原型挂载方法
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)

// 等同于这一句
// Vue.prototype.initMixinTest = function(options) {
//     console.log('initMixin，参数为：', options)
// }

export default Vue