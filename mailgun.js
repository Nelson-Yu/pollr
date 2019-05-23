const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox979fff432805483a88a58853cedc3fa4.mailgun.org';
const mg = mailgun({apiKey: '737b5a742b2dd75c2b2d6f2a3c53fe1f-52b0ea77-2c6e0f78', domain: DOMAIN});
const data = {
	from: 'Polly <me@sandbox979fff432805483a88a58853cedc3fa4.mailgun.org>',
	to: 'absheng947@hotmail.com',
	subject: 'Hello2',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
	console.log(body);
});