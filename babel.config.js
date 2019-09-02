const tsconfig = require("./tsconfig.json");

const alias = {};

for (const [path, replacements] of Object.entries(tsconfig.compilerOptions.paths)) {
    alias[path.replace("/*", "")] = "./" + replacements[0].replace("/*", "");
}

module.exports = {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["./src"],
                alias,
            },
        ],
    ],
};
