var isValid = false;

function toggleBoolean (booleanVar) {
	if (typeof booleanVar === 'boolean') {
		return !booleanVar;
	} else {
		console.log('Warning! Not a boolean.');
	}
}
var newBoolean = toggleBoolean('David');
console.log(newBoolean);