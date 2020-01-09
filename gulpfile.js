// customize folder structure as input use imagemin-webp
const imagemin = require('imagemin-keep-folder');
const imageminWebp = require("imagemin-webp");
 

imagemin(['img/**/*.{jpg,png}'], {
	use: [
		imageminWebp({})
	],
	replaceOutputDir: output => {
		console.log(output);
		
		var part1 = output.slice(0, output.lastIndexOf('/') );
		var part2 = output.slice(output.lastIndexOf('/'), output.length-1 );
		
		return part1 + '/webp/' + part2;
	}
});
