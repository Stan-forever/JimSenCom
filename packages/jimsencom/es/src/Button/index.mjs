import _Button from "./Button.vue.mjs";
const withInstall = (comp) => {
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Button = withInstall(_Button);
export {
  Button,
  Button as default
};
