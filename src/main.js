import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './i18n'
import router from './router/index.js';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice'; // Importar el servicio de notificaciones
import selectbutton from 'primevue/selectbutton';
import toolbar from 'primevue/toolbar';
import button from 'primevue/button';
import router from './router/index.js';
import { Dropdown, InputText, Toast } from "primevue"; // Importar Toast

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Card from 'primevue/card';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService); // Registrar el servicio de notificaciones
app.use(i18n);
app.use(router);

app.component('pv-selectbutton', selectbutton);
app.component('pv-toolbar', toolbar);
app.component('pv-button', button);
app.component('pv-input-text', InputText);
app.component('pv-dropdown', Dropdown);
app.component('pv-toast', Toast); // Registrar el componente Toast

app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('Card', Card);
app.mount('#app');
