var readline = require("readline");
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var ask = () => {
	rl.question("\nType something to get suggestions!\n> ", (word) => {
		if(word == "exit") {
			process.exit(0);
		}
		console.log(suggest(word));
		ask();
	});
};
ask();
var suggest = function(word) {
	var index = JSON.parse(require("fs").readFileSync("words.json", "utf8"));
	var suggestions = [];
	var regex = new RegExp(`\\b${word}.*`);
	for(var i=0;i<index.length;i++) {
		if(index[i].word.match(regex) && (suggestions.length < 10)) {
			suggestions.push(index[i]);
		}
	}
	return suggestions;
}
