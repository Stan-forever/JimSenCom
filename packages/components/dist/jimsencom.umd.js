(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.jimsencom = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    name: "Button",
    props: {
      type: null
    },
    setup(__props) {
      const props = __props;
      const btnStyle = vue.computed(() => {
        return { [`jimsen-button--${props.type}`]: props.type };
      });
      defineOptions({
        name: "jimsen-button"
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
  exports2.Button = Button;
  exports2.default = index;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
