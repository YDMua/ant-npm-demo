/* rollup.config.js */

import typescript from "rollup-plugin-typescript2"
import { version } from "./package.json"
import { babel } from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser"

export default {
  input: "src/utils.ts", // 入口文件
  output: {
    name: "my_utils", // umd 模式必须要有 name  此属性作为全局变量访问打包结果
    file: `dist/@${version}/index.js`,
    format: "umd",
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false, // 输出时去除类型文件
        },
      },
    }),
    babel({
      extensions: [".js", ".ts"],
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-typescript"],
      babelHelpers: "bundled",
    }),
    terser(),
  ],
}
