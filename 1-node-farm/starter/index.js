const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require("../final/modules/replaceTemplate");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
const overviewTemp = fs.readFileSync(
    `${__dirname}/templates/overview.html`,
    `utf-8`
);

function replaceTemplate(temp, data) {
    // Code for replaceTemplate function
    // "id": 0,
    // "productName": "Fresh Avocados",
    // "image": "🥑",
    // "from": "Spain",
    // "nutrients": "Vitamin B, Vitamin K",
    // "quantity": "4 🥑",
    // "price": "6.50",
    // "organic": true,
    // "description": "A ripe avocado yields to gentle pressure when held in the palm of the hand and squeezed. The fruit is not sweet, but distinctly and subtly flavored, with smooth texture. The avocado is popular in vegetarian cuisine as a substitute for meats in sandwiches and salads because of its high fat content. Generally, avocado is served raw, though some cultivars, including the common 'Hass', can be cooked for a short time without becoming bitter. It is used as the base for the Mexican dip known as guacamole, as well as a spread on corn tortillas or toast, served with spices."
    let output = temp.replace(`{%IMAGE%}\g`, data.image);
}
const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url, true).pathname;
    if (pathname === "/") {
        res.writeHead(200, {
            "Content-type": "text/html",
        });
        const output = replaceTemplate(overviewTemp, data);
        res.end(output);
    }
    console.log(pathname);
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to request on port 8000");
});