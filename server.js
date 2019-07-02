const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const auth = require("./server/controllers/auth");
const dogParks = require("./server/controllers/dogParks");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(
	session({
		secret: process.env.SECRET_SESSION,
		resave: true,
		saveUninitialized: true,
		cookie: { maxAge: 60000 }
	})
);

app.use(cors());
app.use(bodyParser.json());

massive(process.env.DATABASE_URL)
	.then(dbInstance => {
		app.set("db", dbInstance);
		console.log(`db is connected`);
	})
	.catch(err => {
		console.log("db is not connected");
	});

app.use(express.static(path.join(__dirname, "/build")));

//Auth Endpoints
app.post("/api/login", auth.login);
app.post("/api/register", auth.register);
app.get("/api/usercheck", auth.usercheck);

//Park Endpoints
app.post("/api/parks", dogParks.parks);
app.get("/api/getter", dogParks.getAll);
app.put("/api/updatePrk/:id", dogParks.updatePrk);
app.delete("/api/deletePrk/:id", dogParks.deletePrk);

app.get("/*", (req, res) => {
	res.sendFile("index.html", {
		root: path.join(__dirname, "build")
	});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Running on port ${port}`);
});
