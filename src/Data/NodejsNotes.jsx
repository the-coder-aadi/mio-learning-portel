export const NodeJSNotes = [
{
"id": 36,
"slug": "nodejs-backend-basics-v8-modules-and-http-server",
"title": "Node.js Backend Basics — From JavaScript to HTTP Server",
"date": "11 August 2026",


"description": "Learn backend, Node.js is, why Node.js is used, what the V8 engine does, how modules work, the difference between built-in and custom modules, and how to create a basic HTTP server with listen(), port, request, response and server.close().",

"content": [

  {
    "type": "heading",
    "text": "What is Backend?"
  },

  {
    "type": "paragraph",
    "text": "Backend is the part of an application that runs behind the scenes. It handles server-side logic, receives requests from the frontend, processes data, communicates with databases and sends responses back to the frontend."
  },

  {
    "type": "code",
    "language": "text",
    "text": "User\n  |\n  v\nFrontend (React)\n  |\n  | HTTP Request\n  v\nBackend (Node.js)\n  |\n  | Business Logic\n  v\nDatabase\n  |\n  v\nBackend\n  |\n  | HTTP Response\n  v\nFrontend"
  },

  {
    "type": "paragraph",
    "text": "For example, when a user logs into a website, the frontend sends the email and password to the backend. The backend verifies the information, communicates with the database and sends a response such as login successful or invalid credentials."
  },

  {
    "type": "heading",
    "text": "What is Node.js?"
  },

  {
    "type": "paragraph",
    "text": "Node.js is a JavaScript runtime environment that allows JavaScript code to run outside the browser. It is commonly used to build backend applications, APIs and servers."
  },

  {
    "type": "summary",
    "items": [
      "JavaScript is the programming language.",
      "Node.js is the runtime environment that executes JavaScript outside the browser.",
      "Node.js is not a programming language.",
      "Node.js is not a database.",
      "Node.js is not Express."
    ]
  },

  {
    "type": "heading",
    "text": "Why Do We Use Node.js for Backend?"
  },

  {
    "type": "paragraph",
    "text": "Node.js allows developers to use JavaScript on the server. This is especially convenient when the frontend is also written in JavaScript because the same language can be used on both frontend and backend."
  },

  {
    "type": "code",
    "language": "text",
    "text": "Frontend\nReact + JavaScript\n        |\n        | API Request\n        v\nBackend\nNode.js + JavaScript\n        |\n        v\nDatabase"
  },

  {
    "type": "heading",
    "text": "What is the V8 Engine?"
  },

  {
    "type": "paragraph",
    "text": "V8 is Google's JavaScript engine. It is the engine used by Chrome to execute JavaScript, and Node.js also uses V8 to execute JavaScript code."
  },

  {
    "type": "code",
    "language": "text",
    "text": "JavaScript Code\n      |\n      v\n   Node.js\n      |\n      v\n   V8 Engine\n      |\n      v\nJavaScript gets executed"
  },

  {
    "type": "paragraph",
    "text": "The important point is that Node.js provides the environment around the JavaScript engine and gives JavaScript access to server-side capabilities such as files, networking and other system functionality."
  },

  {
    "type": "heading",
    "text": "How Do We Run Node.js Code?"
  },

  {
    "type": "paragraph",
    "text": "Create a JavaScript file and execute it using the node command."
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "console.log('Hello Node.js');"
  },

  {
    "type": "code",
    "language": "bash",
    "text": "node app.js"
  },

  {
    "type": "paragraph",
    "text": "The node app.js command tells Node.js to execute the JavaScript code inside app.js."
  },

  {
    "type": "heading",
    "text": "What are Modules?"
  },

  {
    "type": "paragraph",
    "text": "A module is a reusable piece of code that can be kept in a separate file and used where needed. Modules help us divide a large application into smaller and organized pieces."
  },

  {
    "type": "code",
    "language": "text",
    "text": "Backend Project\n|\n|-- server.js\n|-- user.js\n|-- auth.js\n|-- database.js\n|-- product.js"
  },

  {
    "type": "paragraph",
    "text": "Instead of writing the entire backend inside one huge file, we can keep related code inside separate modules."
  },

  {
    "type": "heading",
    "text": "Types of Modules in Node.js"
  },

  {
    "type": "summary",
    "items": [
      "Built-in or Core Modules — provided by Node.js itself.",
      "Custom or Local Modules — modules created by us.",
      "Third-party Modules — packages installed from npm."
    ]
  },

  {
    "type": "heading",
    "text": "Built-in Modules"
  },

  {
    "type": "paragraph",
    "text": "Built-in modules are provided by Node.js. We do not need to install them separately."
  },

  {
    "type": "summary",
    "items": [
      "fs — work with files and folders.",
      "path — work with file and folder paths.",
      "http — create HTTP servers and handle HTTP requests.",
      "os — get information about the operating system.",
      "events — work with event-based programming."
    ]
  },

  {
    "type": "heading",
    "text": "Example of a Built-in Module"
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "import http from 'http';\n\nconsole.log(http);"
  },

  {
    "type": "paragraph",
    "text": "Here http is a built-in Node.js module used to create a server. It is imported directly without installing anything through npm."
  },

  {
    "type": "heading",
    "text": "Custom Modules"
  },

  {
    "type": "paragraph",
    "text": "A custom module is a module created by us for our own application."
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "// math.js\nexport function add(a, b) {\n  return a + b;\n}"
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "// app.js\nimport { add } from './math.js';\n\nconsole.log(add(10, 20));"
  },

  {
    "type": "paragraph",
    "text": "Here math.js is our custom module. The add function is exported from math.js and imported into app.js."
  },

  {
    "type": "heading",
    "text": "Import and Export"
  },

  {
    "type": "paragraph",
    "text": "export is used to make code available outside a module, while import is used to use exported code inside another module."
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "// math.js\nexport const multiply = (a, b) => a * b;"
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "// app.js\nimport { multiply } from './math.js';\n\nconsole.log(multiply(5, 4));"
  },

  {
    "type": "summary",
    "items": [
      "export means make something available from a module.",
      "import means use something from another module.",
      "This module system works independently of Express."
    ]
  },

  {
    "type": "heading",
    "text": "What are Third-party Modules?"
  },

  {
    "type": "paragraph",
    "text": "Third-party modules are packages created by other developers and installed through npm. Express, Mongoose, dotenv and bcrypt are examples."
  },

  {
    "type": "code",
    "language": "bash",
    "text": "npm install express"
  },

  {
    "type": "paragraph",
    "text": "Express is not required to use import and export. Node.js can use modules without Express. Express is a separate web framework that makes creating web servers and APIs easier."
  },

  {
    "type": "heading",
    "text": "What is a Server?"
  },

  {
    "type": "paragraph",
    "text": "A server is a program or computer system that waits for requests from clients, processes those requests and sends responses back."
  },

  {
    "type": "code",
    "language": "text",
    "text": "Client\n  |\n  | Request\n  v\nServer\n  |\n  | Process\n  v\nResponse\n  |\n  v\nClient"
  },

  {
    "type": "paragraph",
    "text": "In a Node.js backend, our Node.js program can act as the server. It can listen for incoming HTTP requests and send HTTP responses."
  },

  {
    "type": "heading",
    "text": "Why Do We Create a Server?"
  },

  {
    "type": "paragraph",
    "text": "We create a server so that other applications, such as a React frontend, browser or mobile application, can communicate with our backend through a network."
  },

  {
    "type": "code",
    "language": "text",
    "text": "React Frontend\n      |\n      | GET /users\n      v\nNode.js Server\n      |\n      | Read/process data\n      v\nResponse"
  },

  {
    "type": "heading",
    "text": "What is HTTP?"
  },

  {
    "type": "paragraph",
    "text": "HTTP stands for HyperText Transfer Protocol. It is a communication protocol used for sending requests and responses between clients and servers on the web."
  },

  {
    "type": "code",
    "language": "text",
    "text": "Client -----------------> Server\n          HTTP Request\n\nClient <----------------- Server\n          HTTP Response"
  },

  {
    "type": "paragraph",
    "text": "For example, when a frontend requests user data, it can send an HTTP GET request to the backend. The backend processes the request and sends an HTTP response."
  },

  {
    "type": "heading",
    "text": "What is the http Module?"
  },

  {
    "type": "paragraph",
    "text": "The http module is a built-in Node.js module that provides functionality for creating HTTP servers and handling HTTP requests and responses."
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "import http from 'node:http';"
  },

  {
    "type": "heading",
    "text": "How to Create a Basic HTTP Server?"
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "import http from 'node:http';\n\nconst server = http.createServer((req, res) => {\n  res.end('Hello from Node.js server');\n});\n\nserver.listen(3000);"
  },

  {
    "type": "paragraph",
    "text": "http.createServer() creates an HTTP server. The callback function runs whenever a request reaches the server. req represents the incoming request and res represents the response that we send back."
  },

  {
    "type": "heading",
    "text": "What is req?"
  },

  {
    "type": "paragraph",
    "text": "req stands for request. It contains information about the request sent by the client, such as the HTTP method and requested URL."
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "const server = http.createServer((req, res) => {\n  console.log(req.method);\n  console.log(req.url);\n\n  res.end('Request received');\n});"
  },

  {
    "type": "heading",
    "text": "What is res?"
  },

  {
    "type": "paragraph",
    "text": "res stands for response. It is used by the server to send a response back to the client."
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "const server = http.createServer((req, res) => {\n  res.end('Hello Client');\n});"
  },

  {
    "type": "paragraph",
    "text": "When the client sends a request, res.end() sends the final response and finishes that response."
  },

  {
    "type": "heading",
    "text": "What is a Port?"
  },

  {
    "type": "paragraph",
    "text": "A port is a number used to identify a network service running on a computer. A server listens on a particular port so that incoming network traffic can reach the correct application."
  },

  {
    "type": "code",
    "language": "text",
    "text": "localhost:3000\n         |\n         +---- 3000 = Port"
  },

  {
    "type": "paragraph",
    "text": "Port 3000 is commonly used during local development, but it is not special or mandatory. We can choose another available port."
  },

  {
    "type": "heading",
    "text": "What does server.listen() do?"
  },

  {
    "type": "paragraph",
    "text": "server.listen() tells the Node.js server to start listening for incoming network connections on the specified port."
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "server.listen(3000, () => {\n  console.log('Server running on port 3000');\n});"
  },

  {
    "type": "paragraph",
    "text": "After listen() starts the server, we can access the local server at http://localhost:3000."
  },

  {
    "type": "heading",
    "text": "What is localhost?"
  },

  {
    "type": "paragraph",
    "text": "localhost refers to the same computer on which the application is running. During development, localhost is commonly used to access our local Node.js server."
  },

  {
    "type": "code",
    "language": "text",
    "text": "http://localhost:3000\n      |          |\n      |          +-- Port 3000\n      +------------- Current computer"
  },

  {
    "type": "heading",
    "text": "Why Does the Server Need to Keep Running?"
  },

  {
    "type": "paragraph",
    "text": "A server needs to keep running because it must remain available to receive incoming requests. If the Node.js process stops, the server stops listening and clients cannot communicate with it."
  },

  {
    "type": "heading",
    "text": "What Does server.close() Do?"
  },

  {
    "type": "paragraph",
    "text": "server.close() stops the server from accepting new connections. It is useful when we intentionally want to shut down the server."
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "server.close(() => {\n  console.log('Server stopped');\n});"
  },

  {
    "type": "heading",
    "text": "Complete Basic Node.js HTTP Server"
  },

  {
    "type": "code",
    "language": "javascript",
    "text": "import http from 'node:http';\n\nconst server = http.createServer((req, res) => {\n  res.end('Hello from my backend');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running at http://localhost:3000');\n});"
  },

  {
    "type": "heading",
    "text": "How This Server Works"
  },

  {
    "type": "code",
    "language": "text",
    "text": "1. Import http\n       |\n       v\n2. createServer()\n       |\n       v\n3. Server is created\n       |\n       v\n4. listen(3000)\n       |\n       v\n5. Server waits for requests\n       |\n       v\n6. Request arrives\n       |\n       v\n7. Callback runs\n       |\n       v\n8. res.end() sends response"
  },

  {
    "type": "summary",
    "items": [
      "Backend handles server-side logic and communication with databases.",
      "Node.js runs JavaScript outside the browser.",
      "V8 is the JavaScript engine used by Node.js.",
      "Modules help divide code into reusable pieces.",
      "Built-in modules come with Node.js.",
      "Custom modules are created by us.",
      "Third-party modules are installed through npm.",
      "HTTP is used for communication between clients and servers.",
      "The http module can create an HTTP server.",
      "req represents the request and res represents the response.",
      "listen() starts the server and makes it listen on a port.",
      "A port identifies the network service where the server is listening.",
      "server.close() is used to stop the server."
    ]
  },

  {
    "type": "heading",
    "text": "One-Line Mental Model"
  },

  {
    "type": "code",
    "language": "text",
    "text": "Frontend\n   |\n   | HTTP Request\n   v\nNode.js HTTP Server\n   |\n   | req -> process -> res\n   v\nHTTP Response\n   |\n   v\nFrontend"
  }

]


}
];
