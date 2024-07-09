const express = require("express");
const app = express();
const http = require("http");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();

const port = process.env.PORT || 4000;
console.log(process.env.PORT);

// Middlewares
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route
// http://ems.vmotosoco-service.com/api/auth/login
app.use("http://ems.vmotosoco-service.com/api", require("./routes/apiRoutes"));

// Server
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
