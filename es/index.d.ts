export interface Input {
    [index: string]: any;
}
export default class StripObject {
    isStrict: boolean;
    constructor(isStrict?: boolean);
    isFalsy(input: any): boolean;
    strip(input: Input): Input;
}
