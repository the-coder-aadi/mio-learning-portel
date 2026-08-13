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
      "text": "Frontend\n   |\n   | POST + URL + Headers + JSON Body\n   v\nExpress Route\n   |\n   | express.json()\n   v\nreq.body\n   |\n   | Process\n   v\nres.json()\n   |\n   v\nFrontend"
    }
  ]
}
];
