module.exports = {
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  plugins: ["prettier"],
  parserOptions: {
    project: "./tsconfig.json"
  },
  rules: {
    "prettier/prettier": "warn"
  }
}
