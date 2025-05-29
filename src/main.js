import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice'; // Importar el servicio de notificaciones
import selectbutton from 'primevue/selectbutton';
import toolbar from 'primevue/toolbar';
import button from 'primevue/button';
import router from './router/index.js';
import { Dropdown, InputText, Toast } from "primevue"; // Importar Toast

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService); // Registrar el servicio de notificaciones
app.use(router);

app.component('pv-selectbutton', selectbutton);
app.component('pv-toolbar', toolbar);
app.component('pv-button', button);
app.component('pv-input-text', InputText);
app.component('pv-dropdown', Dropdown);
app.component('pv-toast', Toast); // Registrar el componente Toast

app.mount('#app');
