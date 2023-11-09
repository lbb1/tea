module.exports = {
    "env": {
        "browser": true,
        "es6": true, // 启用新的ES6全局变量
        "node": true
    },
    "extends": [
         "eslint:recommended",
         "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                //"ecmaVersion": 6, // 启用ES6语法支持  设置为 3、5（默认）、6、7、8、9、10、11、12 或 13，以指定你要使用的 ECMAScript 语法的版本。你也可以设置为 2015（6）、2016（7）、2017（8）、2018（9）、2019（10）、2020（11）、2021（12）或 2022（13）来使用基于年份的命名。你也可以设置 "latest" 来使用受支持的最新版本
                //"sourceType": "module", // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "vue"
    ],
    "globals": {
        "procss": "writable"
    },
    "rules": {
        "no-console": ["off"],
    }
}
