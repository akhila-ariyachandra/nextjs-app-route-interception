/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
module.exports = {
  organizeImportsSkipDestructiveCodeActions: true,
  tailwindStylesheet: "./app/globals.css",
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
};
