import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    printWidth: 100,
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
      eqeqeq: "error",
      "no-console": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "no-implicit-coercion": "error",
      curly: "error",
    },
    options: { typeAware: true, typeCheck: true },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  staged: {
    "**/*.ts": ["vp fmt", "vp lint --fix"],
    "**/*.{json,html,md,yml,yaml}": ["vp fmt"],
    "**/*.css": ["vp fmt", "stylelint --fix"],
  },
});
