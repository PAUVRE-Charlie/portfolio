export function debounce(fn, ms) {
    let timer
    // eslint-disable-next-line no-unused-vars
    return _ => {
        clearTimeout(timer)
        // eslint-disable-next-line no-unused-vars
        timer = setTimeout(_ => {
        timer = null
        // eslint-disable-next-line prefer-rest-params
        fn.apply(this, arguments)
        }, ms)
    };
}