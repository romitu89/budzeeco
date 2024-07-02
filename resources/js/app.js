import './bootstrap';

import { createApp } from 'vue';
import Example from './component/Example.vue';

const app = createApp();
app.component('example', Example);

app.mount('#app');
