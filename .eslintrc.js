module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  rules: {
    semi: 2,
    "max-attributes-per-line": "off",
    "linebreak-style": [
      "error",
      "unix"
    ],
  }
};
