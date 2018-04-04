export interface Input {
  [index: string]: any
}

export default class StripObject {
  constructor(public isStrict = false) {}

  isFalsy(input: any): boolean {
    if (!this.isStrict) return !input
    return input === false
  }

  strip(input: Input): Input {
    return Object.entries(input)
      .filter(([_, value]) => !this.isFalsy(value))
      .reduce((last: Input, [key, value]: [string, any]) => {
        last[key] = value
        return last
      }, {})
  }
}
