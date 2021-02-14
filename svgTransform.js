/**
 * https://vue-svg-loader.js.org/faq.html#how-to-use-this-loader-with-jest
 * need to use with vue-jest@2.x
 */
const vueJest = require('vue-jest/lib/template-compiler')

module.exports = {
    process(content) {
        const { render } = vueJest({
            content,
            attrs: {
                functional: false
            }
        })

        return `module.exports = { render: ${render} }`
    }
}
