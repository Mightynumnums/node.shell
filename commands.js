module.exports = {
	pwd: function(){

	},
	data: function(){

	}
}

function ls(){

	fs.readdir('.', function(err, files) {
		//console.log('where are we?', commands.js)
	  if (err) throw err;
	  files.forEach(function(file) {
	    process.stdout.write(file.toString() + "\n");
	  })
	  process.stdout.write("prompt > ");
	});
}
