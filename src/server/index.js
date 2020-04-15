// npm
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const { join } = require("path");

// const
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({
	dev,
	dir: join(__dirname, "../client/"),
});
const handle = app.getRequestHandler();

// server
app
	.prepare()
	.then(() => {
		const server = express();

		// body-parser
		server.use(bodyParser.json());
		server.use(bodyParser.urlencoded({ extended: true }));

		// rotas
		server.all("*", (req, res) => {
			handle(req, res);
		});

		server.listen(port, err => {
			if (err) throw err;
			console.log("> Servidor rodando na porta " + port);
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
