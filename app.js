
export function emailValidator(value) {
    if (value) {
        return typeof value == 'string'
    } else {
        return false
    }
}