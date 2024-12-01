import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {
    // Handle the home page
    if (request.url === "/home") {
        fs.readFile("./home.html", "utf8", (err, data) => {
            if (err) {
                response.writeHead(500, { "Content-Type": "text/html" });
                response.write("<h1>Error reading home.html</h1>");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data); // Send the content of home.html
            }
            response.end(); // End the response
        });
    }
    // Handle the about page
    else if (request.url === "/about") {
        fs.readFile("./about.html", "utf8", (err, data) => {
            if (err) {
                response.writeHead(500, { "Content-Type": "text/html" });
                response.write("<h1>Error reading about.html</h1>");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data); // Send the content of about.html
            }
            response.end(); // End the response
        });
    }
    // Handle the contact page
    else if (request.url === "/contact") {
        fs.readFile("./contact.html", "utf8", (err, data) => {
            if (err) {
                response.writeHead(500, { "Content-Type": "text/html" });
                response.write("<h1>Error reading contact.html</h1>");
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(data); // Send the content of contact.html
            }
            response.end(); // End the response
        });
    }
    // Handle undefined routes
    else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.write("<h1 style='color:red'>404 Requested resource not found</h1>");
        response.end(); // End the response
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log("Server is running on port 3000...");
});
