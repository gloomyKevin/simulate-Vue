// core文件夹下存储 - 平台无关的代码
import Vue from '../instance/index.js'
import { initGlobalAPI}  from './global-api/index.js'

initGlobalAPI(Vue)

export default Vue