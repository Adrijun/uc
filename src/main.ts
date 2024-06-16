import './assets/index.css';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import PanelMenu from 'primevue/panelmenu';
import ToastService from 'primevue/toastservice';
import App from './App.vue';

import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(ToastService);

app.component('Button', Button);
app.component('PanelMenu', PanelMenu);
app.mount('#app');
