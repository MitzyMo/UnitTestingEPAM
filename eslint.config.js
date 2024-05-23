import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    ignores: ["node_modules", "coverage", "mochawesome-report"],
    rules: {
      "constructor-super": "off"
    }
  },
];