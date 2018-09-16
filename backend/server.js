const port = 8080;
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

require('./paths.js')(app);
require('./routes.js')(app);

app.listen(port, () => {
	console.log("Listening on port " + port);
});