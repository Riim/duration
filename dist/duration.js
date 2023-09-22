"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duration = void 0;
const UNITS = [
    's',
    'second',
    'seconds',
    'm',
    'minute',
    'minutes',
    'h',
    'hour',
    'hours',
    'd',
    'day',
    'days',
    'w',
    'weak',
    'weaks'
];
const reValue = new RegExp(`^(\\d+)(${UNITS.join('|')})$`);
exports.duration = function duration(value, unit) {
    if (typeof value == 'string') {
        if (!reValue.test(value)) {
            throw SyntaxError('Invalid value format');
        }
        value = +RegExp.$1;
        unit = RegExp.$2;
    }
    switch (unit) {
        case 's':
        case 'second':
        case 'seconds': {
            return 1000 * value;
        }
        case 'm':
        case 'minute':
        case 'minutes': {
            return 1000 * 60 * value;
        }
        case 'h':
        case 'hour':
        case 'hours': {
            return 1000 * 60 * 60 * value;
        }
        case 'd':
        case 'day':
        case 'days': {
            return 1000 * 60 * 60 * 24 * value;
        }
        case 'w':
        case 'weak':
        case 'weaks': {
            return 1000 * 60 * 60 * 24 * 7 * value;
        }
    }
    return value;
};
exports.duration.s1 = (0, exports.duration)(1, 's');
exports.duration.s2 = (0, exports.duration)(2, 's');
exports.duration.s3 = (0, exports.duration)(3, 's');
exports.duration.s4 = (0, exports.duration)(4, 's');
exports.duration.s5 = (0, exports.duration)(5, 's');
exports.duration.s10 = (0, exports.duration)(10, 's');
exports.duration.s15 = (0, exports.duration)(15, 's');
exports.duration.s20 = (0, exports.duration)(20, 's');
exports.duration.s25 = (0, exports.duration)(25, 's');
exports.duration.s30 = (0, exports.duration)(30, 's');
exports.duration.m1 = (0, exports.duration)(1, 'm');
exports.duration.m2 = (0, exports.duration)(2, 'm');
exports.duration.m3 = (0, exports.duration)(3, 'm');
exports.duration.m4 = (0, exports.duration)(4, 'm');
exports.duration.m5 = (0, exports.duration)(5, 'm');
exports.duration.m10 = (0, exports.duration)(10, 'm');
exports.duration.m15 = (0, exports.duration)(15, 'm');
exports.duration.m20 = (0, exports.duration)(20, 'm');
exports.duration.m25 = (0, exports.duration)(25, 'm');
exports.duration.m30 = (0, exports.duration)(30, 'm');
exports.duration.h1 = (0, exports.duration)(1, 'h');
exports.duration.h2 = (0, exports.duration)(2, 'h');
exports.duration.h3 = (0, exports.duration)(3, 'h');
exports.duration.h4 = (0, exports.duration)(4, 'h');
exports.duration.h5 = (0, exports.duration)(5, 'h');
exports.duration.h6 = (0, exports.duration)(6, 'h');
exports.duration.h10 = (0, exports.duration)(10, 'h');
exports.duration.h12 = (0, exports.duration)(12, 'h');
exports.duration.h16 = (0, exports.duration)(16, 'h');
exports.duration.h20 = (0, exports.duration)(20, 'h');
exports.duration.d1 = (0, exports.duration)(1, 'd');
exports.duration.d2 = (0, exports.duration)(2, 'd');
exports.duration.d3 = (0, exports.duration)(3, 'd');
exports.duration.d4 = (0, exports.duration)(4, 'd');
exports.duration.d5 = (0, exports.duration)(5, 'd');
exports.duration.w1 = (0, exports.duration)(1, 'w');
exports.duration.d10 = (0, exports.duration)(10, 'd');
exports.duration.w2 = (0, exports.duration)(2, 'w');
exports.duration.d15 = (0, exports.duration)(15, 'd');
exports.duration.d20 = (0, exports.duration)(20, 'd');
exports.duration.d25 = (0, exports.duration)(25, 'd');
exports.duration.d30 = (0, exports.duration)(30, 'd');
