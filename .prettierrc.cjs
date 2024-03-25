const { prettier } = require('@mnenie/prettier');

/** @type {import('prettier').Config} */
module.exports = {
  ...prettier,
  plugins: ['prettier-plugin-tailwindcss']
};