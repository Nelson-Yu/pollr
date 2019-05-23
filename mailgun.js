require('dotenv').config();
const mailgun = require("mailgun-js");
const DOMAIN = process.env.DOMAIN;
const mg = mailgun({apiKey: process.env.API_KEY, domain: DOMAIN});
const data = {
	from: `Pollr <me@${DOMAIN}>`,
	to: 'betttyquu@gmail.com',
	subject: 'Hello2',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	if (error) {
		console.log(error);
	}
	console.log(body);
});
