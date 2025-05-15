import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import selectbutton from 'primevue/selectbutton';
import toolbar from 'primevue/toolbar';
import button from 'primevue/button';
import router from './router/index.js'
import {Dropdown, InputText} from "primevue";
const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.component('pv-selectbutton', selectbutton);
app.component('pv-toolbar', toolbar);
app.component('pv-button', button);
app.component('pv-input-text', InputText);
app.component('pv-dropdown', Dropdown);
app.mount('#app');