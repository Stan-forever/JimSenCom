import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, normalizeClass, unref } from "vue";
const __default__ = defineComponent({
  name: "jimsen-button"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    type: null
  },
  setup(__props) {
    const props = __props;
    const btnStyle = computed(() => {
      return { [`jimsen-button--${props.type}`]: props.type };
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
export {
  _sfc_main as default
};
