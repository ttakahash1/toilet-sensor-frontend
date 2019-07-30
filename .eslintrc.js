module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module"
    },
    "env": {
      "es6": true,
      "browser": true
    },
    "plugins": [
      'svelte3'
    ],
    "overrides": [
      {
        "files": ['**/*.svelte'],
        "processor": 'svelte3/svelte3'
      }
    ],
    "rules": {
      'indent': [
        'error',
        2
      ]
    }
};
