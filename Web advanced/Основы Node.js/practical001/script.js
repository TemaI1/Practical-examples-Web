const http = require("http"); require

const server = http.createServer((request, response) => {

    if (request.url === "/") {

        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

        response.write("<h1>Главная страница</h1>");

        response.write("<a href='/about'>about</a>");

        // response.write("<h2 class='count_main'>Счетчик</h2>");

        response.end("<h1>End</h1>");

    } else if (request.url === "/about") {

        response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

        response.write("<h1>Старница About</h1>");

        response.write("<a href='/'>главная</a>");

        // response.write("<h2 class='count_about'>Счетчик</h2>");

        response.end("<h1>End</h1>");

    } else {

        response.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });

        response.write("<h1>Not found</h1>");

        response.write("<a href='/'>главная</a>");

        response.end();

    }

});

server.listen("3000", function () { console.log("Сервер запущен") });