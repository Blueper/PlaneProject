const http = require("https");

const options = {
	"method": "GET",
	"hostname": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"port": null,
	"path": "/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/anytime?inboundpartialdate=2019-12-01",
	"headers": {
		"x-rapidapi-key": "2ba7344179msh485663db7e982d4p1c4b94jsn60b83a03c91c",
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();