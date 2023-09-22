import { duration } from '../dist/duration';

describe('duration', () => {
	test('smhdw{number}', () => {
		for (let key of Object.keys(duration)) {
			let match = key.match(/^(s|m|h|d|w)(\d+)$/);

			if (match) {
				expect((duration as any)[key]).toBe((duration as any)[match[1]](+match[2]));
			}
		}
	});
});
