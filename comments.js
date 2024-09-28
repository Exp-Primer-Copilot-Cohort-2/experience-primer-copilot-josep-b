// Create web server
// 1. create a folder
// 2. create an index.html file
// 3. create a comment.js file
// 4. add some comments to the comment.js file
// 5. create a server.js file
// 6. import the http module
// 7. create a server
// 8. create a request handler function
// 9. read the index.html file
// 10. read the comment.js file
// 11. send the index.html file as a response
// 12. send the comment.js file as a response
// 13. listen to the server
// 14. run the server
// 15. open the browser
// 16. go to http://localhost:3000
// 17. view the index.html file
// 18. view the comment.js file
// 19. view the comments in the comment.js file

// 1. create a folder
// $ mkdir my_server

// 2. create an index.html file
// $ touch index.html
// $ echo "<h1>Hello World</h1>" > index.html

// 3. create a comment.js file
// $ touch comment.js
// $ echo "console.log('Hello World');" > comment.js

// 4. add some comments to the comment.js file
// $ echo "// This is a comment" >> comment.js
// $ echo "// This is another comment" >> comment.js
// $ echo "// This is a third comment" >> comment.js

// 5. create a server.js file
// $ touch server.js

// 6. import the http module
// server.js
const http = require('http');

// 7. create a server
// server.js
const server = http.createServer();

// 8. create a request handler function
// server.js
server.on('request', (req, res) => {
  // 9. read the index.html file
  // 10. read the comment.js file
  // 11. send the index.html file as a response
  // 12. send the comment.js file as a response
});

// 13. listen to the server
// server.js
server.listen(3000);

// 14. run the server
// $ node server.js

// 15. open the browser
// 16