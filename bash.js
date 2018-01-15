var commands = require('./commands');
var fs = require('fs');
var userCommand = 'pwd';
commands[userCommand]();

// Output a prompt; 
process.stdout.write('we are here > ');

// The stdin 'data' event fires after a user types in a line. 
process.stdin.on('data', function(data) {
	var cmd = data.toString().trim(); // remove the newline;
	// console.log('this is the cmd', cmd)
	//console.log('console logging this ', typeof data)
	if( cmd.split(' ')[0] === 'echo' ) {
		var comArr = cmd.split(' ').slice(1).join(' ');

		process.stdout.write(comArr)
	}
	else if (cmd === 'pwd') {
	 process.stdout.write((`Current directory: ${process.cwd()}`))
	} 
	else if (cmd === 'ls') {
		process.stdout.write(ls());
	} 
	else if (cmd === 'date') {
		var currentDate = new Date();
		var dateTime = 
		   currentDate.getDate() + ' '
		+ (currentDate.getMonth()+1) + ' ' 
		+ (currentDate.getFullYear()) + ' '
		+ (currentDate.getHours()) + ' '
		+ (currentDate.getMinutes()) + ' '
		+ (currentDate.getSeconds());
		process.stdout.write(dateTime);

	} else {
		//console.log('we are broken here')
	//console.log('we are looking at line 22:',cmd);
	process.stdout.write('You typed: ' + cmd);
	process.stdout.write('\nprompt > ');
	}

});




 

	//Mon Aug 01 2015 05:50:13 GMT-0400 (EDT)
