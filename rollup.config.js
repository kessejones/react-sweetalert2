import packageJson from './package.json';
import typescript from 'rollup-plugin-typescript2';
// import serve from 'rollup-plugin-serve';
// import livereload from 'rollup-plugin-livereload';

const external = [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
];

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
            strict: false,
        },
    ],
    plugins: [
        typescript(),
        // serve({
        //     open: true,
        //     verbose: true,
        //     contentBase: ['', 'dist'],
        //     historyApiFallback: true,
        //     host: 'localhost',
        //     port: 3000,
        // }),
        // livereload({ watch: 'dist' }),
    ],
    external,
};
