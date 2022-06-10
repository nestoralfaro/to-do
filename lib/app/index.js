const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const sessionFileStore = require("session-file-store");
const config = require("../config");
const todo = require("./todo/app");
const  expressHandlebars  = require("express-handlebars");

//Create custom file-store class
const FileStore = sessionFileStore(expressSession);
const app = express();

app.engine("hbs", expressHandlebars.engine({defaultLayout: null, extname: ".hbs"}));

//Logging
app.use(morgan("dev"));

//Request bodies
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Sessions
app.use(expressSession({
    ...config.sessionOptions,
    store: new FileStore()
}));

//Mount Features
app.use("/todo", todo.router);
app.use( express.static("./static"));

module.exports = app;