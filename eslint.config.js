import antfu from '@antfu/eslint-config'

export default antfu({
    // your config
    rules: {
        'vue/max-attributes-per-line': {
            singleLine: {
                max:1,
            },
            multiLine: {
                max: 1,            
            }
        },
        'curly':['error','all'],
    }
})
