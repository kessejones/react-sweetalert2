import packageJson from './package.json';
import typescript from "rollup-plugin-typescript2";
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';

const external = [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
];

export default {
    input: "src/index.ts",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
            exports: 'named',
            strict: false
        }
    ],
    plugins: [
        // nodeResolve(),
        // commonjs({
        //     include: /node_modules/,
        // }),
        typescript(),
    ],
    external,
}
