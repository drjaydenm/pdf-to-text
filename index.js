var path = require("path");
var extract = require("pdf-text-extract");

var filePath = path.join(__dirname, "docs/test1.pdf");

extract(filePath, {
	splitPages: false,
	layout: "htmlmeta"
}, function (err, text) {
	if (err) {
		console.dir(err);
		return;
	}
	console.dir(text);
});