import type {App} from "vue";
import PiniaRef from "./pinia_ref"
import type { RegisterArrayType } from './pinia_ref.d'

// 添加install方法让插件可在vue下导入
(PiniaRef as any).install = function(app:App): void {
    if(PiniaRef.register.length > 0) {
        PiniaRef.RegisterRun(PiniaRef.register)
    }
}

// 暴露函数
export default PiniaRef
export { PiniaRef }
export type { RegisterArrayType }