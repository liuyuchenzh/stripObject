(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StripObject = /** @class */ (function () {
        function StripObject(isStrict) {
            if (isStrict === void 0) { isStrict = false; }
            this.isStrict = isStrict;
        }
        StripObject.prototype.isFalsy = function (input) {
            if (!this.isStrict)
                return !input;
            return input === false;
        };
        StripObject.prototype.strip = function (input) {
            var _this = this;
            return Object.entries(input)
                .filter(function (_a) {
                var _ = _a[0], value = _a[1];
                return !_this.isFalsy(value);
            })
                .reduce(function (last, _a) {
                var key = _a[0], value = _a[1];
                last[key] = value;
                return last;
            }, {});
        };
        return StripObject;
    }());
    exports.default = StripObject;
});
