import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "./router";
import type { DefineComponent } from "vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

declare module "@/App.vue" {
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >;
}
