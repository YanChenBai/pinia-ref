import {ReactiveEffectOptions, Ref} from "vue";

// 单个注册对象的属性
export interface RegisterArrayType {
    variable: Ref,
    key: string,
    serialization: boolean
}