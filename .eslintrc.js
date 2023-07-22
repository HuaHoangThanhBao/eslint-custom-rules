module.exports = {
    plugins: [
      'custom-rules'
    ],
    env: {
        "es6": true
    },
    rules: {
      'custom-rules/pizza-reserved': 'warn',
    },
};