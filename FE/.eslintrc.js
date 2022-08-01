module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:sonarjs/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["sonarjs", "only-warn"],
  rules: {
    "react/react-in-jsx-scope": 0,
  },
};
