import packageJson from './package.json';
import typescript from 'rollup-plugin-typescript2';

const external = [
    ...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
];

export default [
    {
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
        plugins: [typescript()],
        external,
    },
    {
        input: 'src/iife.ts',
        output: [
            {
                file: packageJson.dist,
                name: 'ReactSweetAlert2',
                format: 'iife',
                sourcemap: 'inline',
            },
        ],
        plugins: [typescript()],
        external,
    }];
