import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPencil, faPenClip, faPenFancy, faEraser, faBriefcase, faBook } from '@fortawesome/free-solid-svg-icons'
import 'primeicons/primeicons.css';
import 'aos/dist/aos.css';

import App from './App.vue'
import router from './router'

library.add(faPencil, faPenClip, faPenFancy, faEraser, faBriefcase, faBook);
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: { // tailwindCSS 及 primeVue 載入順序設定
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities'
      }
    }
  }
});
app.use(ToastService);
app.component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app')
