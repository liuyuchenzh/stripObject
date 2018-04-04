export default class StripObject {
    constructor(isStrict = false) {
        this.isStrict = isStrict;
    }
    isFalsy(input) {
        if (!this.isStrict)
            return !input;
        return input === false;
    }
    strip(input) {
        return Object.entries(input)
            .filter(([_, value]) => !this.isFalsy(value))
            .reduce((last, [key, value]) => {
            last[key] = value;
            return last;
        }, {});
    }
}
