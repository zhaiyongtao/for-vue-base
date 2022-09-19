import { createApp } from 'vue';
import { createPinia } from 'pinia';
import lego, { defineOption } from '@nio-fe/lego';
import { LocaleSupportLang } from '@nio-fe/locale-vue';
import { NIcon } from '@nio-fe/icon';
import '@nio-fe/lego/lib/style.css';
import App from './App.vue';
import router from './router';
import './assets/main.css';
const app = createApp(App);

app.use(createPinia());
app.use(router).use(
  lego,
  defineOption({
    locale: {
      current: LocaleSupportLang.ZH_CN,
    },
  }),
);

app.mount('#app');
