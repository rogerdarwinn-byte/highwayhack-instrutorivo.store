import next from 'eslint-config-next/flat';

const eslintConfig = [
  ...next,
  {
    ignores: ["**/.next/**", "**/node_modules/**"],
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
