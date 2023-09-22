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
] as const;

export type TUnit = typeof UNITS[number];

const reValue = new RegExp(`^(\\d+)(${UNITS.join('|')})$`);

interface IDuration {
	(value: number, unit: TUnit): number;
	(value: `${number}${TUnit}`): number;

	s1: number;
	s2: number;
	s3: number;
	s4: number;
	s5: number;
	s6: number;
	s7: number;
	s8: number;
	s9: number;
	s10: number;
	s15: number;
	s20: number;
	s25: number;
	s30: number;
	m1: number;
	m2: number;
	m3: number;
	m4: number;
	m5: number;
	m6: number;
	m7: number;
	m8: number;
	m9: number;
	m10: number;
	m15: number;
	m20: number;
	m25: number;
	m30: number;
	h1: number;
	h2: number;
	h3: number;
	h4: number;
	h5: number;
	h6: number;
	h7: number;
	h8: number;
	h9: number;
	h10: number;
	h12: number;
	h16: number;
	h20: number;
	d1: number;
	d2: number;
	d3: number;
	d4: number;
	d5: number;
	d6: number;
	d7: number;
	d8: number;
	d9: number;
	w1: number;
	d10: number;
	w2: number;
	d15: number;
	d20: number;
	d25: number;
	d30: number;
}

export const duration: IDuration = function duration(value: number | string, unit?: TUnit) {
	if (typeof value == 'string') {
		if (!reValue.test(value)) {
			throw SyntaxError('Invalid value format');
		}

		value = +RegExp.$1;
		unit = RegExp.$2 as TUnit;
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
} as any;

duration.s1 = duration(1, 's');
duration.s2 = duration(2, 's');
duration.s3 = duration(3, 's');
duration.s4 = duration(4, 's');
duration.s5 = duration(5, 's');
duration.s10 = duration(10, 's');
duration.s15 = duration(15, 's');
duration.s20 = duration(20, 's');
duration.s25 = duration(25, 's');
duration.s30 = duration(30, 's');
duration.m1 = duration(1, 'm');
duration.m2 = duration(2, 'm');
duration.m3 = duration(3, 'm');
duration.m4 = duration(4, 'm');
duration.m5 = duration(5, 'm');
duration.m10 = duration(10, 'm');
duration.m15 = duration(15, 'm');
duration.m20 = duration(20, 'm');
duration.m25 = duration(25, 'm');
duration.m30 = duration(30, 'm');
duration.h1 = duration(1, 'h');
duration.h2 = duration(2, 'h');
duration.h3 = duration(3, 'h');
duration.h4 = duration(4, 'h');
duration.h5 = duration(5, 'h');
duration.h6 = duration(6, 'h');
duration.h10 = duration(10, 'h');
duration.h12 = duration(12, 'h');
duration.h16 = duration(16, 'h');
duration.h20 = duration(20, 'h');
duration.d1 = duration(1, 'd');
duration.d2 = duration(2, 'd');
duration.d3 = duration(3, 'd');
duration.d4 = duration(4, 'd');
duration.d5 = duration(5, 'd');
duration.w1 = duration(1, 'w');
duration.d10 = duration(10, 'd');
duration.w2 = duration(2, 'w');
duration.d15 = duration(15, 'd');
duration.d20 = duration(20, 'd');
duration.d25 = duration(25, 'd');
duration.d30 = duration(30, 'd');
