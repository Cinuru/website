const fs = require('fs-extra');

let pages = [
	'cinexx_website.md',
	'hhoefe_website.md',
	'app.md',
	'lumos_website.md',
	'scala_newsletter.md',
	'scala_website.md',
	'download_qr.md',
	'thalia_website.md',
	'katniss.md',
	'scala.md',
	'dude.md',
	'lumos_newsletter.md',
	'jena_newsletter.md',
	'thalia-welcome-6ee843fd.md',
	'casino_website.md',
	'umfrage.md',
	'casino_newsletter.md',
	'kinoapp.md',
	'social.md',
	'kinoapp_qr.md',
	'testen.md',
	'thalia_newsletter.md',
	'jena_website.md',
	'cinexx_newsletter.md',
	'leia.md',
	'app_qr.md',
	'download.md',
	'hhoefe_newsletter.md',
];
pages.map(p => {
	fs.removeSync('./content/' + p);
	fs.copySync('./content/index.md', './content/' + p);
});
