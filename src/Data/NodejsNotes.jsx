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


},


{
  "id": 37,
  "slug": "express-basics-routing-and-post-api",
  "title": "Express.js Backend Basics — Express, Routing and POST API",
  "date": "13 August 2026",
  "description": "Learn what Express.js is, why it is used with Node.js, how routing works, what API methods are, how to create a POST API, how frontend and backend communicate, and why headers, Content-Type, JSON and express.json() are used.",
  "content": [
    {
      "type": "heading",
      "text": "What is Express.js?"
    },
    {
      "type": "paragraph",
      "text": "Express.js is a web framework for Node.js. It makes it easier to create servers, routes and APIs. Node.js already provides the built-in http module for creating servers, but Express gives us simpler and more organized ways to handle requests and responses."
    },
    {
      "type": "code",
      "language": "text",
      "text": "Without Express\nNode.js + http module\n        |\n        v\nMore manual server handling\n\nWith Express\nNode.js + Express\n        |\n        v\nEasy routes + APIs + middleware"
    },
    {
      "type": "summary",
      "items": [
        "Node.js is the runtime.",
        "Express.js is a framework that runs on Node.js.",
        "Express is not a programming language.",
        "Express is not a database.",
        "Express makes backend server and API development easier."
      ]
    },
    {
      "type": "heading",
      "text": "Why Do We Use Express?"
    },
    {
      "type": "paragraph",
      "text": "We use Express because handling many URLs and HTTP requests directly with Node.js http module can become repetitive. Express provides simple methods such as app.get(), app.post(), app.put() and app.delete() for creating routes and APIs."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "app.get('/home', (req, res) => {\n  res.send('Home Page');\n});"
    },
    {
      "type": "paragraph",
      "text": "This simple code creates a GET route for /home. Express checks the incoming request and runs the matching route."
    },
    {
      "type": "heading",
      "text": "Installing Express"
    },
    {
      "type": "code",
      "language": "bash",
      "text": "npm init -y\nnpm install express"
    },
    {
      "type": "heading",
      "text": "Basic Express Server"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const express = require('express');\n\nconst app = express();\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});"
    },
    {
      "type": "paragraph",
      "text": "express() creates the Express application. app.listen() starts the server and makes it listen for incoming requests on port 3000."
    },
    {
      "type": "heading",
      "text": "What is a Route?"
    },
    {
      "type": "paragraph",
      "text": "A route tells the backend what to do when a particular HTTP method and URL are requested."
    },
    {
      "type": "code",
      "language": "text",
      "text": "GET /home\n     |\n     v\nExpress checks the route\n     |\n     v\nRuns the matching function\n     |\n     v\nSends response"
    },
    {
      "type": "heading",
      "text": "Creating a Simple Route"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "app.get('/home', (req, res) => {\n  res.send('Welcome to Home');\n});"
    },
    {
      "type": "paragraph",
      "text": "When someone sends a GET request to /home, Express runs this function and sends 'Welcome to Home' as the response."
    },
    {
      "type": "heading",
      "text": "What is a URL?"
    },
    {
      "type": "paragraph",
      "text": "A URL is the address used to access a resource or route on a server."
    },
    {
      "type": "code",
      "language": "text",
      "text": "http://localhost:3000/users\n      |          |     |\n      |          |     +-- Route /users\n      |          +-------- Port 3000\n      +------------------- Current computer"
    },
    {
      "type": "paragraph",
      "text": "Here /users is the route or path. localhost means our own computer and 3000 is the port where the Express server is running."
    },
    {
      "type": "heading",
      "text": "API Methods in Express"
    },
    {
      "type": "paragraph",
      "text": "Express commonly uses HTTP methods to describe what we want to do with a resource. The most important methods for beginners are GET, POST, PUT, PATCH and DELETE."
    },
    {
      "type": "summary",
      "items": [
        "GET — get or read data.",
        "POST — create or send new data.",
        "PUT — replace or update an existing resource.",
        "PATCH — partially update an existing resource.",
        "DELETE — delete a resource."
      ]
    },
    {
      "type": "code",
      "language": "text",
      "text": "GET     /users       -> Get users\nPOST    /users       -> Create user\nPUT     /users/10    -> Replace user 10\nPATCH   /users/10    -> Update part of user 10\nDELETE  /users/10    -> Delete user 10"
    },
    {
      "type": "heading",
      "text": "GET vs POST"
    },
    {
      "type": "paragraph",
      "text": "GET is generally used when the client wants to receive data from the backend. POST is generally used when the client wants to send new data to the backend so that the backend can process or create something."
    },
    {
      "type": "code",
      "language": "text",
      "text": "GET\nFrontend -----------------> Backend\n          Give me users\n\nPOST\nFrontend -----------------> Backend\n          Here is new user data"
    },
    {
      "type": "heading",
      "text": "What is an API?"
    },
    {
      "type": "paragraph",
      "text": "An API is a way for different applications to communicate with each other. In a typical web application, the frontend sends an HTTP request to a backend API and the backend sends an HTTP response."
    },
    {
      "type": "code",
      "language": "text",
      "text": "React Frontend\n      |\n      | HTTP Request\n      v\nExpress API\n      |\n      | Process data\n      v\nHTTP Response\n      |\n      v\nReact Frontend"
    },
    {
      "type": "heading",
      "text": "What is an API URL?"
    },
    {
      "type": "paragraph",
      "text": "An API URL is the URL through which the frontend communicates with a particular backend API route."
    },
    {
      "type": "code",
      "language": "text",
      "text": "http://localhost:3000/users\n\nhttp://localhost:3000 -> Backend server\n/users                 -> API route"
    },
    {
      "type": "paragraph",
      "text": "If the frontend sends a POST request to http://localhost:3000/users, it is asking the Express backend to handle the POST /users route."
    },
    {
      "type": "heading",
      "text": "First POST API"
    },
    {
      "type": "paragraph",
      "text": "Now we will create a simple POST API where the frontend sends a user's name and email to the Express backend."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const express = require('express');\n\nconst app = express();\n\napp.use(express.json());\n\napp.post('/users', (req, res) => {\n  const { name, email } = req.body;\n\n  res.json({\n    message: 'User received successfully',\n    user: {\n      name: name,\n      email: email\n    }\n  });\n});\n\napp.listen(3000, () => {\n  console.log('Server running on port 3000');\n});"
    },
    {
      "type": "heading",
      "text": "What is req.body?"
    },
    {
      "type": "paragraph",
      "text": "req.body contains the data sent by the client inside the request body. In a POST request, this is commonly where the frontend sends form or JSON data."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const { name, email } = req.body;"
    },
    {
      "type": "paragraph",
      "text": "If the frontend sends name and email, req.body allows the backend to read those values."
    },
    {
      "type": "heading",
      "text": "Why Do We Use express.json()?"
    },
    {
      "type": "paragraph",
      "text": "When the frontend sends JSON data, Express needs middleware to parse that JSON request body and make the result available through req.body. express.json() does this job."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "app.use(express.json());"
    },
    {
      "type": "paragraph",
      "text": "Without express.json(), Express will not automatically parse a JSON request body for us. With it, JSON data sent by the client becomes available in req.body."
    },
    {
      "type": "heading",
      "text": "Frontend to Backend POST Request"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "async function createUser() {\n  const response = await fetch('http://localhost:3000/users', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: 'Rahul',\n      email: 'rahul@gmail.com'\n    })\n  });\n\n  const data = await response.json();\n\n  console.log(data);\n}"
    },
    {
      "type": "heading",
      "text": "What is the Request Body?"
    },
    {
      "type": "paragraph",
      "text": "The request body is the actual data that the client sends to the backend. For example, when creating a user, the body can contain the user's name and email."
    },
    {
      "type": "code",
      "language": "json",
      "text": "{\n  \"name\": \"Rahul\",\n  \"email\": \"rahul@gmail.com\"\n}"
    },
    {
      "type": "heading",
      "text": "Why is JSON Used for API Data?"
    },
    {
      "type": "paragraph",
      "text": "JSON is a simple text-based data format that is easy for both frontend and backend applications to create, send, read and understand. JavaScript also works naturally with JSON-like objects, which makes JSON very common in web APIs."
    },
    {
      "type": "paragraph",
      "text": "When we send JSON over HTTP, the data is transmitted as text. That is why the frontend commonly uses JSON.stringify() before putting an object into the request body."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const user = {\n  name: 'Rahul',\n  email: 'rahul@gmail.com'\n};\n\nJSON.stringify(user);"
    },
    {
      "type": "paragraph",
      "text": "JSON.stringify() converts the JavaScript object into a JSON string that can be sent in the HTTP request body."
    },
    {
      "type": "heading",
      "text": "Why Does the Frontend Send a String?"
    },
    {
      "type": "paragraph",
      "text": "HTTP transfers data as bytes, and JSON is represented as text when sent over the network. JSON.stringify() converts the JavaScript object into JSON text. The backend then parses that JSON text into usable JavaScript data."
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend object\n      |\n      | JSON.stringify()\n      v\nJSON text sent through HTTP\n      |\n      v\nExpress\n      |\n      | express.json()\n      v\nreq.body JavaScript object"
    },
    {
      "type": "heading",
      "text": "What are Headers?"
    },
    {
      "type": "paragraph",
      "text": "Headers are extra information sent along with an HTTP request or response. They tell the other side important details about the request or response."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "headers: {\n  'Content-Type': 'application/json'\n}"
    },
    {
      "type": "paragraph",
      "text": "Here the Content-Type header tells the backend what format the request body contains."
    },
    {
      "type": "heading",
      "text": "What is Content-Type?"
    },
    {
      "type": "paragraph",
      "text": "Content-Type tells the receiver what kind of data is being sent in the request body."
    },
    {
      "type": "code",
      "language": "text",
      "text": "Content-Type: application/json\n\nMeans:\nThe request body contains JSON data."
    },
    {
      "type": "heading",
      "text": "What is application/json?"
    },
    {
      "type": "paragraph",
      "text": "application/json is the MIME type used to identify JSON data. When we send JSON in an API request, we commonly set Content-Type to application/json so the backend knows how to interpret the body."
    },
    {
      "type": "heading",
      "text": "Why Do We Send JSON Response?"
    },
    {
      "type": "paragraph",
      "text": "The backend commonly sends a JSON response because the frontend can easily read and use the structured data."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "res.json({\n  message: 'User created successfully',\n  user: {\n    name: 'Rahul',\n    email: 'rahul@gmail.com'\n  }\n});"
    },
    {
      "type": "paragraph",
      "text": "Express converts the JavaScript object passed to res.json() into JSON and sends it to the client."
    },
    {
      "type": "heading",
      "text": "Complete Frontend and Backend Flow"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   | POST /users\n   | Content-Type: application/json\n   | Body: JSON data\n   v\nExpress Backend\n   |\n   | express.json()\n   v\nreq.body\n   |\n   | Process data\n   v\nres.json()\n   |\n   | JSON Response\n   v\nFrontend"
    },
    {
      "type": "heading",
      "text": "Complete Beginner Example"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "// Backend: server.js\nconst express = require('express');\n\nconst app = express();\n\napp.use(express.json());\n\napp.post('/users', (req, res) => {\n  const { name, email } = req.body;\n\n  res.json({\n    message: 'User created successfully',\n    user: {\n      name,\n      email\n    }\n  });\n});\n\napp.listen(3000, () => {\n  console.log('Server running on http://localhost:3000');\n});"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "// Frontend\nasync function createUser() {\n  const response = await fetch('http://localhost:3000/users', {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: 'Rahul',\n      email: 'rahul@gmail.com'\n    })\n  });\n\n  const data = await response.json();\n\n  console.log(data);\n}"
    },
    {
      "type": "heading",
      "text": "What Happens Step by Step?"
    },
    {
      "type": "summary",
      "items": [
        "Frontend creates a user object.",
        "JSON.stringify() converts the object into JSON text.",
        "fetch() sends a POST request to /users.",
        "Content-Type tells the backend that the body contains JSON.",
        "Express receives the request.",
        "express.json() parses the JSON body.",
        "The parsed data becomes available in req.body.",
        "The backend processes the data.",
        "res.json() creates a JSON response.",
        "Frontend receives the response using response.json()."
      ]
    },
    {
      "type": "heading",
      "text": "Important Mental Model"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n  |\n  | POST /users\n  | Headers: Content-Type: application/json\n  | Body: JSON text\n  v\nExpress\n  |\n  | express.json()\n  v\nreq.body\n  |\n  | Backend logic\n  v\nres.json()\n  |\n  | JSON response\n  v\nFrontend"
    },
    {
      "type": "summary",
      "items": [
        "Express is a Node.js web framework.",
        "Routes connect HTTP methods and URLs to backend functions.",
        "GET is mainly used to read data.",
        "POST is mainly used to create or send new data.",
        "PUT replaces or updates a resource.",
        "PATCH partially updates a resource.",
        "DELETE removes a resource.",
        "An API URL is the address used to communicate with a backend route.",
        "Headers contain additional information about an HTTP request or response.",
        "Content-Type tells the receiver what format the request body contains.",
        "application/json means the body contains JSON data.",
        "JSON.stringify() converts a JavaScript object into JSON text.",
        "express.json() parses incoming JSON request bodies and makes them available in req.body.",
        "res.json() sends a JSON response from Express.",
        "The basic API flow is Request -> Express -> req.body -> Logic -> Response."
      ]
    },
    {
      "type": "heading",
      "text": "One-Line Mental Model"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   | POST + URL + Headers + JSON Body\n   v\nExpress Route\n   |\n   | express.json()\n   v\nreq.body\n   |\n   | Process\n   v\nres.json()\n   |\n   v\nFrontend "
    }
  ]
},

{
"id": 38,
"slug": "express-http-methods-get-put-patch-delete",
"title": "Express.js API Basics — GET, PUT, PATCH and DELETE",
"date": "15 August 2026",
"description": "Learn how GET, PUT, PATCH and DELETE APIs work in Express, what each method is used for, common status codes, and how frontend and backend communicate with simple beginner-friendly examples.",
"content": [
{
"type": "heading",
"text": "HTTP Methods — Quick Overview"
},
{
"type": "paragraph",
"text": "HTTP methods tell the backend what the frontend wants to do with data. The main methods we are learning are GET, POST, PUT, PATCH and DELETE."
},
{
"type": "summary",
"items": [
"GET — data read karna.",
"POST — naya data create karna.",
"PUT — existing data ko complete update/replace karna.",
"PATCH — existing data ka sirf kuch part update karna.",
"DELETE — existing data delete karna."
]
},
{
"type": "code",
"language": "text",
"text": "GET     /users/1  -> User ko read karo\nPOST    /users    -> Naya user banao\nPUT     /users/1  -> User 1 ko completely update karo\nPATCH   /users/1  -> User 1 ka kuch part update karo\nDELETE  /users/1  -> User 1 ko delete karo"
},
{
"type": "heading",
"text": "Example Data"
},
{
"type": "code",
"language": "javascript",
"text": "let usersdata = [\n  { id: 1, name: 'Aman', age: 20 },\n  { id: 2, name: 'Rohit', age: 25 }\n];"
},
{
"type": "heading",
"text": "GET Request — Data Read Karna"
},
{
"type": "paragraph",
"text": "GET ka use backend se data lene ke liye hota hai. GET request mein normally request body nahi bhejte."
},
{
"type": "code",
"language": "javascript",
"text": "server.get('/users', (req, res) => {\n  res.status(200).json({\n    success: true,\n    data: usersdata\n  });\n});"
},
{
"type": "paragraph",
"text": "Yahan 200 ka matlab hai request successfully process ho gayi."
},
{
"type": "heading",
"text": "Frontend GET Example"
},
{
"type": "code",
"language": "javascript",
"text": "async function getUsers() {\n  try {\n    const response = await fetch('http://localhost:7000/users');\n\n    const data = await response.json();\n\n    console.log(data);\n  } catch (error) {\n    console.log(error);\n  }\n}"
},
{
"type": "code",
"language": "text",
"text": "Frontend\n   |\n   | GET /users\n   v\nExpress Backend\n   |\n   | Find/read data\n   v\nres.json()\n   |\n   | JSON Response\n   v\nFrontend"
},
{
"type": "heading",
"text": "GET — User By ID"
},
{
"type": "paragraph",
"text": "Agar hume sirf ek user chahiye, to URL mein id bhej sakte hain."
},
{
"type": "code",
"language": "javascript",
"text": "server.get('/users/:id', (req, res) => {\n  const id = Number(req.params.id);\n\n  const user = usersdata.find(user => user.id === id);\n\n  if (!user) {\n    return res.status(404).json({\n      success: false,\n      msg: 'User not found'\n    });\n  }\n\n  res.status(200).json({\n    success: true,\n    data: user\n  });\n});"
},
{
"type": "paragraph",
"text": "req.params.id URL se id read karta hai. Number() isliye use kiya gaya hai kyunki URL parameters string ke form mein aate hain."
},
{
"type": "heading",
"text": "PUT Request — Complete Update"
},
{
"type": "paragraph",
"text": "PUT ka use existing resource ko complete updated data se replace/update karne ke liye hota hai. Beginner level par ise 'poora user update' ke roop mein yaad rakho."
},
{
"type": "code",
"language": "javascript",
"text": "server.put('/users/:id', (req, res) => {\n  const id = Number(req.params.id);\n\n  const index = usersdata.findIndex(user => user.id === id);\n\n  if (index === -1) {\n    return res.status(404).json({\n      success: false,\n      msg: 'User not found'\n    });\n  }\n\n  usersdata[index] = {\n    id: id,\n    name: req.body.name,\n    age: req.body.age\n  };\n\n  res.status(200).json({\n    success: true,\n    msg: 'User completely updated',\n    data: usersdata[index]\n  });\n});"
},
{
"type": "heading",
"text": "Frontend PUT Example"
},
{
"type": "code",
"language": "javascript",
"text": "async function updateUser() {\n  const response = await fetch('http://localhost:7000/users/1', {\n    method: 'PUT',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      name: 'Shinchan',\n      age: 12\n    })\n  });\n\n  const data = await response.json();\n  console.log(data);\n}"
},
{
"type": "paragraph",
"text": "PUT request mein backend ko complete required user data diya ja raha hai. Id URL se aa rahi hai aur name aur age body se."
},
{
"type": "code",
"language": "text",
"text": "Before\n{id: 1, name: 'Aman', age: 20}\n\nPUT\n{id: 1, name: 'Shinchan', age: 12}\n\nAfter\n{id: 1, name: 'Shinchan', age: 12}"
},
{
"type": "heading",
"text": "PATCH Request — Partial Update"
},
{
"type": "paragraph",
"text": "PATCH ka use existing resource ke sirf kuch fields change karne ke liye hota hai. Jo field request mein nahi aayi, usko same rehne dete hain."
},
{
"type": "code",
"language": "javascript",
"text": "server.patch('/users/:id', (req, res) => {\n  const id = Number(req.params.id);\n\n  const index = usersdata.findIndex(user => user.id === id);\n\n  if (index === -1) {\n    return res.status(404).json({\n      success: false,\n      msg: 'User not found'\n    });\n  }\n\n  usersdata[index] = {\n    ...usersdata[index],\n    ...req.body\n  };\n\n  res.status(200).json({\n    success: true,\n    msg: 'User partially updated',\n    data: usersdata[index]\n  });\n});"
},
{
"type": "heading",
"text": "Frontend PATCH Example"
},
{
"type": "code",
"language": "javascript",
"text": "async function updateAge() {\n  const response = await fetch('http://localhost:7000/users/1', {\n    method: 'PATCH',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      age: 15\n    })\n  });\n\n  const data = await response.json();\n  console.log(data);\n}"
},
{
"type": "code",
"language": "text",
"text": "Before\n{id: 1, name: 'Shinchan', age: 12}\n\nPATCH\n{age: 15}\n\nAfter\n{id: 1, name: 'Shinchan', age: 15}"
},
{
"type": "paragraph",
"text": "Spread operator purana user copy karta hai aur req.body mein jo fields aati hain unko overwrite karta hai. Isliye PATCH mein baaki data safe rehta hai."
},
{
"type": "heading",
"text": "PUT vs PATCH"
},
{
"type": "code",
"language": "text",
"text": "PUT\nFrontend -> Complete updated data\n        -> Poora resource update\n\nPATCH\nFrontend -> Sirf changed data\n        -> Resource ka kuch part update"
},
{
"type": "heading",
"text": "DELETE Request — Data Delete Karna"
},
{
"type": "paragraph",
"text": "DELETE ka use existing resource ko remove karne ke liye hota hai."
},
{
"type": "code",
"language": "javascript",
"text": "server.delete('/users/:id', (req, res) => {\n  const id = Number(req.params.id);\n\n  const index = usersdata.findIndex(user => user.id === id);\n\n  if (index === -1) {\n    return res.status(404).json({\n      success: false,\n      msg: 'User not found'\n    });\n  }\n\n  usersdata.splice(index, 1);\n\n  res.status(200).json({\n    success: true,\n    msg: 'User deleted successfully'\n  });\n});"
},
{
"type": "heading",
"text": "Frontend DELETE Example"
},
{
"type": "code",
"language": "javascript",
"text": "async function deleteUser() {\n  const response = await fetch('http://localhost:7000/users/1', {\n    method: 'DELETE'\n  });\n\n  const data = await response.json();\n  console.log(data);\n}"
},
{
"type": "paragraph",
"text": "DELETE mein body ki zarurat nahi hai kyunki jis user ko delete karna hai uski id URL mein di gayi hai."
},
{
"type": "code",
"language": "text",
"text": "Before\n[\n  {id: 1, name: 'Aman', age: 20},\n  {id: 2, name: 'Rohit', age: 25}\n]\n\nDELETE /users/1\n\nAfter\n[\n  {id: 2, name: 'Rohit', age: 25}\n]"
},
{
"type": "heading",
"text": "Important Status Codes"
},
{
"type": "summary",
"items": [
"200 OK — request successfully complete hui.",
"201 Created — naya resource successfully create hua, commonly POST ke baad.",
"400 Bad Request — client ne invalid ya incomplete request bheji.",
"404 Not Found — requested resource nahi mila.",
"500 Internal Server Error — backend mein unexpected error aaya."
]
},
{
"type": "heading",
"text": "Status Code Kab Use Karein?"
},
{
"type": "code",
"language": "text",
"text": "GET success\n   -> 200\n\nPOST se naya data create\n   -> 201\n\nPUT/PATCH success\n   -> 200\n\nDELETE success\n   -> 200\n\nUser/data nahi mila\n   -> 404\n\nRequest galat hai\n   -> 400\n\nBackend mein error\n   -> 500"
},
{
"type": "heading",
"text": "Complete API Flow"
},
{
"type": "code",
"language": "text",
"text": "GET\nFrontend -> Backend -> Data read -> Response\n\nPOST\nFrontend -> Backend -> New data create -> Response\n\nPUT\nFrontend -> Backend -> Complete data update -> Response\n\nPATCH\nFrontend -> Backend -> Partial data update -> Response\n\nDELETE\nFrontend -> Backend -> Data remove -> Response"
},
{
"type": "heading",
"text": "One Simple Example to Remember Everything"
},
{
"type": "code",
"language": "text",
"text": "GET /users/1\n'Mujhe user 1 dikhao'\n\nPOST /users\n'Ye naya user create karo'\n\nPUT /users/1\n'User 1 ka complete updated data ye hai'\n\nPATCH /users/1\n'User 1 mein sirf ye changes karo'\n\nDELETE /users/1\n'User 1 ko delete karo'"
},
{
"type": "summary",
"items": [
"GET data read karta hai.",
"PUT complete resource ko update/replace karne ke liye use hota hai.",
"PATCH resource ke selected fields update karta hai.",
"DELETE resource ko remove karta hai.",
"URL mein :id se specific resource identify kar sakte hain.",
"req.params URL parameters ko read karta hai.",
"req.body request ke andar bheja gaya data read karta hai.",
"PATCH mein spread operator existing data ko preserve karke new fields update karne mein useful hai.",
"200 successful request ke liye common status code hai.",
"201 resource create hone par commonly use hota hai.",
"404 ka matlab requested resource nahi mila.",
"500 ka matlab backend mein unexpected error hua."
]
},
{
"type": "heading",
"text": "One-Line Mental Model"
},
{
"type": "code",
"language": "text",
"text": "GET    -> Read\nPOST   -> Create\nPUT    -> Complete Update\nPATCH  -> Partial Update\nDELETE -> Delete"
}
]
},

{
  "id": 39,
  "slug": "express-routers-and-middlewares",
  "title": "Express.js Routers and Middleware — Simple Beginner Notes",
  "date": "16 August 2026",
  "description": "Learn Express.js routes, routers and different types of middleware with simple English explanations and practical examples.",
  "content": [
    {
      "type": "heading",
      "text": "Routes and Middleware — Quick Overview"
    },
    {
      "type": "paragraph",
      "text": "A route tells Express what to do when a request comes to a specific URL. Middleware is a function that runs between the request and the final route response. Middleware can check, modify, or stop a request."
    },
    {
      "type": "summary",
      "items": [
        "Route — handles a specific URL and HTTP method.",
        "Router — groups related routes together.",
        "Middleware — runs between the request and the route.",
        "next() — sends the request to the next middleware or route.",
        "Application-level middleware — can run for many or all routes.",
        "Route-level middleware — runs only on selected routes.",
        "Built-in middleware — already provided by Express.",
        "Third-party middleware — installed from npm packages.",
        "Error-handling middleware — handles errors in one central place."
      ]
    },
    {
      "type": "heading",
      "text": "What is a Route?"
    },
    {
      "type": "paragraph",
      "text": "A route defines what the server should do when it receives a request for a particular URL and HTTP method."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.get('/users', (req, res) => {\n  res.json({\n    success: true,\n    message: 'Users data'\n  });\n});"
    },
    {
      "type": "paragraph",
      "text": "This route runs when the frontend sends a GET request to /users."
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   | GET /users\n   v\nExpress Route\n   |\n   v\nResponse\n   |\n   v\nFrontend"
    },
    {
      "type": "heading",
      "text": "What is a Router?"
    },
    {
      "type": "paragraph",
      "text": "A router is used to keep related routes together. It helps keep a large Express project clean and organized."
    },
    {
      "type": "code",
      "language": "text",
      "text": "routes/\n   |\n   |-- userRoutes.js\n   |-- productRoutes.js\n   |-- orderRoutes.js"
    },
    {
      "type": "heading",
      "text": "Creating a Router"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const express = require('express');\n\nconst router = express.Router();\n\nrouter.get('/users', (req, res) => {\n  res.json({\n    success: true,\n    message: 'All users'\n  });\n});\n\nrouter.get('/users/:id', (req, res) => {\n  res.json({\n    success: true,\n    message: `User ${req.params.id}`\n  });\n});\n\nmodule.exports = router;"
    },
    {
      "type": "paragraph",
      "text": "express.Router() creates a separate router. We can put related routes inside this router."
    },
    {
      "type": "heading",
      "text": "Using Router in server.js"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const express = require('express');\nconst userRoutes = require('./routes/userRoutes');\n\nconst server = express();\n\nserver.use('/api', userRoutes);"
    },
    {
      "type": "paragraph",
      "text": "The router has /users, but /api is added in server.js. So the final URL becomes /api/users."
    },
    {
      "type": "code",
      "language": "text",
      "text": "router.get('/users')\n        +\nserver.use('/api', userRoutes)\n        |\n        v\nGET /api/users"
    },
    {
      "type": "heading",
      "text": "Why Do We Use Routers?"
    },
    {
      "type": "summary",
      "items": [
        "They keep the project organized.",
        "Related routes can stay in one file.",
        "The main server.js file stays smaller.",
        "Large projects become easier to manage.",
        "Users, products, and orders can have separate route files."
      ]
    },
    {
      "type": "heading",
      "text": "What is Middleware?"
    },
    {
      "type": "paragraph",
      "text": "Middleware is a function that runs between the incoming request and the final route. It can check the request, change the request, log information, check authentication, or stop the request."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "function middleware(req, res, next) {\n  console.log('Middleware is running');\n\n  next();\n}"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   v\nRequest\n   |\n   v\nMiddleware\n   |\n   | next()\n   v\nRoute\n   |\n   v\nResponse"
    },
    {
      "type": "heading",
      "text": "What is next()?"
    },
    {
      "type": "paragraph",
      "text": "next() tells Express that the current middleware has finished its work and the request can continue to the next middleware or route."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "function middleware(req, res, next) {\n  console.log('Checking request');\n\n  next();\n}\n\nserver.get('/home', middleware, (req, res) => {\n  res.send('Home Page');\n});"
    },
    {
      "type": "heading",
      "text": "What Happens If We Do Not Call next()?"
    },
    {
      "type": "paragraph",
      "text": "If middleware does not send a response and does not call next(), the request will stop at that middleware."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "function middleware(req, res, next) {\n  console.log('Middleware running');\n\n  // No next()\n  // No response\n}"
    },
    {
      "type": "heading",
      "text": "Middleware Can Stop a Request"
    },
    {
      "type": "paragraph",
      "text": "Middleware can stop a request when a condition is not satisfied. For example, we can allow only users who are 18 or older."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "function checkAge(req, res, next) {\n  const { age } = req.body;\n\n  if (age < 18) {\n    return res.status(403).json({\n      success: false,\n      message: 'You must be 18 or older'\n    });\n  }\n\n  next();\n}"
    },
    {
      "type": "code",
      "language": "text",
      "text": "age = 16\n   |\n   v\nMiddleware\n   |\n   v\nage < 18\n   |\n   v\n403 Response\n   |\n   X Route stops\n\n\nage = 20\n   |\n   v\nMiddleware\n   |\n   v\nage >= 18\n   |\n   v\nnext()\n   |\n   v\nRoute runs"
    },
    {
      "type": "heading",
      "text": "Types of Middleware"
    },
    {
      "type": "summary",
      "items": [
        "1. Application-level middleware",
        "2. Route-level middleware",
        "3. Built-in middleware",
        "4. Third-party middleware",
        "5. Error-handling middleware"
      ]
    },
    {
      "type": "heading",
      "text": "1. Application-Level Middleware"
    },
    {
      "type": "paragraph",
      "text": "Application-level middleware is added to the Express application using server.use(). It can run for many or all routes."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.use((req, res, next) => {\n  console.log(req.method, req.url);\n  next();\n});"
    },
    {
      "type": "paragraph",
      "text": "This middleware can run whenever a request comes to the application."
    },
    {
      "type": "code",
      "language": "text",
      "text": "GET /users\n   -> middleware\n\nPOST /users\n   -> middleware\n\nDELETE /users/1\n   -> middleware"
    },
    {
      "type": "heading",
      "text": "Real-World Example — Request Logger"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.use((req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next();\n});"
    },
    {
      "type": "paragraph",
      "text": "This middleware can be used to see which HTTP method and URL the client is requesting."
    },
    {
      "type": "heading",
      "text": "2. Route-Level Middleware"
    },
    {
      "type": "paragraph",
      "text": "Route-level middleware is used only for a specific route. It is useful when only one or a few routes need a special check."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "function checkAge(req, res, next) {\n  const { age } = req.body;\n\n  if (age < 18) {\n    return res.status(403).json({\n      success: false,\n      message: 'Access denied'\n    });\n  }\n\n  next();\n}\n\nserver.post('/getdata', checkAge, (req, res) => {\n  res.json({\n    success: true,\n    message: 'Access allowed'\n  });\n});"
    },
    {
      "type": "paragraph",
      "text": "Here checkAge is used only for /getdata. Other routes do not use this middleware."
    },
    {
      "type": "heading",
      "text": "Application-Level vs Route-Level"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Application-Level\n\nserver.use(middleware)\n        |\n        v\nCan run for many routes\n\n\nRoute-Level\n\nserver.get('/profile', middleware, handler)\n        |\n        v\nOnly /profile uses it"
    },
    {
      "type": "heading",
      "text": "3. Built-in Middleware"
    },
    {
      "type": "paragraph",
      "text": "Built-in middleware is already provided by Express. We do not need to install a separate package for it."
    },
    {
      "type": "heading",
      "text": "express.json()"
    },
    {
      "type": "paragraph",
      "text": "express.json() reads JSON data sent by the frontend and makes that data available in req.body."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.use(express.json());\n\nserver.post('/users', (req, res) => {\n  console.log(req.body);\n\n  res.json({\n    success: true\n  });\n});"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "fetch('http://localhost:7000/users', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    name: 'Aman',\n    age: 20\n  })\n});"
    },
    {
      "type": "paragraph",
      "text": "After express.json(), the backend can access the sent data using req.body."
    },
    {
      "type": "heading",
      "text": "4. Third-Party Middleware"
    },
    {
      "type": "paragraph",
      "text": "Third-party middleware comes from npm packages. We install these packages when Express does not provide the feature we need."
    },
    {
      "type": "heading",
      "text": "Example — cors"
    },
    {
      "type": "paragraph",
      "text": "cors is commonly used when a frontend and backend are running on different origins, such as different ports during development."
    },
    {
      "type": "code",
      "language": "bash",
      "text": "npm install cors"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const cors = require('cors');\n\nserver.use(cors());"
    },
    {
      "type": "paragraph",
      "text": "cors is third-party middleware because it comes from an npm package."
    },
    {
      "type": "heading",
      "text": "Example — morgan"
    },
    {
      "type": "paragraph",
      "text": "morgan is a popular middleware for logging HTTP requests."
    },
    {
      "type": "code",
      "language": "bash",
      "text": "npm install morgan"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const morgan = require('morgan');\n\nserver.use(morgan('dev'));"
    },
    {
      "type": "heading",
      "text": "5. Error-Handling Middleware"
    },
    {
      "type": "paragraph",
      "text": "Error-handling middleware is used to handle errors in one central place. Its function has four parameters: err, req, res, and next."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.use((err, req, res, next) => {\n  console.log(err.message);\n\n  res.status(500).json({\n    success: false,\n    message: 'Internal Server Error'\n  });\n});"
    },
    {
      "type": "paragraph",
      "text": "The first parameter is err. This makes the middleware an error-handling middleware."
    },
    {
      "type": "heading",
      "text": "How to Send an Error to Error Middleware?"
    },
    {
      "type": "paragraph",
      "text": "Use next(error) when you want to send an error to the error-handling middleware."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.get('/users', (req, res, next) => {\n  try {\n    throw new Error('Database failed');\n  } catch (error) {\n    next(error);\n  }\n});\n\nserver.use((err, req, res, next) => {\n  res.status(500).json({\n    success: false,\n    message: err.message\n  });\n});"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Route\n  |\n  | Error\n  v\ncatch(error)\n  |\n  | next(error)\n  v\nError Middleware\n  |\n  v\nError Response"
    },
    {
      "type": "heading",
      "text": "next() vs next(error)"
    },
    {
      "type": "code",
      "language": "text",
      "text": "next()\n  -> Continue normal request flow\n  -> Go to the next middleware or route\n\nnext(error)\n  -> Start error flow\n  -> Go to error-handling middleware"
    },
    {
      "type": "heading",
      "text": "Multiple Middleware on One Route"
    },
    {
      "type": "paragraph",
      "text": "We can use more than one middleware on the same route. Each middleware can do one small job."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.post(\n  '/profile',\n  checkAuth,\n  checkAge,\n  validateData,\n  (req, res) => {\n    res.json({\n      success: true,\n      message: 'Profile updated'\n    });\n  }\n);"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Request\n   |\n   v\ncheckAuth\n   |\n next()\n   v\ncheckAge\n   |\n next()\n   v\nvalidateData\n   |\n next()\n   v\nRoute Handler\n   |\n   v\nResponse"
    },
    {
      "type": "heading",
      "text": "Real-World Middleware Flow"
    },
    {
      "type": "paragraph",
      "text": "Imagine a user wants to update their profile. The backend can first check login, then validate the data, and finally update the profile."
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   | PATCH /profile\n   v\nAuthentication Middleware\n   |\n   | Is the user logged in?\n   v\nValidation Middleware\n   |\n   | Is the data valid?\n   v\nRoute Handler\n   |\n   | Update database\n   v\nResponse\n   |\n   v\nFrontend"
    },
    {
      "type": "heading",
      "text": "Authentication Middleware Example"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "function checkAuth(req, res, next) {\n  const token = req.headers.authorization;\n\n  if (!token) {\n    return res.status(401).json({\n      success: false,\n      message: 'Login required'\n    });\n  }\n\n  next();\n}\n\nserver.get('/profile', checkAuth, (req, res) => {\n  res.json({\n    success: true,\n    message: 'Profile data'\n  });\n});"
    },
    {
      "type": "paragraph",
      "text": "If there is no token, the middleware sends a response and stops the request. If the token exists, next() allows the request to continue. In a real application, the token should also be properly verified."
    },
    {
      "type": "heading",
      "text": "Middleware Order Is Important"
    },
    {
      "type": "paragraph",
      "text": "Express runs middleware from top to bottom. Therefore, the order in which middleware is added is important."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.use(express.json());\n\nserver.use(logger);\n\nserver.get('/users', getUsers);\n\nserver.use(errorMiddleware);"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Request\n   |\nexpress.json()\n   |\nlogger\n   |\nroute\n   |\nerror middleware"
    },
    {
      "type": "paragraph",
      "text": "Error-handling middleware is normally placed after the routes so that errors from the routes can reach it."
    },
    {
      "type": "heading",
      "text": "Complete Small Example"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const express = require('express');\nconst cors = require('cors');\n\nconst server = express();\n\n// Built-in middleware\nserver.use(express.json());\n\n// Third-party middleware\nserver.use(cors());\n\n// Application-level middleware\nserver.use((req, res, next) => {\n  console.log(req.method, req.url);\n  next();\n});\n\n// Route-level middleware\nfunction checkAge(req, res, next) {\n  if (req.body.age < 18) {\n    return res.status(403).json({\n      success: false,\n      message: 'Access denied'\n    });\n  }\n\n  next();\n}\n\n// Route\nserver.post('/getdata', checkAge, (req, res, next) => {\n  try {\n    res.json({\n      success: true,\n      message: 'Data accessed successfully'\n    });\n  } catch (error) {\n    next(error);\n  }\n});\n\n// Error-handling middleware\nserver.use((err, req, res, next) => {\n  console.log(err.message);\n\n  res.status(500).json({\n    success: false,\n    message: 'Internal Server Error'\n  });\n});\n\nserver.listen(7000, () => {\n  console.log('Server running on port 7000');\n});"
    },
    {
      "type": "heading",
      "text": "Complete Request Flow"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   v\nRequest\n   |\n   v\nBuilt-in Middleware\n(express.json)\n   |\n   v\nThird-party Middleware\n(cors)\n   |\n   v\nApplication Middleware\n(logger)\n   |\n   v\nRoute-level Middleware\n(checkAge)\n   |\n   v\nRoute Handler\n   |\n   v\nResponse\n\nIf an error happens\n   |\n   v\nError Middleware\n   |\n   v\nError Response"
    },
    {
      "type": "heading",
      "text": "Router vs Route vs Middleware"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Router\n-> Organizes related routes\n\nRoute\n-> Handles the actual API request\n\nMiddleware\n-> Checks or processes the request before the route"
    },
    {
      "type": "heading",
      "text": "Quick Revision"
    },
    {
      "type": "summary",
      "items": [
        "A route handles a specific HTTP method and URL.",
        "A router groups related routes together.",
        "express.Router() creates a router.",
        "Middleware runs between the request and the route.",
        "next() continues the request.",
        "A middleware can stop a request by sending a response.",
        "Application-level middleware can run for many routes.",
        "Route-level middleware runs only on selected routes.",
        "Built-in middleware comes with Express.",
        "express.json() allows us to read JSON data from req.body.",
        "Third-party middleware comes from npm packages.",
        "cors and morgan are common third-party middleware examples.",
        "Error-handling middleware has four parameters: err, req, res, next.",
        "next(error) sends an error to error-handling middleware.",
        "Error-handling middleware is normally placed after the routes.",
        "Middleware order is important because Express runs it from top to bottom."
      ]
    },
    {
      "type": "heading",
      "text": "One-Line Mental Model"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Router      -> Organize routes\nRoute       -> Handle the request\nMiddleware  -> Check/process the request\nnext()      -> Continue\nBuilt-in    -> Express provides it\nThird-party -> Install from npm\nError       -> Handle errors centrally"
    }
  ]
},

{
  "id": 40,
  "slug": "mongodb-with-express-beginner-complete-notes",
  "title": "MongoDB with Express — Complete Beginner Notes",
  "date": "18 August 2026",
  "description": "Learn MongoDB with Express.js MongoDB, SQL vs NoSQL, Atlas, clusters, environment variables, Mongoose, schemas, models, database connection and complete CRUD.",
  "content": [
    {
      "type": "heading",
      "text": "MongoDB — Quick Overview"
    },
    {
      "type": "paragraph",
      "text": "MongoDB is a NoSQL database used to store application data. In an Express application, we can use MongoDB to store users, products, orders, posts and other data permanently."
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   | Request\n   v\nExpress Server\n   |\n   v\nMongoose\n   |\n   v\nMongoDB\n   |\n   v\nDatabase"
    },
    {
      "type": "summary",
      "items": [
        "MongoDB — Database system.",
        "Atlas — Cloud platform for MongoDB.",
        "Cluster — MongoDB deployment where databases are stored.",
        "Database — Container that stores collections.",
        "Collection — Similar to a table in SQL.",
        "Document — Similar to a row in SQL.",
        "Mongoose — Node.js library used to work with MongoDB.",
        "Schema — Defines the structure and rules of data.",
        "Model — Used to create and work with MongoDB documents.",
        "CRUD — Create, Read, Update and Delete data."
      ]
    },

    {
      "type": "heading",
      "text": "What is a Database?"
    },
    {
      "type": "paragraph",
      "text": "A database is a place where application data is stored. For example, a student application may need to store student names, ages, emails and courses."
    },
    {
      "type": "code",
      "language": "text",
      "text": "Application\n     |\n     v\n  Database\n     |\n     +-- Users\n     +-- Products\n     +-- Orders\n     +-- Students"
    },

    {
      "type": "heading",
      "text": "Why Do We Need a Database?"
    },
    {
      "type": "paragraph",
      "text": "Data stored only inside JavaScript variables disappears when the server restarts. A database stores data permanently so the application can use it later."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const user = {\n  name: 'Rahul',\n  age: 21\n};"
    },
    {
      "type": "paragraph",
      "text": "The variable above exists only while the application is running. MongoDB allows us to save the data permanently."
    },

    {
      "type": "heading",
      "text": "SQL vs NoSQL"
    },
    {
      "type": "paragraph",
      "text": "SQL databases usually store data in tables with rows and columns. NoSQL databases can store data in more flexible structures such as documents."
    },
    {
      "type": "code",
      "language": "text",
      "text": "SQL\n\nDatabase\n   |\n   v\nTable\n   |\n   +-- Rows\n   +-- Columns\n\n\nNoSQL / MongoDB\n\nDatabase\n   |\n   v\nCollection\n   |\n   v\nDocuments"
    },
    {
      "type": "summary",
      "items": [
        "SQL example: MySQL, PostgreSQL.",
        "NoSQL example: MongoDB.",
        "SQL commonly uses tables, rows and columns.",
        "MongoDB uses collections and documents.",
        "MongoDB documents look similar to JSON.",
        "NoSQL does not mean there is no structure; MongoDB can still use schemas and validation through tools such as Mongoose."
      ]
    },

    {
      "type": "heading",
      "text": "SQL Table vs MongoDB Collection"
    },
    {
      "type": "code",
      "language": "text",
      "text": "SQL\n\nusers table\n\nid | name  | age\n---|-------|----\n1  | Rahul | 21\n2  | Aman  | 22\n\n\nMongoDB\n\nusers collection\n\n{\n  name: 'Rahul',\n  age: 21\n}\n\n{\n  name: 'Aman',\n  age: 22\n}"
    },

    {
      "type": "heading",
      "text": "What is MongoDB?"
    },
    {
      "type": "paragraph",
      "text": "MongoDB is a NoSQL document database. Instead of storing data mainly as rows and columns, MongoDB stores data as documents inside collections."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "{\n  name: 'Rahul',\n  age: 21,\n  email: 'rahul@gmail.com'\n}"
    },
    {
      "type": "paragraph",
      "text": "MongoDB documents look very similar to JavaScript objects, which makes MongoDB comfortable to use with Node.js and Express."
    },

    {
      "type": "heading",
      "text": "MongoDB Important Terms"
    },
    {
      "type": "code",
      "language": "text",
      "text": "MongoDB\n   |\n   +-- Database\n         |\n         +-- Collection\n                |\n                +-- Document\n                       |\n                       +-- Fields"
    },
    {
      "type": "summary",
      "items": [
        "Database — Stores collections.",
        "Collection — Stores related documents.",
        "Document — One piece of stored data.",
        "Field — A property inside a document.",
        "_id — Unique identifier automatically created for documents."
      ]
    },

    {
      "type": "heading",
      "text": "What is MongoDB Atlas?"
    },
    {
      "type": "paragraph",
      "text": "MongoDB Atlas is MongoDB's cloud platform. Instead of running the database only on your own computer, Atlas lets you create and use MongoDB databases in the cloud."
    },
    {
      "type": "code",
      "language": "text",
      "text": "Your Computer\n      |\n      | Internet\n      v\nMongoDB Atlas\n      |\n      v\nMongoDB Cluster\n      |\n      v\nDatabase"
    },
    {
      "type": "paragraph",
      "text": "For learning and many small projects, Atlas is convenient because you do not have to run the MongoDB database server locally."
    },

    {
      "type": "heading",
      "text": "What is a Cluster?"
    },
    {
      "type": "paragraph",
      "text": "A cluster is the MongoDB deployment that your application connects to. Think of it as the main MongoDB environment containing your databases and collections."
    },
    {
      "type": "code",
      "language": "text",
      "text": "MongoDB Atlas\n      |\n      v\n   Cluster\n      |\n      +-- collegeDB\n      |      |\n      |      +-- students\n      |\n      +-- shopDB\n             |\n             +-- products"
    },
    {
      "type": "paragraph",
      "text": "You normally do not need a separate cluster for every database. Multiple databases can exist in the same cluster."
    },

    {
      "type": "heading",
      "text": "MongoDB Atlas vs MongoDB"
    },
    {
      "type": "code",
      "language": "text",
      "text": "MongoDB\n-> The database technology\n\nMongoDB Atlas\n-> Cloud platform for running MongoDB\n\nCluster\n-> Your MongoDB deployment inside Atlas"
    },

    {
      "type": "heading",
      "text": "Before MongoDB Setup — What is .env?"
    },
    {
      "type": "paragraph",
      "text": "Before connecting MongoDB, understand the .env file. An environment file is used to store configuration values and secrets that we do not want to hard-code directly inside our source code."
    },
    {
      "type": "heading",
      "text": "Why Do We Use .env?"
    },
    {
      "type": "paragraph",
      "text": "A MongoDB connection string can contain a username, password and other connection information. Putting these values directly inside server.js makes the code harder to manage and can accidentally expose secrets."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "// Avoid putting secrets directly in code\nmongoose.connect('mongodb+srv://username:password@cluster-url/...');"
    },
    {
      "type": "paragraph",
      "text": "Instead, keep the connection string inside .env and read it using process.env."
    },
    {
      "type": "code",
      "language": "text",
      "text": ".env\n\nMONGOURL=mongodb+srv://username:password@cluster-url/collegeDB\n\nserver.js\n\nprocess.env.MONGOURL"
    },
    {
      "type": "summary",
      "items": [
        ".env stores environment variables.",
        "It is commonly used for passwords, database URLs, API keys and configuration.",
        "process.env reads environment variables in Node.js.",
        "Do not commit .env to GitHub.",
        "Add .env to .gitignore."
      ]
    },

    {
      "type": "heading",
      "text": "Creating .env"
    },
    {
      "type": "code",
      "language": "text",
      "text": "backend/\n   |\n   +-- server.js\n   +-- db.js\n   +-- model.js\n   +-- .env"
    },
    {
      "type": "code",
      "language": "env",
      "text": "MONGOURL=mongodb+srv://USERNAME:PASSWORD@CLUSTER_URL/collegeDB"
    },
    {
      "type": "paragraph",
      "text": "The name MONGOURL is just a variable name. You can choose another name, but the name used in .env must match the name used in process.env."
    },

    {
      "type": "heading",
      "text": "Protecting .env"
    },
    {
      "type": "code",
      "language": "text",
      "text": ".gitignore\n\nnode_modules\n.env"
    },
    {
      "type": "paragraph",
      "text": "Never share your real database password publicly. If a password is exposed, change or reset it."
    },

    {
      "type": "heading",
      "text": "MongoDB Project Setup — Complete Flow"
    },
    {
      "type": "code",
      "language": "text",
      "text": "1. Create Express project\n        |\n        v\n2. Install mongoose and dotenv\n        |\n        v\n3. Create MongoDB Atlas account/project\n        |\n        v\n4. Create cluster\n        |\n        v\n5. Create database user\n        |\n        v\n6. Allow your IP address\n        |\n        v\n7. Get MongoDB connection string\n        |\n        v\n8. Put connection string in .env\n        |\n        v\n9. Connect using Mongoose\n        |\n        v\n10. Create Schema\n        |\n        v\n11. Create Model\n        |\n        v\n12. Build CRUD APIs"
    },

    {
      "type": "heading",
      "text": "Step 1 — Create Express Project"
    },
    {
      "type": "code",
      "language": "bash",
      "text": "mkdir backend\ncd backend\nnpm init -y\nnpm install express mongoose dotenv cors"
    },

    {
      "type": "heading",
      "text": "Step 2 — Use ES Modules"
    },
    {
      "type": "paragraph",
      "text": "In this course we will use import and export syntax instead of require and module.exports."
    },
    {
      "type": "code",
      "language": "json",
      "text": "{\n  \"type\": \"module\"\n}"
    },
    {
      "type": "paragraph",
      "text": "Now we can write clean modern imports such as import express from 'express'."
    },

    {
      "type": "heading",
      "text": "Step 3 — Project Structure"
    },
    {
      "type": "code",
      "language": "text",
      "text": "backend/\n   |\n   +-- config/\n   |      |\n   |      +-- db.js\n   |\n   +-- models/\n   |      |\n   |      +-- User.js\n   |\n   +-- .env\n   +-- .gitignore\n   +-- server.js\n   +-- package.json"
    },

    {
      "type": "heading",
      "text": "Step 4 — Install Mongoose"
    },
    {
      "type": "code",
      "language": "bash",
      "text": "npm install mongoose"
    },
    {
      "type": "paragraph",
      "text": "Mongoose is a Node.js library that makes it easier to work with MongoDB. It provides schemas, models, validation and convenient database methods."
    },

    {
      "type": "heading",
      "text": "What is Mongoose?"
    },
    {
      "type": "paragraph",
      "text": "MongoDB is the database. Mongoose is the library we use in our Node.js application to communicate with MongoDB and define rules for our data."
    },
    {
      "type": "code",
      "language": "text",
      "text": "Express\n   |\n   v\nMongoose\n   |\n   v\nMongoDB"
    },
    {
      "type": "summary",
      "items": [
        "MongoDB stores the data.",
        "Mongoose connects Node.js to MongoDB.",
        "Mongoose allows us to define schemas.",
        "Mongoose creates models from schemas.",
        "Mongoose provides methods for CRUD operations."
      ]
    },

    {
      "type": "heading",
      "text": "Step 5 — MongoDB Connection"
    },
    {
      "type": "paragraph",
      "text": "Create a db.js file. This file will contain only the MongoDB connection logic."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "import mongoose from 'mongoose';\n\nasync function connectDB() {\n  try {\n    await mongoose.connect(process.env.MONGOURL);\n    console.log('MongoDB connected');\n  } catch (error) {\n    console.log('MongoDB connection failed:', error.message);\n  }\n}\n\nexport default connectDB;"
    },

    {
      "type": "heading",
      "text": "Step 6 — Express Server"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "import dotenv from 'dotenv';\ndotenv.config();\n\nimport express from 'express';\nimport cors from 'cors';\nimport connectDB from './config/db.js';\n\nconst server = express();\n\nserver.use(express.json());\nserver.use(cors());\n\nconnectDB();\n\nserver.get('/', (req, res) => {\n  res.send('Server is running');\n});\n\nserver.listen(1200, () => {\n  console.log('Server running on port 1200');\n});"
    },
    {
      "type": "paragraph",
      "text": "dotenv.config() loads values from .env. express.json() allows Express to read JSON request bodies. connectDB() starts the MongoDB connection."
    },

    {
      "type": "heading",
      "text": "MongoDB Connection Flow"
    },
    {
      "type": "code",
      "language": "text",
      "text": ".env\n  |\n  | MONGOURL\n  v\nserver.js\n  |\n  | connectDB()\n  v\ndb.js\n  |\n  | mongoose.connect()\n  v\nMongoDB Atlas Cluster"
    },

    {
      "type": "heading",
      "text": "Common Connection Error"
    },
    {
      "type": "code",
      "language": "text",
      "text": "MongooseError:\nThe uri parameter ... got undefined"
    },
    {
      "type": "paragraph",
      "text": "This usually means process.env.MONGOURL is undefined. Check that .env exists, the variable name matches exactly, dotenv.config() runs before connectDB(), and the connection string is present."
    },

    {
      "type": "heading",
      "text": "What is a Schema?"
    },
    {
      "type": "paragraph",
      "text": "A schema defines the structure and rules of the data we want to store. It tells Mongoose which fields exist and what type of data they should contain."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const userSchema = new mongoose.Schema({\n  name: String,\n  age: Number,\n  email: String\n});"
    },
    {
      "type": "paragraph",
      "text": "Here name should be a String, age should be a Number and email should be a String."
    },

    {
      "type": "heading",
      "text": "Schema with Validation"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const userSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n\n  age: {\n    type: Number,\n    required: true\n  },\n\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  }\n});"
    },
    {
      "type": "summary",
      "items": [
        "type defines the expected data type.",
        "required: true means the field must be provided.",
        "unique: true creates a uniqueness constraint/index; duplicate values can cause a duplicate-key error.",
        "Schema validation helps keep application data consistent."
      ]
    },

    {
      "type": "heading",
      "text": "What is a Model?"
    },
    {
      "type": "paragraph",
      "text": "A model is created from a schema and is used to work with documents in MongoDB. We use the model to create, find, update and delete data."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const User = mongoose.model('User', userSchema);"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Schema\n  |\n  v\nModel\n  |\n  v\nMongoDB Collection\n  |\n  v\nDocuments"
    },

    {
      "type": "heading",
      "text": "Schema vs Model"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Schema\n-> Defines the structure and rules\n\nModel\n-> Used to work with the database\n\nDocument\n-> Actual stored data"
    },

    {
      "type": "heading",
      "text": "Create User Model"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "import mongoose from 'mongoose';\n\nconst userSchema = new mongoose.Schema(\n  {\n    name: {\n      type: String,\n      required: true\n    },\n\n    age: {\n      type: Number,\n      required: true\n    },\n\n    email: {\n      type: String,\n      required: true,\n      unique: true\n    }\n  },\n  {\n    timestamps: true\n  }\n);\n\nconst User = mongoose.model('User', userSchema);\n\nexport default User;"
    },
    {
      "type": "paragraph",
      "text": "mongoose.model('User', userSchema) creates the User model. Mongoose normally maps the model name to a pluralized collection name such as users."
    },

    {
      "type": "heading",
      "text": "Database, Collection, Model and Document Together"
    },
    {
      "type": "code",
      "language": "text",
      "text": "MongoDB Atlas\n     |\n     v\n  Cluster\n     |\n     v\n collegeDB          <- Database\n     |\n     v\n   users             <- Collection\n     |\n     v\n {                    <- Document\n   name: 'Rahul',\n   age: 21\n }\n\nUser Model            <- Mongoose Model\n"
    },

    {
      "type": "heading",
      "text": "Complete Basic Setup"
    },
    {
      "type": "code",
      "language": "text",
      "text": "backend/\n   |\n   +-- config/\n   |     +-- db.js\n   |\n   +-- models/\n   |     +-- User.js\n   |\n   +-- .env\n   +-- .gitignore\n   +-- server.js"
    },

    {
      "type": "heading",
      "text": "Create User — CRUD"
    },
    {
      "type": "paragraph",
      "text": "CRUD means Create, Read, Update and Delete. These are the four basic operations we perform on application data."
    },
    {
      "type": "code",
      "language": "text",
      "text": "C -> Create\nR -> Read\nU -> Update\nD -> Delete"
    },

    {
      "type": "heading",
      "text": "1. CREATE — Add Data"
    },
    {
      "type": "paragraph",
      "text": "If the frontend sends name, age and email in req.body, we can create a user with User.create(req.body)."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "import User from './models/User.js';\n\nserver.post('/users', async (req, res) => {\n  try {\n    const user = await User.create(req.body);\n\n    res.status(201).json({\n      success: true,\n      data: user\n    });\n  } catch (error) {\n    res.status(400).json({\n      success: false,\n      message: error.message\n    });\n  }\n});"
    },
    {
      "type": "paragraph",
      "text": "User.create(req.body) takes the data received from the frontend, validates it using the schema and saves a new document in MongoDB."
    },

    {
      "type": "heading",
      "text": "Frontend Data to MongoDB"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   | POST /users\n   | { name, age, email }\n   v\nExpress\n   |\n   v\nreq.body\n   |\n   v\nUser.create(req.body)\n   |\n   v\nSchema Validation\n   |\n   v\nMongoDB\n   |\n   v\nNew Document"
    },

    {
      "type": "heading",
      "text": "What if Data Does Not Match the Schema?"
    },
    {
      "type": "paragraph",
      "text": "If a required field is missing or the value cannot be converted to the expected type, Mongoose can throw a validation or casting error."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "// email is required\n{\n  name: 'Rahul',\n  age: 21\n}"
    },
    {
      "type": "paragraph",
      "text": "The create operation will fail because email is required."
    },

    {
      "type": "heading",
      "text": "2. READ — Get All Users"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.get('/users', async (req, res) => {\n  try {\n    const users = await User.find();\n\n    res.json({\n      success: true,\n      data: users\n    });\n  } catch (error) {\n    res.status(500).json({\n      success: false,\n      message: error.message\n    });\n  }\n});"
    },
    {
      "type": "paragraph",
      "text": "User.find() returns the users stored in the collection."
    },

    {
      "type": "heading",
      "text": "3. READ — Get One User"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.get('/users/:id', async (req, res) => {\n  try {\n    const user = await User.findById(req.params.id);\n\n    res.json({\n      success: true,\n      data: user\n    });\n  } catch (error) {\n    res.status(400).json({\n      success: false,\n      message: error.message\n    });\n  }\n});"
    },
    {
      "type": "paragraph",
      "text": "req.params.id gets the id from the URL. User.findById() searches for the matching document."
    },
    {
      "type": "code",
      "language": "text",
      "text": "GET /users/64abc123\n\nreq.params.id\n      |\n      v\n64abc123\n      |\n      v\nUser.findById()\n      |\n      v\nUser document"
    },

    {
      "type": "heading",
      "text": "4. UPDATE — Update a User"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.put('/users/:id', async (req, res) => {\n  try {\n    const user = await User.findByIdAndUpdate(\n      req.params.id,\n      req.body,\n      {\n        new: true,\n        runValidators: true\n      }\n    );\n\n    res.json({\n      success: true,\n      data: user\n    });\n  } catch (error) {\n    res.status(400).json({\n      success: false,\n      message: error.message\n    });\n  }\n});"
    },
    {
      "type": "paragraph",
      "text": "findByIdAndUpdate() finds a document by its id and updates it. new: true returns the updated document. runValidators: true makes update operations apply the schema validators."
    },

    {
      "type": "heading",
      "text": "5. DELETE — Delete a User"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.delete('/users/:id', async (req, res) => {\n  try {\n    const user = await User.findByIdAndDelete(req.params.id);\n\n    res.json({\n      success: true,\n      message: 'User deleted successfully'\n    });\n  } catch (error) {\n    res.status(400).json({\n      success: false,\n      message: error.message\n    });\n  }\n});"
    },
    {
      "type": "paragraph",
      "text": "findByIdAndDelete() finds a document using its id and removes it from the collection."
    },

    {
      "type": "heading",
      "text": "Complete CRUD Flow"
    },
    {
      "type": "code",
      "language": "text",
      "text": "CREATE\nPOST /users\n     |\n     v\nUser.create()\n\nREAD\nGET /users\n     |\n     v\nUser.find()\n\nREAD ONE\nGET /users/:id\n     |\n     v\nUser.findById()\n\nUPDATE\nPUT /users/:id\n     |\n     v\nUser.findByIdAndUpdate()\n\nDELETE\nDELETE /users/:id\n     |\n     v\nUser.findByIdAndDelete()"
    },

    {
      "type": "heading",
      "text": "Complete Small MongoDB + Express Example"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "import dotenv from 'dotenv';\ndotenv.config();\n\nimport express from 'express';\nimport cors from 'cors';\nimport mongoose from 'mongoose';\n\nconst server = express();\n\nserver.use(express.json());\nserver.use(cors());\n\n// MongoDB connection\nmongoose.connect(process.env.MONGOURL)\n  .then(() => console.log('MongoDB connected'))\n  .catch((error) => console.log('MongoDB error:', error.message));\n\n// Schema\nconst userSchema = new mongoose.Schema({\n  name: {\n    type: String,\n    required: true\n  },\n  age: {\n    type: Number,\n    required: true\n  },\n  email: {\n    type: String,\n    required: true,\n    unique: true\n  }\n});\n\n// Model\nconst User = mongoose.model('User', userSchema);\n\n// CREATE\nserver.post('/users', async (req, res) => {\n  try {\n    const user = await User.create(req.body);\n    res.status(201).json(user);\n  } catch (error) {\n    res.status(400).json({ message: error.message });\n  }\n});\n\n// READ ALL\nserver.get('/users', async (req, res) => {\n  try {\n    const users = await User.find();\n    res.json(users);\n  } catch (error) {\n    res.status(500).json({ message: error.message });\n  }\n});\n\n// READ ONE\nserver.get('/users/:id', async (req, res) => {\n  try {\n    const user = await User.findById(req.params.id);\n    res.json(user);\n  } catch (error) {\n    res.status(400).json({ message: error.message });\n  }\n});\n\n// UPDATE\nserver.put('/users/:id', async (req, res) => {\n  try {\n    const user = await User.findByIdAndUpdate(\n      req.params.id,\n      req.body,\n      { new: true, runValidators: true }\n    );\n\n    res.json(user);\n  } catch (error) {\n    res.status(400).json({ message: error.message });\n  }\n});\n\n// DELETE\nserver.delete('/users/:id', async (req, res) => {\n  try {\n    await User.findByIdAndDelete(req.params.id);\n    res.json({ message: 'User deleted successfully' });\n  } catch (error) {\n    res.status(400).json({ message: error.message });\n  }\n});\n\nserver.listen(1200, () => {\n  console.log('Server running on port 1200');\n});"
    },

    {
      "type": "heading",
      "text": "Recommended Real Project Structure"
    },
    {
      "type": "paragraph",
      "text": "The complete example above is useful for learning, but in a real Express project we normally separate database connection, models, routes and controllers."
    },
    {
      "type": "code",
      "language": "text",
      "text": "backend/\n   |\n   +-- config/\n   |     +-- db.js\n   |\n   +-- models/\n   |     +-- User.js\n   |\n   +-- routes/\n   |     +-- userRoutes.js\n   |\n   +-- controllers/\n   |     +-- userController.js\n   |\n   +-- middleware/\n   |     +-- errorMiddleware.js\n   |\n   +-- .env\n   +-- server.js"
    },

    {
      "type": "heading",
      "text": "MongoDB Connection in a Separate File"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "import mongoose from 'mongoose';\n\nconst connectDB = async () => {\n  try {\n    await mongoose.connect(process.env.MONGOURL);\n    console.log('MongoDB connected');\n  } catch (error) {\n    console.log('MongoDB connection failed:', error.message);\n    process.exit(1);\n  }\n};\n\nexport default connectDB;"
    },

    {
      "type": "heading",
      "text": "User Model in a Separate File"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "import mongoose from 'mongoose';\n\nconst userSchema = new mongoose.Schema(\n  {\n    name: {\n      type: String,\n      required: true\n    },\n    age: {\n      type: Number,\n      required: true\n    },\n    email: {\n      type: String,\n      required: true,\n      unique: true\n    }\n  },\n  {\n    timestamps: true\n  }\n);\n\nconst User = mongoose.model('User', userSchema);\n\nexport default User;"
    },

    {
      "type": "heading",
      "text": "Using the Model in Routes"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "import express from 'express';\nimport User from '../models/User.js';\n\nconst router = express.Router();\n\nrouter.post('/users', async (req, res) => {\n  try {\n    const user = await User.create(req.body);\n    res.status(201).json(user);\n  } catch (error) {\n    res.status(400).json({\n      message: error.message\n    });\n  }\n});\n\nexport default router;"
    },

    {
      "type": "heading",
      "text": "Using Router in server.js"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "import dotenv from 'dotenv';\ndotenv.config();\n\nimport express from 'express';\nimport cors from 'cors';\nimport connectDB from './config/db.js';\nimport userRoutes from './routes/userRoutes.js';\n\nconst server = express();\n\nserver.use(express.json());\nserver.use(cors());\n\nconnectDB();\n\nserver.use('/api', userRoutes);\n\nserver.listen(1200, () => {\n  console.log('Server running on port 1200');\n});"
    },
    {
      "type": "paragraph",
      "text": "If userRoutes contains POST /users and server.js mounts it with /api, the final endpoint becomes POST /api/users."
    },

    {
      "type": "heading",
      "text": "MongoDB CRUD Mental Model"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   | HTTP Request\n   v\nExpress Route\n   |\n   v\nMongoose Model\n   |\n   v\nMongoDB\n   |\n   v\nCollection\n   |\n   v\nDocument"
    },

    {
      "type": "heading",
      "text": "Important Mongoose Methods"
    },
    {
      "type": "summary",
      "items": [
        "Model.create(data) — Create a new document.",
        "Model.find() — Get multiple documents.",
        "Model.findById(id) — Get one document by id.",
        "Model.findOne(filter) — Get one document matching a condition.",
        "Model.findByIdAndUpdate(id, data, options) — Update one document by id.",
        "Model.findByIdAndDelete(id) — Delete one document by id."
      ]
    },

    {
      "type": "heading",
      "text": "req.body vs req.params"
    },
    {
      "type": "paragraph",
      "text": "req.body is commonly used for data sent inside POST, PUT or PATCH requests. req.params is used for values included in the URL."
    },
    {
      "type": "code",
      "language": "text",
      "text": "POST /users\nBody:\n{\n  name: 'Rahul',\n  age: 21\n}\n\nreq.body\n   |\n   v\n{ name, age }\n\n\nGET /users/123\n\nreq.params.id\n   |\n   v\n123"
    },

    {
      "type": "heading",
      "text": "Why express.json() is Important"
    },
    {
      "type": "paragraph",
      "text": "When the frontend sends JSON data, express.json() parses the JSON body and makes it available as req.body."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "server.use(express.json());\n\nserver.post('/users', (req, res) => {\n  console.log(req.body);\n  res.json(req.body);\n});"
    },

    {
      "type": "heading",
      "text": "MongoDB Automatically Creates _id"
    },
    {
      "type": "paragraph",
      "text": "When a document is created, MongoDB normally gives it a unique _id. This id is useful when reading, updating or deleting a particular document."
    },
    {
      "type": "code",
      "language": "json",
      "text": "{\n  \"_id\": \"66abc123...\",\n  \"name\": \"Rahul\",\n  \"age\": 21,\n  \"email\": \"rahul@gmail.com\"\n}"
    },

    {
      "type": "heading",
      "text": "Complete CRUD Example with API Endpoints"
    },
    {
      "type": "code",
      "language": "text",
      "text": "CREATE\nPOST /api/users\n\nREAD ALL\nGET /api/users\n\nREAD ONE\nGET /api/users/:id\n\nUPDATE\nPUT /api/users/:id\n\nDELETE\nDELETE /api/users/:id"
    },

    {
      "type": "heading",
      "text": "Simple Postman Testing"
    },
    {
      "type": "code",
      "language": "text",
      "text": "CREATE\nPOST http://localhost:1200/api/users\n\nBody -> JSON\n{\n  \"name\": \"Rahul\",\n  \"age\": 21,\n  \"email\": \"rahul@gmail.com\"\n}\n\n\nREAD\nGET http://localhost:1200/api/users\n\n\nREAD ONE\nGET http://localhost:1200/api/users/USER_ID\n\n\nUPDATE\nPUT http://localhost:1200/api/users/USER_ID\n\nBody -> JSON\n{\n  \"age\": 22\n}\n\n\nDELETE\nDELETE http://localhost:1200/api/users/USER_ID"
    },

    {
      "type": "heading",
      "text": "What Happens During Create?"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend sends JSON\n        |\n        v\nexpress.json()\n        |\n        v\nreq.body\n        |\n        v\nUser.create(req.body)\n        |\n        v\nMongoose checks Schema\n        |\n        +---- Invalid -> Error\n        |\n        v\nMongoDB saves document\n        |\n        v\nResponse sent to frontend"
    },

    {
      "type": "heading",
      "text": "What Happens During Read?"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   | GET /api/users\n   v\nExpress\n   |\n   v\nUser.find()\n   |\n   v\nMongoDB\n   |\n   v\nUsers collection\n   |\n   v\nArray of documents\n   |\n   v\nFrontend"
    },

    {
      "type": "heading",
      "text": "What Happens During Update?"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   | PUT /api/users/:id\n   | { age: 22 }\n   v\nreq.params.id + req.body\n   |\n   v\nUser.findByIdAndUpdate()\n   |\n   v\nMongoDB\n   |\n   v\nUpdated document"
    },

    {
      "type": "heading",
      "text": "What Happens During Delete?"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   | DELETE /api/users/:id\n   v\nreq.params.id\n   |\n   v\nUser.findByIdAndDelete()\n   |\n   v\nMongoDB\n   |\n   v\nDocument removed"
    },

    {
      "type": "heading",
      "text": "Common Beginner Mistakes"
    },
    {
      "type": "summary",
      "items": [
        "Forgetting dotenv.config() before reading environment variables.",
        "Using MONGOURL in code but MONGO_URI in .env.",
        "Putting .env in the wrong folder.",
        "Accidentally naming the file .env.txt on Windows.",
        "Forgetting express.json().",
        "Using the wrong MongoDB connection string.",
        "Using the Atlas account password instead of the database user password.",
        "Forgetting to allow the current IP in Atlas.",
        "Forgetting to connect to MongoDB before using the database.",
        "Forgetting to import the model.",
        "Using the wrong document id for update or delete.",
        "Sending invalid data that does not satisfy the schema."
      ]
    },

    {
      "type": "heading",
      "text": "MongoDB Atlas Security Basics"
    },
    {
      "type": "paragraph",
      "text": "MongoDB Atlas uses database users for authentication and an IP access list for network access. These are different things."
    },
    {
      "type": "code",
      "language": "text",
      "text": "Database User\n   |\n   | Username + Password\n   v\nWho are you?\n\nIP Access List\n   |\n   | Allowed IP\n   v\nAre you allowed to connect from this network?"
    },
    {
      "type": "paragraph",
      "text": "The database user password is not the same thing as the Atlas account password. Atlas does not show the old database-user password; if it is forgotten, it must be reset."
    },

    {
      "type": "heading",
      "text": "Do We Need to Install MongoDB Locally?"
    },
    {
      "type": "paragraph",
      "text": "If you are using MongoDB Atlas, you do not need to install and run the MongoDB server locally just to connect your Express application to Atlas."
    },
    {
      "type": "code",
      "language": "text",
      "text": "Using Atlas\n\nExpress\n   |\n   | Internet\n   v\nMongoDB Atlas\n\n\nUsing Local MongoDB\n\nExpress\n   |\n   v\nlocalhost:27017\n   |\n   v\nLocal MongoDB"
    },

    {
      "type": "heading",
      "text": "MongoDB Compass"
    },
    {
      "type": "paragraph",
      "text": "MongoDB Compass is a graphical application used to view and manage MongoDB data. It is optional. Your Express application can connect directly to MongoDB Atlas using Mongoose without Compass."
    },
    {
      "type": "code",
      "language": "text",
      "text": "MongoDB Atlas\n      |\n      +---- Express + Mongoose\n      |\n      +---- MongoDB Compass"
    },

    {
      "type": "heading",
      "text": "One-Line Mental Model"
    },
    {
      "type": "code",
      "language": "text",
      "text": "MongoDB       -> Database technology\nAtlas         -> Cloud platform\nCluster       -> MongoDB deployment\nDatabase      -> Stores collections\nCollection    -> Stores documents\nDocument      -> Actual data\nMongoose      -> Node.js MongoDB library\nSchema        -> Data structure + rules\nModel         -> Used to work with documents\n.env          -> Stores configuration/secrets\nCRUD          -> Create, Read, Update, Delete"
    },

    {
      "type": "heading",
      "text": "Complete MongoDB Learning Flow"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Express Basics\n      |\n      v\n.env\n      |\n      v\nMongoDB Basics\n      |\n      v\nSQL vs NoSQL\n      |\n      v\nMongoDB Atlas\n      |\n      v\nCluster\n      |\n      v\nDatabase User\n      |\n      v\nIP Access\n      |\n      v\nConnection String\n      |\n      v\nMongoose\n      |\n      v\nSchema\n      |\n      v\nModel\n      |\n      v\nCreate\n      |\n      v\nRead\n      |\n      v\nUpdate\n      |\n      v\nDelete"
    },

    {
      "type": "heading",
      "text": "Quick Revision"
    },
    {
      "type": "summary",
      "items": [
        "MongoDB is a NoSQL document database.",
        "MongoDB stores documents inside collections.",
        "A collection is conceptually similar to a table in SQL.",
        "A document is conceptually similar to a row in SQL.",
        "MongoDB Atlas provides MongoDB in the cloud.",
        "A cluster is the MongoDB deployment your application connects to.",
        ".env is used to store environment variables such as the MongoDB connection string.",
        "process.env reads environment variables in Node.js.",
        "Mongoose is used to connect and work with MongoDB from Node.js.",
        "A schema defines the structure and validation rules.",
        "A model is created from a schema and is used for database operations.",
        "User.create(req.body) creates a document.",
        "User.find() gets documents.",
        "User.findById(id) gets one document.",
        "User.findByIdAndUpdate(id, data, options) updates a document.",
        "User.findByIdAndDelete(id) deletes a document.",
        "express.json() makes JSON request data available through req.body.",
        "req.params is used for values from the URL such as /users/:id.",
        "MongoDB automatically creates an _id for normal documents.",
        "Always keep database credentials out of source code and do not commit .env."
      ]
    },

    {
      "type": "heading",
      "text": "Final Mental Model"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Frontend\n   |\n   | HTTP Request\n   v\nExpress\n   |\n   | Route\n   v\nMongoose Model\n   |\n   | Schema Rules\n   v\nMongoDB Atlas\n   |\n   v\nCluster\n   |\n   v\nDatabase\n   |\n   v\nCollection\n   |\n   v\nDocument\n\nCRUD:\nCreate -> Add data\nRead   -> Get data\nUpdate -> Change data\nDelete -> Remove data"
    }
  ]
},

{
  "id": 41,
"slug": "mongoose-schema-options-complete-notes",
  "title": "Mongoose Schema Options — Complete Beginner Notes",
  "date": "22 August 2026",
  "description": "Learn the most commonly used Mongoose Schema options with practical examples, including type, required, default, unique, timestamps, enum, ref, trim, min/max, minlength/maxlength, select and index.",
  "content": [
{
  "type": "heading",
  "text": "Mongoose Schema — Common Options"
},
{
  "type": "paragraph",
  "text": "A Mongoose Schema defines the structure, data types and validation rules of MongoDB documents. The following options are the most commonly used in real-world Express applications."
},
{
  "type": "summary",
  "items": [
    "type — Defines what kind of data the field stores. Use it for String, Number, Boolean, Date, Array, ObjectId, etc.",
    "required — Makes a field mandatory. Use it when the application must have a value for that field.",
    "default — Provides a value automatically when the user does not provide one.",
    "unique — Creates a unique index so duplicate values are not allowed. Commonly used for email or username.",
    "timestamps — Automatically adds and maintains createdAt and updatedAt fields.",
    "enum — Restricts a field to a fixed list of allowed values. Useful for role, status, category, etc.",
    "ref — Creates a reference to another Mongoose model using ObjectId. Mainly used for relationships and populate().",
    "trim — Removes unnecessary spaces from the beginning and end of a String.",
    "min/max — Sets minimum and maximum limits for Number values.",
    "minlength/maxlength — Sets minimum and maximum length limits for String values.",
    "select — Controls whether a field is returned by default in queries. Useful for sensitive fields such as passwords.",
    "index — Creates an index to make frequently used queries faster. Use it on fields that are commonly searched, filtered or sorted."
  ]
},
{
  "type": "heading",
  "text": "1. type"
},
{
  "type": "paragraph",
  "text": "type defines the data type of a field. It is the basic and most important Schema option. Use String for text, Number for numeric values, Boolean for true/false, Date for dates and ObjectId for references."
},
{
  "type": "code",
  "language": "javascript",
  "text": "name: {\n  type: String\n},\n\nage: {\n  type: Number\n},\n\nisActive: {\n  type: Boolean\n}"
},
{
  "type": "heading",
  "text": "2. required"
},
{
  "type": "paragraph",
  "text": "required makes a field mandatory. Use it when the application cannot properly work without that value, such as name, email or password."
},
{
  "type": "code",
  "language": "javascript",
  "text": "email: {\n  type: String,\n  required: true\n}"
},
{
  "type": "paragraph",
  "text": "If email is missing during validation, Mongoose will return a validation error."
},
{
  "type": "heading",
  "text": "3. default"
},
{
  "type": "paragraph",
  "text": "default automatically assigns a value when the field is not provided. It is commonly used for status, role, boolean flags and dates."
},
{
  "type": "code",
  "language": "javascript",
  "text": "role: {\n  type: String,\n  default: \"user\"\n},\n\nisActive: {\n  type: Boolean,\n  default: true\n}"
},
{
  "type": "heading",
  "text": "4. unique"
},
{
  "type": "paragraph",
  "text": "unique is commonly used when a value must not be duplicated, such as email or username. In Mongoose, unique is mainly used to create a MongoDB unique index; it is not a normal validation rule."
},
{
  "type": "code",
  "language": "javascript",
  "text": "email: {\n  type: String,\n  required: true,\n  unique: true\n}"
},
{
  "type": "heading",
  "text": "5. timestamps"
},
{
  "type": "paragraph",
  "text": "timestamps automatically adds createdAt and updatedAt to documents. It is highly useful in almost every CRUD application because it keeps track of when a document was created and last updated."
},
{
  "type": "code",
  "language": "javascript",
  "text": "const userSchema = new mongoose.Schema({\n  name: String\n}, {\n  timestamps: true\n});"
},
{
  "type": "heading",
  "text": "6. enum"
},
{
  "type": "paragraph",
  "text": "enum restricts a field to specific allowed values. Use it when a field has a fixed set of choices, such as user roles, order status or account status."
},
{
  "type": "code",
  "language": "javascript",
  "text": "role: {\n  type: String,\n  enum: [\"user\", \"admin\"],\n  default: \"user\"\n}"
},

{
  "type": "code",
  "language": "javascript",
  "text": "author: {\n  type: mongoose.Schema.Types.ObjectId,\n  ref: \"User\"\n}"
},
{
  "type": "paragraph",
  "text": "The referenced User can later be loaded with populate(\"author\")."
},
{
  "type": "heading",
  "text": "7. trim"
},
{
  "type": "paragraph",
  "text": "trim removes unnecessary spaces from the beginning and end of a String. It is useful for names, emails, usernames and other text fields."
},
{
  "type": "code",
  "language": "javascript",
  "text": "name: {\n  type: String,\n  trim: true\n}"
},
{
  "type": "heading",
  "text": "8. min / max"
},
{
  "type": "paragraph",
  "text": "min and max validate Number fields. Use them when a numeric value must stay within a specific range, such as age, quantity or rating."
},
{
  "type": "code",
  "language": "javascript",
  "text": "age: {\n  type: Number,\n  min: 18,\n  max: 100\n}"
},
{
  "type": "heading",
  "text": "9. minlength / maxlength"
},
{
  "type": "paragraph",
  "text": "minlength and maxlength validate the length of String values. They are useful for passwords, usernames, titles and other fields with length restrictions."
},
{
  "type": "code",
  "language": "javascript",
  "text": "username: {\n  type: String,\n  minlength: 3,\n  maxlength: 20\n}"
},



{
  "type": "heading",
  "text": "Most Common Schema Options — Quick Revision"
},
{
  "type": "summary",
  "items": [
    "type — Defines the field's data type. ⭐⭐⭐⭐⭐",
    "required — Makes the field mandatory. ⭐⭐⭐⭐⭐",
    "default — Gives the field a default value. ⭐⭐⭐⭐⭐",
    "unique — Prevents duplicate indexed values. ⭐⭐⭐⭐",
    "timestamps — Adds createdAt and updatedAt automatically. ⭐⭐⭐⭐⭐",
    "enum — Allows only predefined values. ⭐⭐⭐⭐",
    "trim — Removes extra spaces from Strings. ⭐⭐⭐⭐",
    "min/max — Validates Number ranges. ⭐⭐⭐",
    "minlength/maxlength — Validates String length. ⭐⭐⭐",
  
  ]
}
  
]
},

{
  "id": 42,
  "slug": "bcrypt-password-hashing-and-express-validation-complete-beginner-notes",
  "title": "Bcrypt Password Hashing & Express Validation — Complete Beginner Notes",
  "date": "22 August 2026",
  "description": "Simple beginner notes for understanding password hashing with bcrypt and request validation in Express using express-validator.",
  "content": [
    {
      "type": "heading",
      "text": "1. Password Hashing — What Is It?"
    },
    {
      "type": "paragraph",
      "text": "Password hashing means converting a user's plain password into a secure hashed value before saving it in the database. We should never store the original password directly in the database."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const password = \"hello123\";\n\nconst hashedPassword = await bcrypt.hash(password, 10);"
    },
    {
      "type": "paragraph",
      "text": "The original password is hello123, but the database stores a bcrypt hash instead. A hash is not meant to be converted back into the original password."
    },
    {
      "type": "summary",
      "items": [
        "User enters a normal password.",
        "bcrypt.hash() converts it into a hash.",
        "Only the hash is saved in the database.",
        "During login, bcrypt.compare() checks the entered password against the stored hash.",
        "The original password should never be stored."
      ]
    },
    {
      "type": "heading",
      "text": "2. Install and Import Bcrypt"
    },
    {
      "type": "code",
      "language": "bash",
      "text": "npm install bcrypt"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const bcrypt = require(\"bcrypt\");"
    },
    {
      "type": "heading",
      "text": "3. bcrypt.hash()"
    },
    {
      "type": "paragraph",
      "text": "bcrypt.hash() takes the user's plain password and creates a secure hash. The second argument is the salt count, also commonly called salt rounds."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const hashedPassword = await bcrypt.hash(\"hello123\", 10);"
    },
    {
      "type": "heading",
      "text": "4. What Is Salt Count?"
    },
    {
      "type": "paragraph",
      "text": "Salt rounds tell bcrypt how much computational work should be used to create the hash. A higher number makes hashing more expensive and generally harder to brute-force, but it also takes more CPU time."
    },
    {
      "type": "paragraph",
      "text": "10 is a commonly used starting value. The exact value should be chosen according to your application's security requirements and server performance."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const hashedPassword = await bcrypt.hash(password, 10);"
    },
    {
      "type": "paragraph",
      "text": "You do not manually create or store a salt when using bcrypt.hash(). bcrypt handles the salt as part of the hashing process and includes the required information in the resulting hash."
    },
    {
      "type": "heading",
      "text": "5. Register — Hash Password Before Saving"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const { name, email, password } = req.body.data;\n\nconst hashedPassword = await bcrypt.hash(password, 10);\n\nconst user = await usermodel.create({\n  name,\n  email,\n  password: hashedPassword\n});"
    },
    {
      "type": "paragraph",
      "text": "The important point is that password: password should not be saved. Instead, password: hashedPassword should be saved."
    },
    {
      "type": "heading",
      "text": "6. Login — bcrypt.compare()"
    },
    {
      "type": "paragraph",
      "text": "During login, the user enters the normal password again. We do not hash it manually and compare two hashes using ===. Instead, bcrypt.compare() checks the entered password against the stored bcrypt hash."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const isMatch = await bcrypt.compare(password, user.password);\n\nif (isMatch) {\n  console.log(\"Login successful\");\n} else {\n  console.log(\"Wrong password\");\n}"
    },
    {
      "type": "summary",
      "items": [
        "Register: bcrypt.hash(password, 10)",
        "Save the generated hash in the database.",
        "Login: bcrypt.compare(enteredPassword, storedHash)",
        "compare() returns true when the password matches and false when it does not."
      ]
    },
    {
      "type": "heading",
      "text": "7. Password Flow"
    },
    {
      "type": "code",
      "language": "text",
      "text": "REGISTER\n\nPlain password\n      ↓\nbcrypt.hash(password, 10)\n      ↓\nHashed password\n      ↓\nDatabase\n\n\nLOGIN\n\nUser enters password\n      ↓\nbcrypt.compare(password, databaseHash)\n      ↓\ntrue / false"
    },
    {
      "type": "heading",
      "text": "8. Express Validation — What Is It?"
    },
    {
      "type": "paragraph",
      "text": "Validation means checking whether data received from the client is correct and follows the rules required by the backend. For example, checking that name is not empty, email is valid and password has at least 8 characters."
    },
    {
      "type": "paragraph",
      "text": "A commonly used package for Express validation is express-validator."
    },
    {
      "type": "code",
      "language": "bash",
      "text": "npm install express-validator"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const { body, validationResult } = require(\"express-validator\");"
    },
    {
      "type": "heading",
      "text": "9. body()"
    },
    {
      "type": "paragraph",
      "text": "body() is used to validate a field inside req.body. If the request body directly contains name, email and password, use body(\"name\"), body(\"email\") and body(\"password\")."
    },
    {
      "type": "code",
      "language": "json",
      "text": "{\n  \"name\": \"Rahul\",\n  \"email\": \"rahul@gmail.com\",\n  \"password\": \"hello123\"\n}"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "body(\"name\")\nbody(\"email\")\nbody(\"password\")"
    },
    {
      "type": "heading",
      "text": "10. Nested Body Validation"
    },
    {
      "type": "paragraph",
      "text": "If the request data is inside req.body.data, use dot notation in body()."
    },
    {
      "type": "code",
      "language": "json",
      "text": "{\n  \"data\": {\n    \"name\": \"Rahul\",\n    \"email\": \"rahul@gmail.com\",\n    \"password\": \"hello123\"\n  }\n}"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "body(\"data.name\")\nbody(\"data.email\")\nbody(\"data.password\")"
    },
    {
      "type": "paragraph",
      "text": "This matches req.body.data.name, req.body.data.email and req.body.data.password."
    },
    {
      "type": "heading",
      "text": "11. notEmpty()"
    },
    {
      "type": "paragraph",
      "text": "notEmpty() checks that a field is not empty. It is commonly used for required input fields."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "body(\"data.name\")\n  .notEmpty()\n  .withMessage(\"Name is required\")"
    },
    {
      "type": "paragraph",
      "text": "If name is an empty string, the validation fails."
    },
    {
      "type": "heading",
      "text": "12. trim()"
    },
    {
      "type": "paragraph",
      "text": "trim() removes unnecessary whitespace from the beginning and end of a string."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "body(\"data.name\")\n  .trim()\n  .notEmpty()\n  .withMessage(\"Name is required\")"
    },
    {
      "type": "heading",
      "text": "13. isEmail()"
    },
    {
      "type": "paragraph",
      "text": "isEmail() checks whether the value looks like a valid email address."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "body(\"data.email\")\n  .isEmail()\n  .withMessage(\"Please enter a valid email\")"
    },
    {
      "type": "heading",
      "text": "14. isLength()"
    },
    {
      "type": "paragraph",
      "text": "isLength() checks the length of a string. It is commonly used for passwords, usernames and names."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "body(\"data.password\")\n  .isLength({ min: 8, max: 30 })\n  .withMessage(\"Password must be between 8 and 30 characters\")"
    },

 
    {
      "type": "heading",
      "text": "20. withMessage()"
    },
    {
      "type": "paragraph",
      "text": "withMessage() defines the error message that should be returned when the previous validation fails."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "body(\"data.email\")\n  .notEmpty()\n  .withMessage(\"Email is required\")\n  .isEmail()\n  .withMessage(\"Invalid email\")"
    },
    {
      "type": "heading",
      "text": "21. validationResult(req)"
    },
    {
      "type": "paragraph",
      "text": "After all validation rules run, validationResult(req) collects the validation errors from the current request."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const errors = validationResult(req);"
    },
    {
      "type": "heading",
      "text": "22. errors.isEmpty()"
    },
    {
      "type": "paragraph",
      "text": "isEmpty() checks whether there are any validation errors. If it returns true, there are no validation errors. If it returns false, one or more validations failed."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "if (!errors.isEmpty()) {\n  return res.status(400).json({\n    success: false,\n    errors: errors.array()\n  });\n}"
    },
    {
      "type": "heading",
      "text": "23. errors.array()"
    },
    {
      "type": "paragraph",
      "text": "errors.array() converts the collected validation errors into an array of error objects. This makes the errors easy to send in a JSON response."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "return res.status(400).json({\n  success: false,\n  errors: errors.array()\n});"
    },
    {
      "type": "heading",
      "text": "24. Complete Validation Example"
    },
    {
      "type": "paragraph",
      "text": "This example validates a registration request where name, email and password are inside req.body.data."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "const { body, validationResult } = require(\"express-validator\");\n\nconst registerValidation = [\n  body(\"data.name\")\n    .trim()\n    .notEmpty()\n    .withMessage(\"Name is required\")\n    .isLength({ min: 3, max: 50 })\n    .withMessage(\"Name must be between 3 and 50 characters\"),\n\n  body(\"data.email\")\n    .trim()\n    .notEmpty()\n    .withMessage(\"Email is required\")\n    .isEmail()\n    .withMessage(\"Invalid email\"),\n\n  body(\"data.password\")\n    .notEmpty()\n    .withMessage(\"Password is required\")\n    .isLength({ min: 8 })\n    .withMessage(\"Password must be at least 8 characters\")\n];\n\napp.post(\"/register\", registerValidation, async (req, res) => {\n  const errors = validationResult(req);\n\n  if (!errors.isEmpty()) {\n    return res.status(400).json({\n      success: false,\n      errors: errors.array()\n    });\n  }\n\n  const { name, email, password } = req.body.data;\n\n  const hashedPassword = await bcrypt.hash(password, 10);\n\n  const user = await usermodel.create({\n    name,\n    email,\n    password: hashedPassword\n  });\n\n  res.status(201).json({\n    success: true,\n    message: \"User registered successfully\",\n    user\n  });\n});"
    },
    {
      "type": "heading",
      "text": "25. Complete Request Flow"
    },
    {
      "type": "code",
      "language": "text",
      "text": "Client sends request\n        ↓\nExpress receives req.body\n        ↓\nValidation rules run\n        ↓\nvalidationResult(req)\n        ↓\nAre there errors?\n   ↙             ↘\n YES              NO\n  ↓                ↓\nerrors.array()   Continue\n  ↓                ↓\n400 response     Get req.body.data\n                   ↓\n             bcrypt.hash(password, 10)\n                   ↓\n              Save user in DB"
    },
    {
      "type": "heading",
      "text": "26. Important Validators — Quick Revision"
    },
    {
      "type": "summary",
      "items": [
        "body(\"data.name\") — validates a field inside req.body.data.",
        "notEmpty() — value should not be empty.",
        "trim() — removes surrounding spaces.",
        "isEmail() — checks email format.",
        "isLength() — checks string length.",
        "isInt() — checks integer values.",
        "isNumeric() — checks numeric values.",
        "withMessage() — custom validation error message.",
        "validationResult(req) — collects validation errors.",
        "errors.isEmpty() — checks whether there are no errors.",
        "errors.array() — returns the validation errors as an array."
      ]
    },
    {
      "type": "heading",
      "text": "27. Most Important Beginner Rule"
    },
    {
      "type": "paragraph",
      "text": "Validation checks whether the incoming data is acceptable. bcrypt protects the password before it is stored. They solve different problems: validation checks the input, while hashing protects the password."
    }
  ]
}

];
