const http = require("http")
const PORT = 3057;

/**
 * Handle incoming HTTP request
 * @param {*} req The HTTP request object 
 * @param {*} res The HTTP response object
 */
const handleConn = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("");
    res.end();
}

// Create an instance of an HTTP server
const server = http.createServer(handleConn);

// Begin listening on the defined port
server.listen(PORT);
console.log(`Listening on port ${PORT}`);