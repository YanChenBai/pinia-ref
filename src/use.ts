import type { RegisterArrayType } from './pinia-ref'
import {ref} from "vue";

// 声明ref变量
export const theme = ref('dark');
export const language = ref('cn');

// 注册声明的ref变量
const RegisterList:RegisterArrayType[] = [
    { key: 'theme', variable: theme, serialization: false },
    { key: 'language', variable: language, serialization: false },
]

export default RegisterList;