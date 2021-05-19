const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const exphbs = require("express-handlebars");
const morgan = require("morgan");

//load config
dotenv.config({ path: "./config/config.env" });

// connect db
connectDB();

const app = express();

//logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//handlebars
app.engine('.hbs', exphbs({defaultLayout:'main',extname: '.hbs'}));
app.set('view engine', '.hbs');

// Routes
app.use('/', require('./routes/index'))


const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
