import { Router } from "vue-router";
import router from "./router";

const registerModule = (module: Module) => {
  if (module.router) {
    module.router(router);
  }
};

export const registerModules = (modules: Modules) => {
  Object.keys(modules).forEach(moduleKey => {
    const module = modules[moduleKey];
    registerModule(module);
  });
};

type Module = { router: (arg0: Router) => void }
type Modules = { [key: string]:Module }