import type { RegisterDataType } from './pinia_ref.d'
import {reactive, ref, watch} from "vue";


export default function PiniaRef() {}

// 挂载到register.state 并且实施监听
PiniaRef.create = function (data:RegisterDataType) {

    // 判断是否已经注册
    if( this.register.state[data.key] === undefined ||
        this.register.state[data.key] === null  ) {

        let local = window.localStorage.getItem(data.key)
        let state = data.state()
        if( local !== undefined && local !== null ) {
            state = JSON.parse(local)
        }
        this.register.state[data.key] = reactive(state)
    }

    // 监听对象做本地保存
    watch(this.register.state[data.key], (newData) => {
        window.localStorage.setItem(data.key, JSON.stringify(newData))
    })

    // 返回函数的目的是把key值挂在在函数上，但又不会干扰真正需要传递的值
    let tmp = this.register.state[data.key]
    let res:any = () => tmp
    res.fromKey = data.key

    return res;
}

PiniaRef.structure = function (getData:any) {

    let fromKey = getData.fromKey
    let keys = Object.keys(getData())
    let data = getData()

    // this已被修改为 PiniaRef.register.ref
    let register = (this as any)

    // 检查ref中是否存在
    if(register[fromKey] === undefined || register[fromKey] ===null) {
        register[fromKey] = {}
    }

    for (let key of keys) {

        if(typeof data[key] === 'object') {
            register[fromKey][key] = reactive(data[key])
        }else {
            register[fromKey][key] = ref(data[key])
        }

        // 监听导出元素同步state中的值
        watch(register[fromKey][key],(newData) => {
            data[key] = newData
        })
    }

    // 监听如果state发生了修改同步到ref中
    watch(data, (newData) => {
        for (let itemKey in newData) {
            if(register[fromKey][itemKey].value) {
                register[fromKey][itemKey].value = newData[itemKey]
            } else {
                register[fromKey][itemKey] = newData[itemKey]
            }
        }
    })

    return register[fromKey];
}

// 用于存储注册的数据
PiniaRef.register = {
    state: {},
    ref: {}
} as any;