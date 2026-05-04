import { readFileSync } from "node:fs";
import path from "node:path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";

const packageJson = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8")
);

const externalPackages = [
  ...Object.keys(packageJson.dependencies ?? {}),
  ...Object.keys(packageJson.peerDependencies ?? {}),
];

export default defineConfig({
  input: "./rollup-entry.ts",
  external: (id) =>
    externalPackages.some((packageName) => id === packageName || id.startsWith(`${packageName}/`)),
  output: {
    file: "./dist/index.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: [".mjs", ".js", ".json", ".ts", ".tsx"],
    }),
    postcss({
      extract: path.resolve("dist/styles.css"),
      minimize: true,
      modules: {
        generateScopedName: "[local]__[hash:base64:5]",
      },
      plugins: [postcssImport()],
    }),
    esbuild({
      include: /\.[jt]sx?$/,
      exclude: /node_modules/,
      jsx: "automatic",
      sourceMap: true,
      target: "es2019",
      tsconfig: "tsconfig.json",
    }),
  ],
});
