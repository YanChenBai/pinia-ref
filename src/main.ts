import { createApp } from 'vue'
import App from './App.vue'
import NaiveUI from 'naive-ui';
import PiniaRef from './pinia-ref'
import RegisterList from "./pinia-ref/use";

PiniaRef.register = RegisterList
createApp(App).use(NaiveUI).mount('#app')