import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import reactSvg from "rollup-plugin-react-svg";
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';


export default {
    input: "./src/main.js",
    output: {
    file: './build/walgreensIcons.js',
    format: "cjs" 
    },
    plugins: [
        replace({
          "process.env.NODE_ENV": JSON.stringify('development') // for production switch 'development' to 'production'
        }),
        babel({
          exclude: "node_modules/**"
        }),
        resolve(),
        commonjs(),
        reactSvg(),
        url(),
        svgr()
      ],
};