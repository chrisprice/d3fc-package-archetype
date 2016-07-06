import babel from 'rollup-plugin-babel';

export default {
    entry: 'index.js',
    moduleName: 'fc_package_archetype',
    format: 'umd',
    plugins: [
        babel({
            babelrc: false,
            presets: ['es2015-rollup']
        })
    ],
    dest: 'build/d3fc-package-archetype.js',
    globals: { }
};