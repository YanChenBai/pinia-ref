import { createApp } from 'vue'
import App from './App.vue'
import NaiveUI from 'naive-ui';
import PiniaRef from './pinia-ref'
import RegisterList from "./use";

PiniaRef.register = RegisterList
createApp(App).use(PiniaRef).use(NaiveUI).mount('#app')