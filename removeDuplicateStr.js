// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */
const arr = str.split(' ')
const uniqArr = [...new Set(arr)]

// or ???

const uniqArr = (arr) => {
	arr.filter(function (item, pos) {
		return a.indexOf(item) == pos
	})
}
