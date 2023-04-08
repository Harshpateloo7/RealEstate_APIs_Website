//Import Required Module
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const getData = require("./modules/api/api")

//Set up Express app and port number
const app = express();
const port = process.env.PORT || 8000;

//Setup template Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Set up static file
app.use(express.static(path.join(__dirname, "public")));

var links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Property",
    path: "/property"
  },
  {
    name: "Attraction",
    path: "/attraction"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];
// Page routes
app.get("/", (request, response) => {
  // response.status(200).send("Test page");
  response.render("index", { title: "Home", menu: links });
});
app.get("/about", (request, response) => {
  response.render("about", { title: "About", menu: links });
});
app.get("/property", async (request, response) => {
  let property = await getData.getPropertyList();

  response.render("property", { title: "Property", menu: links, data: property?.Results });
})
app.get("/contact", (request, response) => {
  response.render("contact", { title: "Contact", menu: links });
});
app.get("/attraction", async (request, response) => {
  let attractions = await getData.getAttractionList();

  response.render("attractions", { title: "Attraction", menu: links, data: attractions?.features });
});
//Set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});