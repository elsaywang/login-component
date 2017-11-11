module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "allowImportExportEverywhere": false,
        "codeFrame": false,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "indent":0,
        "no-undef":0,
        "no-console":0,
        "no-unused-vars":0,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": 0,
        "semi": 0,
        "no-extra-semi":0
    }
};
