const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 4000;
