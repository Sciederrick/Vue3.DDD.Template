import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from 'pinia'


/* Modules */
import { registerModules } from "./register-modules"
import homeModule from "./modules/home"
import helloModule from "./modules/hello"
import WorldModule from "./modules/world"

registerModules({
  home: homeModule,
  hello: helloModule,
  world: WorldModule
});


createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
