// rollup 配置文件
import resolve from 'rollup-plugin-node-resolve'; // 解析 node_modules 中的模块
import commonjs from "rollup-plugin-commonjs"; // 转换 CJS -> ESM, 通常配合上面一个插件使用
import buble from 'rollup-plugin-buble'; // 编译ES6+语法为ES5，无需配置，比babel更轻量
import { terser } from 'rollup-plugin-terser'; // 代码压缩，取代uglify，支持ES模块。

export default [
  {
    input: 'src/main.js',
    output: {
      name: 'jmUtils',
      file: 'dist/jm-utils.min.js',
      format: 'umd' // 兼容 IIFE, AMD, CJS 三种模块规范
    },
    plugins: [
      resolve(),
      commonjs({
        include: "node_modules/**"
      }),
      buble({  // transpile ES2015+ to ES5
        exclude: ['node_modules/**'],
        transforms: {
          asyncAwait: false,
        },
      }),
      terser({
        output: {
          ascii_only: true // 仅输出ascii字符
        },
        compress: {
          pure_funcs: ['console.log'] // 去掉console.log函数
        }
      }),
    ],
  },
  {
    input: 'src/main.js',
    output: {
      file: "dist/jm-utils.esm.js",
      format: 'es' // ES2015 Module 规范
    },
    plugins: [
      resolve(),
      commonjs({
        include: "node_modules/**"
      }),
      buble({  // transpile ES2015+ to ES5
        exclude: ['node_modules/**'],
        transforms: {
          asyncAwait: false,
        },
      })
    ],
  }
]