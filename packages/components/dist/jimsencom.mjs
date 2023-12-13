import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, normalizeClass, unref } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "Button",
  props: {
    type: null
  },
  setup(__props) {
    const props = __props;
    const btnStyle = computed(() => {
      return { [`jimsen-button--${props.type}`]: props.type };
    });
    defineOptions({
      name: "jimsen-button"
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("button", {
          class: normalizeClass(["jimsen-button", unref(btnStyle)])
        }, "btn按钮", 2)
      ]);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-357c6c5b"]]);
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Button = withInstall(_Button);
const components = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button
}, Symbol.toStringTag, { value: "Module" }));
const index = {
  install: (app) => {
    for (let c in components) {
      app.use(components[c]);
    }
  }
};
export {
  Button,
  index as default
};
