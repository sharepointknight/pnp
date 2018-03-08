const sourcemaps = require("rollup-plugin-sourcemaps");

const moduleName = "project";

module.exports = {
    input: `./build/packages/${moduleName}/index.js`,
    plugins: [sourcemaps()],

    output: {
        file: `./dist/packages/${moduleName}/dist/${moduleName}.js`,
        format: "es",
        sourcemap: true,
    }
};

