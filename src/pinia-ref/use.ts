import { PiniaRef, RegisterDataType }  from "../pinia-ref";

const config: RegisterDataType = {
    key: "config",
    state: ()=> {
        return {
            theme: "light",
            language: "en",
            test: {

            }
        }
    }
}

export default PiniaRef.create(config);