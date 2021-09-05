// 存放Vue构造函数

// inject mixin
import { initMixin } from './mixins/initMixin'

function Vue (options) {
    // 实例挂载方法
    this._init(options)
}

// 以 Vue 作为参数传递给Mixin
initMixin(Vue)

export default Vue