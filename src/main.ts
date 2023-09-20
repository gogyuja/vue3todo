import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'

import 'bootstrap-icons/font/bootstrap-icons.css';
import BootstrapVue3 from 'bootstrap-vue-3';

import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const pinia=createPinia();
const app=createApp(App);
//app.use(BootstrapVue3);
app.use(pinia);
app.mount('#app')