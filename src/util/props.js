const _toString = Object.prototype.toString

export function isPlainObject(obj) {
    _toString.call(obj) === '[object Object]'
}