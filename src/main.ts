import { mount } from "svelte";
import "./app.css";
import "./colors.css";
import "./typography.css";
import App from "./App.svelte";

const app = mount(App, {
  target: document.body,
});

export default app;
