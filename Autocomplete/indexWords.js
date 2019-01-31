var fs = require("fs");
var file  = fs.readFileSync("words.txt", "utf8");
file = file.split("\n");
for(var i=0;i<file.length;i++) {
	file[i] = {
		rank: i+1,
		word: file[i]
	};
}
fs.writeFileSync("words.json", JSON.stringify(file));
