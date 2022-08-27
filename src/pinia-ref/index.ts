import type {App} from "vue";
import PiniaRef from "./pinia_ref"
import type { RegisterDataType } from './pinia_ref.d'

// 添加install方法让插件可在vue下导入
(PiniaRef as any).install = function(app:App): void { }

// 修改this指向
let structure:any = PiniaRef.structure.bind(PiniaRef.register)

// 暴露函数
export default PiniaRef
export { PiniaRef, structure }
export type { RegisterDataType }