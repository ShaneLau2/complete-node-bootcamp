const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");
const { type } = require("os");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
const overviewTemp = fs.readFileSync(
    `${__dirname}/templates/overview.html`,
    `utf-8`
);
const cardTemp = fs.readFileSync(`${__dirname}/templates/card.html`, "utf-8");
const productTemp = fs.readFileSync(
    `${__dirname}/templates/product.html`,
    "utf-8"
);
const server = http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    if (pathname === "/" || pathname === "/overview") {
        console.log("flag");
        res.writeHead(200, {
            "Content-type": "text/html",
        });
        const cardsHtml = dataObj
            .map((el) => replaceTemplate(cardTemp, el))
            .join("");
        // console.log(cardsHtml);
        const output = overviewTemp.replace("{%PRODUCT_CARDS%}", cardsHtml);

        res.end(output);
        // const cardsHtml = dataObj
        //     .map((el) => replaceTemplate(tempCard, el))
        //     .join("");
        // const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    } else if (pathname === "/product") {
        res.writeHead(200, {
            "Content-type": "text/html",
        });
        const productCard = dataObj[query.id];
        console.log(query.id);
        const output = replaceTemplate(productTemp, productCard);
        res.end(output);
    } else {
        res.writeHead(404, {
            "Content-type": "text/html",
            "my-own-header": "hello-world",
        });
        res.end("<h1>Page not found!</h1>");
    }
    // console.log(pathname);
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to request on port 8000");
});