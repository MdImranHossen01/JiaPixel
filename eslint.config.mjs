import js from "@eslint/js";
import * as ts from "typescript-eslint";
import path from "path";
import { fileURLToPath } from "url";

// __dirname equivalent for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommendedTypeChecked,
  ...ts.configs.stylisticTypeChecked,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: path.join(__dirname, "tsconfig.json"), // ✅ absolute path fix
        tsconfigRootDir: __dirname, // ✅ resolve properly on Windows
      },
    },
    rules: {
      "no-console": "warn",
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
    },
  },
];
