// core文件夹下存储 - 平台无关的代码
import Vue from '../instance/index'
import { initGlobalAPI}  from './global-api/index'

initGlobalAPI(Vue)

export default Vue