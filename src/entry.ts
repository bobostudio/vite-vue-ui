import { App } from "vue";
import Button from "./button/button";
import SFCButton from "./button/sfcButton.vue";
import JSXButton from "./button/JSXButton";
import "uno.css";
export { SFCButton, Button, JSXButton };

export default {
  install(app: App): void {
    app.component(Button.name, Button);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
