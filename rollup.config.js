import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import common from 'rollup-plugin-commonjs'

export default {
    input: 'src/router.js',
    output: {
        file: 'dist/router.min.js',
        format: 'cjs'
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        }),
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        common()
    ],
    external: id => /^react|react-dom/.test(id)
}