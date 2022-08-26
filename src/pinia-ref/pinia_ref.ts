import type { RegisterArrayType } from './pinia_ref.d'
import {watch} from "vue";

// 创建一个对象并暴露
export default function PiniaRef() {}

PiniaRef.register = ([] as Array<RegisterArrayType>);

PiniaRef.RegisterRun = (array:Array<RegisterArrayType>) => {

    // 遍历注册数组内的对象
    array.forEach((item) => {

        // 从本地获取数组
        let localValue = window.localStorage.getItem(item.key);

        // 不为空的话把值还原从而做到持久化
        if(localValue !== undefined && localValue !== null) {
            item.variable.value = localValue
        }

        // 监听修改后的值
        watch(item.variable, (newValue) => {
            window.localStorage.setItem(item.key, newValue);
        });
    });
}