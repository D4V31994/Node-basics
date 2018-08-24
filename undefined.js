function greetUser (name) {
	if (typeof name === 'undefined') {
		console.log('Hello World')
	} else {
		console.log('hello ' + name + '!');
		}
	}
	greetUser('David');
	greetUser();