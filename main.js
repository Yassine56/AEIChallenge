/*****************************************************************************************
 * Part 2
 ****************************************************************************************/
var employees = [
	{ first: 'Amanda', last: 'Byron', group: 'Sales' },
	{ first: 'Ye', last: 'Xia', group: 'Receiving', nameOrder: 'reverse' },
	{ first: 'Miltiades', last: 'Crescens', group: 'Sales' },
	/*...don't foget to account for other entries of the same form, but with different group names.....*/
]

// Part 2 Answer Here

const organize = (arr) => {
	return arr.reduce((acc, current) => {
		let reverse = current.nameOrder && current.nameOrder == 'reverse'
		let keys = Object.keys(acc)
		if (keys.includes(current.group)) {
			return {
				...acc,
				[current.group]: [
					...acc[current.group],
					{
						name: reverse
							? current.last + ' ' + current.first
							: current.first + ' ' + current.last,
					},
				],
			}
		} else {
			return {
				...acc,
				[current.group]: reverse
					? [{ name: current.last + ' ' + current.first }]
					: [{ name: current.first + ' ' + current.last }],
			}
		}
	}, {})
}

console.log('orgonize employees here ', organize(employees))

/*****************************************************************************************
 * Bonus
 ****************************************************************************************/

// Bonus Anwser Here
