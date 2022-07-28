// Small scripts that may be used in general porpuses.

// Requires timestamp
export const fromUnix = (timestamp: number, start = 'year', split = '-') => {
	if (!timestamp) return '';

	const date = new Date(timestamp * 1000);
	const dateDivider = date
		.toLocaleDateString('en-GB', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
		})
		.split('/');

	const day = dateDivider[0];
	const month = dateDivider[1];
	const year = dateDivider[2];

	if (start == 'day') return [day, month, year].join(split);
	if (start == 'month') return [month, day, year].join(split);
	if (start == 'year') return [year, month, day].join(split);
};

export const toUnix = (dateString: string) => {
	if (!dateString) return null;

	const date = new Date(dateString);
	const unix = Math.floor(date.getTime() / 1000);

	return unix;
};
