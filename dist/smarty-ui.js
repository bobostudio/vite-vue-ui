"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const props = {
  color: {
    type: String,
    default: "blue"
  },
  icon: {
    type: String,
    default: ""
  }
};
const Button = vue.defineComponent({
  name: "Button",
  props,
  setup(props2, {
    slots
  }) {
    console.log(props2);
    return () => vue.createVNode("button", {
      "class": `
                m-1
                py-2 
                px-4 
                font-semibold 
                rounded-lg 
                shadow-md 
                text-white 
                bg-${props2.color}-500 
                hover:bg-${props2.color}-700 
                border-none 
                cursor-pointer 
                `
    }, [props2.icon ? vue.createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-2.4`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = vue.defineComponent({
  name: "JSXButton",
  render() {
    return vue.createVNode("button", null, [vue.createTextVNode("JSXButton")]);
  }
});
const __uno = "";
const entry = {
  install(app) {
    app.component(Button.name, Button);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
exports.Button = Button;
exports.JSXButton = JSXButton;
exports.SFCButton = SFCButton;
exports.default = entry;
