import { isPlainObject } from '../props.js'

// 合并两个选项对象为一个新对象
export function mergeOptions (parent, child, vm) {
    // child除了是一个对象，还可以是函数
    // 如果是函数则取函数的options静态属性
    // 如此，允许我们在进行选项合并时，去合并一个Vue实例构造者
    if (typeof child === 'function') {
        child = child.options
    }

    normalizeProps(child, vm)
    // normalizeInject(child, vm)
    // normalizeDirectives(child)

    // 暂时忽略对 extends 和 mixin 的处理

    const options = {}

    // 策略模式的学习
    return options
}

// 可以将数组形式的props规范为对象形式
function normalizeProps (options, vm) {
    const props = options.props
    if (!props) return
    // let objCache = {}

    // // 1. 转换规范
    // // props: ["someData"] -> props: { somData: {type: null}}
    // // props: { somData } -> props: { somData: {type: null}}
    // // 2. 需要对value校验并转换为小驼峰形式
    // if (Array.isArray(options)) {
    //     options.forEach((value) => {
    //         arrObjCache.value = {type: null}
    //     })
    // } else if(isPlainObject(props)) {
    //     Object.keys(props).forEach((key) => {
    //         let value = props[key]
    //         objCache = isPlainObject(value)
    //         ? value
    //         : {type: value}
    //     })
    // }

    // 模仿Vue官方写法
    const res = {}
    let u, val, name
    if (Array.isArray(props)) {
        i = props.length
        while (i--) {
            val = props[i]
            if (typeof val === 'string') {
                name = key
                // name = camelize(val)
                res[name] = { type: null }
            }
        }
    } else if (isPlainObject(props)) {
        for (const key in props) {
            val = props[key]
            name = key
            // name = camelize(key)
            res[name] = isPlainObject(val)
                ? val
                : { type: val }
        }
    }

    options.props = objCache
}

function normalizeInject (options, vm) {

}

function normalizeDirectives (options) {

}