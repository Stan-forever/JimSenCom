"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const __default__ = vue.defineComponent({
  name: "jimsen-button"
});
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const props = __props;
    const btnStyle = vue.computed(() => {
      return { [`jimsen-button--${props.type}`]: props.type };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["jimsen-button", vue.unref(btnStyle)])
        }, "btn按钮", 2)
      ]);
    };
  }
});
exports.default = _sfc_main;
