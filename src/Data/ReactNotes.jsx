export const ReactNotes = [
{
  "id": 1,
  "slug": "react-js-beginner-guide",
  "title": "React.js Complete Beginner Guide",
  "date": "20 July 2026",

  "description": "Learn React.js from scratch. Understand what React is, why we use it over Vanilla JS, Real DOM vs Virtual DOM, (SPA), DOM updating, and how to set up your first React project with easy explanations and examples.",

  "content": [
    {
      "type": "heading",
      "text": "1. What is React?"
    },
    {
      "type": "paragraph",
      "text": "React is a free, open-source JavaScript library created by Meta (Facebook) for building user interfaces (UI), especially for single-page applications. Instead of writing massive HTML and JavaScript files, React allows us to break the UI into small, reusable pieces called Components."
    },
    {
      "type": "summary",
      "items": [
        "React is a JavaScript library for building UI.",
        "Created and maintained by Meta (Facebook).",
        "Uses a Component-based architecture."
      ]
    },

    {
      "type": "heading",
      "text": "2. Why Use React over Plain JavaScript (Vanilla JS)?"
    },
    {
      "type": "paragraph",
      "text": "When building large applications with plain JavaScript, managing DOM manipulation, state, and complex UI logic becomes hard to maintain and slow. React handles data updates efficiently, simplifies state management, and makes code clean and reusable."
    },
    {
      "type": "summary",
      "items": [
        "Plain JS becomes messy in big applications.",
        "React code is modular and reusable.",
        "React automatically syncs UI when data changes."
      ]
    },

    {
      "type": "heading",
      "text": "3. What is Single Page Application (SPA)?"
    },
    {
      "type": "paragraph",
      "text": "In traditional multi-page websites, whenever you click a link, the browser requests a completely new HTML page from the server, causing full page reloads. A Single Page Application (SPA) loads a single HTML document once. When you navigate around, JavaScript updates only the specific part of the page dynamically without refreshing."
    },
    {
      "type": "summary",
      "items": [
        "SPA loads only one HTML file initially.",
        "No full page reload when switching routes or updating UI.",
        "Provides a fast, app-like desktop/mobile user experience."
      ]
    },

    {
      "type": "heading",
      "text": "4. How Data Updates: Vanilla JS vs React"
    },
    {
      "type": "paragraph",
      "text": "In plain JavaScript, updating UI often requires targeting DOM nodes manually. If complex state changes, developers frequently recreate entire sections or innerHTML, which forces the browser to recalculate layouts and repaint elements, dropping performance."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "// Vanilla JS: Manual DOM selection & complete element re-render\nconst container = document.getElementById('user-profile');\ncontainer.innerHTML = `<h1>Name: ${user.name}</h1><p>Age: ${user.age}</p>`;"
    },
    {
      "type": "paragraph",
      "text": "In React, you don't touch the DOM manually. You update the State, and React automatically updates ONLY the exact HTML element that changed, leaving everything else untouched."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "// React JS: State update triggers exact element re-render automatically\nconst [age, setAge] = useState(20);\n\n// Only the age span updates in DOM when setAge is called\nreturn <h1>Age: <span>{age}</span></h1>;"
    },

    {
      "type": "heading",
      "text": "5. Real DOM vs Virtual DOM"
    },
    {
      "type": "paragraph",
      "text": "The Real DOM (Document Object Model) is the structural tree representation of HTML rendered by the browser. Modifying it is computationally slow. Virtual DOM is a lightweight, in-memory copy of the Real DOM managed entirely by React."
    },
    {
      "type": "paragraph",
      "text": "When data changes in React, a new Virtual DOM tree is created. React compares it with the previous Virtual DOM tree (a process called 'Diffing') and updates only the modified nodes in the Real DOM (a process called 'Reconciliation')."
    },
    {
      "type": "code",
      "language": "text",
      "text": "State Changes -> New Virtual DOM -> Diffing Algorithm -> Selective Real DOM Update"
    },
    {
      "type": "summary",
      "items": [
        "Real DOM manipulation is slow.",
        "Virtual DOM is an in-memory JS representation.",
        "Diffing compares old vs new Virtual DOM.",
        "Reconciliation updates only what actually changed in Real DOM."
      ]
    },

    {
      "type": "heading",
      "text": "6. Setting Up and Installing React"
    },
    {
      "type": "paragraph",
      "text": "Modern React applications are created using build tools like Vite for fast development and bundling."
    },
    {
      "type": "paragraph",
      "text": "Step 1: Open terminal and run the Vite creation command."
    },
    {
      "type": "code",
      "language": "bash",
      "text": "npm create vite@latest"
    },
    {
      "type": "paragraph",
      "text": "Step 2: Navigate into your project folder."
    },
    {
      "type": "code",
      "language": "bash",
      "text": "cd my-react-app"
    },
    {
      "type": "paragraph",
      "text": "Step 3: Install all required project dependencies."
    },
    {
      "type": "code",
      "language": "bash",
      "text": "npm install"
    },
    {
      "type": "paragraph",
      "text": "Step 4: Start the local development server."
    },
    {
      "type": "code",
      "language": "bash",
      "text": "npm run dev"
    },
    {
      "type": "summary",
      "items": [
        "Vite is recommended for creating React apps quickly.",
        "npm install installs necessary libraries.",
        "npm run dev starts local server for building."
      ]
    },

    {
      "type": "heading",
      "text": "7. Final Summary"
    },
    {
      "type": "summary",
      "items": [
        "React is a component-based UI library by Meta.",
        "Prevents spaghetti code and manual DOM manipulations in large applications.",
        "Enables Single Page Applications (SPA) without full page reloads.",
        "Virtual DOM uses Diffing and Reconciliation to update only changed elements.",
        "Set up easily via Vite using npm commands."
      ]
    },

     {
    "type": "heading",
    "text": "8. What are Components?"
  },
  {
    "type": "paragraph",
    "text": "Components are the building blocks of a React application. Instead of writing one large HTML file, React allows us to divide the user interface into small, reusable pieces called Components. Each component is responsible for displaying a specific part of the UI and can be reused multiple times."
  },
  {
    "type": "paragraph",
    "text": "For example, an e-commerce website may have a Navbar, Product Card, Footer and Sidebar. Instead of writing all the code in one file, we create separate components for each section. This makes the code cleaner, easier to understand and easier to maintain."
  },
  {
    "type": "code",
    "language": "jsx",
    "text": "function Welcome() {\n  return <h1>Welcome to React</h1>;\n}\n\nexport default Welcome;"
  },
  {
    "type": "paragraph",
    "text": "The Welcome component returns a heading. It can be used anywhere in the application."
  },
  {
    "type": "code",
    "language": "jsx",
    "text": "import Welcome from './Welcome';\n\nfunction App() {\n  return (\n    <div>\n      <Welcome />\n      <Welcome />\n    </div>\n  );\n}"
  },
  {
    "type": "summary",
    "items": [
      "Components are reusable pieces of UI.",
      "They make code organized and easy to maintain.",
      "A component can be used multiple times."
    ]
  },

  {
    "type": "heading",
    "text": "9. React Project Folder Structure"
  },
  {
    "type": "paragraph",
    "text": "When we create a React project using Vite, several files and folders are automatically generated. Each file has a specific purpose. Understanding the folder structure helps us know where to write our code."
  },
  {
    "type": "code",
    "language": "text",
    "text": "my-react-app/\n│\n├── node_modules/\n├── public/\n├── src/\n│   ├── assets/\n│   ├── App.jsx\n│   └── main.jsx\n│\n├── package.json\n├── vite.config.js\n└── index.html"
  },
  {
    "type": "paragraph",
    "text": "Most of your React code will be written inside the src folder."
  },

  {
    "type": "heading",
    "text": "10. main.jsx"
  },
  {
    "type": "paragraph",
    "text": "main.jsx is the entry point of a React application. It is the first JavaScript file that runs when the application starts. It loads the App component and renders it inside the root element of index.html."
  },
  {
    "type": "code",
    "language": "jsx",
    "text": "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App.jsx';\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <App />\n);"
  },
  {
    "type": "summary",
    "items": [
      "main.jsx is the starting point of the React application.",
      "It renders the App component.",
      "It connects React with index.html."
    ]
  },

  {
    "type": "heading",
    "text": "11. App.jsx"
  },
  {
    "type": "paragraph",
    "text": "App.jsx is the main component of a React application. Usually, all other components are imported and displayed inside this file. It acts as the parent component of the application."
  },
  {
    "type": "code",
    "language": "jsx",
    "text": "function App() {\n  return (\n    <div>\n      <h1>Hello React</h1>\n    </div>\n  );\n}\n\nexport default App;"
  },
  {
    "type": "summary",
    "items": [
      "App.jsx is the main component.",
      "Other components are usually rendered inside App.jsx."
    ]
  },

  {
    "type": "heading",
    "text": "12. React Fragments"
  },
  {
    "type": "paragraph",
    "text": "A React component must return only one parent element. If we don't want to add an extra HTML element like a div, we can use React Fragments. Fragments group multiple elements together without creating an additional element in the browser."
  },
  {
    "type": "code",
    "language": "jsx",
    "text": "function App() {\n  return (\n    <>\n      <h1>React</h1>\n      <p>Learning Fragments</p>\n    </>\n  );\n}"
  },
  {
    "type": "paragraph",
    "text": "The empty angle brackets (<> </>) are called Fragment shorthand. They do not appear in the browser's HTML."
  },
  {
    "type": "summary",
    "items": [
      "Fragments group multiple elements.",
      "They do not create extra HTML elements.",
      "Use <> </> as the shorthand syntax."
    ]
  },

  {
    "type": "heading",
    "text": "13. public Folder"
  },
  {
    "type": "paragraph",
    "text": "The public folder is used to store static files that should be served directly without processing. Files inside this folder can be accessed directly by their path."
  },
  {
    "type": "paragraph",
    "text": "Common examples include favicon, robots.txt and static images."
  },
  {
    "type": "summary",
    "items": [
      "Stores static files.",
      "Files are served directly.",
      "Suitable for favicon and public assets."
    ]
  },

  {
    "type": "heading",
    "text": "14. assets Folder"
  },
  {
    "type": "paragraph",
    "text": "The assets folder is located inside the src folder. It is used to store images, icons, fonts and other files that are imported into React components."
  },
  {
    "type": "code",
    "language": "jsx",
    "text": "import logo from './assets/logo.png';\n\nfunction App() {\n  return <img src={logo} alt=\"Logo\" />;\n}"
  },
  {
    "type": "summary",
    "items": [
      "Stores images and other assets.",
      "Assets are imported into components."
    ]
  },

  {
    "type": "heading",
    "text": "15. node_modules Folder"
  },
  {
    "type": "paragraph",
    "text": "The node_modules folder contains all the libraries and packages required by the project. It is automatically created after running npm install. Developers usually never edit files inside this folder manually."
  },
  {
    "type": "summary",
    "items": [
      "Contains installed packages.",
      "Created automatically by npm install.",
      "Do not modify its files manually."
    ]
  },

  {
    "type": "heading",
    "text": "16. package.json"
  },
  {
    "type": "paragraph",
    "text": "package.json is one of the most important files in a React project. It stores project information, scripts and the list of installed dependencies. Whenever a new package is installed, it is automatically added to this file."
  },
  {
    "type": "code",
    "language": "json",
    "text": "{\n  \"name\": \"my-react-app\",\n  \"version\": \"1.0.0\",\n  \"scripts\": {\n    \"dev\": \"vite\"\n  }\n}"
  },
  {
    "type": "summary",
    "items": [
      "Stores project information.",
      "Contains project scripts.",
      "Keeps track of installed dependencies."
    ]
  },

  {
    "type": "heading",
    "text": "17. StrictMode"
  },
  {
    "type": "paragraph",
    "text": "StrictMode is a special React component used only during development. It helps developers find common mistakes, unsafe code and potential problems before the application goes into production. StrictMode does not affect the final production build."
  },
  {
    "type": "code",
    "language": "jsx",
    "text": "import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport App from './App.jsx';\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);"
  },
  {
    "type": "paragraph",
    "text": "You may notice that some components render twice in development mode. This is normal behavior when using StrictMode and helps React detect unexpected side effects."
  },
  {
    "type": "summary",
    "items": [
      "StrictMode helps find problems during development.",
      "It does not affect production.",
      "Some components may render twice in development."
    ]
  },
  
    
  ],

  
},

{
  "id": 2,
  "slug": "react-js-props",
  "title": "React.js Props",
  "date": "22 July 2026",

  "description": "Learn React.js Props from scratch. Understand what props are, how to pass data between components, props destructuring, children props, function props, prop drilling, Context API, and the difference between props and state with simple examples.",

  "content": [
    {
      "type": "heading",
      "text": "Props in React"
    },
    {
      "type": "paragraph",
      "text": "Props stands for Properties. Props are used to pass data from one React component to another component. Props usually allow a parent component to send data to a child component."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  return <Welcome name=\"Rahul\" />;\n}\n\nfunction Welcome(props) {\n  return <h1>Hello {props.name}</h1>;\n}"
    },
    {
      "type": "paragraph",
      "text": "In this example, App is the parent component and Welcome is the child component. The name prop is passed from App to Welcome."
    },
    {
      "type": "summary",
      "items": [
        "Props are used to pass data between components.",
        "Props are usually passed from parent to child.",
        "Props are read-only.",
        "Props make components reusable and dynamic."
      ]
    },

    {
      "type": "heading",
      "text": "Passing Props"
    },
    {
      "type": "paragraph",
      "text": "Props are passed like attributes in JSX. Strings can be written inside quotes. Numbers, booleans, arrays, objects, and JavaScript expressions are passed using curly braces."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  return (\n    <User\n      name=\"Rahul\"\n      age={22}\n      isStudent={true}\n    />\n  );\n}\n\nfunction User(props) {\n  return (\n    <div>\n      <h2>{props.name}</h2>\n      <p>Age: {props.age}</p>\n      <p>\n        Student: {props.isStudent ? 'Yes' : 'No'}\n      </p>\n    </div>\n  );\n}"
    },

    {
      "type": "heading",
      "text": "Props Object"
    },
    {
      "type": "paragraph",
      "text": "React passes all props to a component as an object. The prop names become object keys and the passed values become their values."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  return (\n    <User\n      name=\"Rahul\"\n      age={22}\n      city=\"Bhopal\"\n    />\n  );\n}\n\nfunction User(props) {\n  console.log(props);\n\n  return <h1>{props.name}</h1>;\n}"
    },
    {
      "type": "paragraph",
      "text": "The props object may look like this: { name: 'Rahul', age: 22, city: 'Bhopal' }."
    },

    {
      "type": "heading",
      "text": "Props Destructuring"
    },
    {
      "type": "paragraph",
      "text": "Instead of writing props.name, props.age, and props.city every time, we can use destructuring to access the values directly."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function User({ name, age, city }) {\n  return (\n    <div>\n      <h2>{name}</h2>\n      <p>{age}</p>\n      <p>{city}</p>\n    </div>\n  );\n}"
    },

    {
      "type": "heading",
      "text": "Different Types of Props"
    },
    {
      "type": "paragraph",
      "text": "React allows us to pass different types of values as props, including strings, numbers, booleans, arrays, objects, and functions."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  const user = {\n    name: 'Rahul',\n    age: 22\n  };\n\n  const skills = ['HTML', 'CSS', 'React'];\n\n  return (\n    <Profile\n      name=\"Rahul\"\n      age={22}\n      isDeveloper={true}\n      user={user}\n      skills={skills}\n    />\n  );\n}"
    },

    {
      "type": "heading",
      "text": "Props Are Read-Only"
    },
    {
      "type": "paragraph",
      "text": "Props are read-only. A child component should not directly change the value of its props."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function User({ name }) {\n  // Do not modify props directly\n  // name = 'Amit';\n\n  return <h1>{name}</h1>;\n}"
    },
    {
      "type": "paragraph",
      "text": "If data needs to change, use state or a function provided by the parent component."
    },

    {
      "type": "heading",
      "text": "Function Props"
    },
    {
      "type": "paragraph",
      "text": "A parent component can pass a function to a child component as a prop. This is commonly used for event handling."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  function handleClick() {\n    alert('Button clicked');\n  }\n\n  return <Button onClick={handleClick} />;\n}\n\nfunction Button({ onClick }) {\n  return (\n    <button onClick={onClick}>\n      Click Me\n    </button>\n  );\n}"
    },

    {
      "type": "heading",
      "text": "Passing Data from Child to Parent"
    },
    {
      "type": "paragraph",
      "text": "React data usually flows from parent to child. However, a child can send data back to the parent by calling a function received through props."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  function handleMessage(message) {\n    console.log(message);\n  }\n\n  return (\n    <Child sendMessage={handleMessage} />\n  );\n}\n\nfunction Child({ sendMessage }) {\n  return (\n    <button\n      onClick={() => sendMessage('Hello Parent')}\n    >\n      Send Message\n    </button>\n  );\n}"
    },

    {
      "type": "heading",
      "text": "Default Props"
    },
    {
      "type": "paragraph",
      "text": "Default values can be provided when a prop is not passed by the parent component."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function User({ name = 'Guest' }) {\n  return <h1>Hello {name}</h1>;\n}\n\nfunction App() {\n  return <User />;\n}"
    },

    {
      "type": "heading",
      "text": "The children Prop"
    },
    {
      "type": "paragraph",
      "text": "children is a special prop. It contains the content placed between the opening and closing tags of a component."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  return (\n    <Card>\n      <h2>Hello Rahul</h2>\n      <p>Welcome to React</p>\n    </Card>\n  );\n}\n\nfunction Card({ children }) {\n  return (\n    <div className=\"card\">\n      {children}\n    </div>\n  );\n}"
    },

    {
      "type": "heading",
      "text": "Prop Drilling"
    },
    {
      "type": "paragraph",
      "text": "Prop drilling happens when data is passed through multiple components just to reach a deeply nested component, even though the middle components do not need that data."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  const user = {\n    name: 'Rahul'\n  };\n\n  return <Parent user={user} />;\n}\n\nfunction Parent({ user }) {\n  return <Child user={user} />;\n}\n\nfunction Child({ user }) {\n  return <GrandChild user={user} />;\n}\n\nfunction GrandChild({ user }) {\n  return <h1>{user.name}</h1>;\n}"
    },
    {
      "type": "paragraph",
      "text": "Here, the user data is passed from App to Parent, Parent to Child, and Child to GrandChild. Parent and Child do not actually use the user data. They only pass it forward. This is called prop drilling."
    },




    {
      "type": "summary",
      "items": [
        "Props are used to pass data between components.",
        "Props are usually passed from parent to child.",
        "Props are read-only.",
        "Functions can be passed as props.",
        "children is a special prop.",
        "A child can send data to a parent using a function prop.",
        "Passing props through many components is called prop drilling.",
      ]
    }
  ]
},
{
  "id": 3,
  "slug": "react-js-usestate-and-events",
  "title": "React.js useState and Events",
  "date": "24 July 2026",

  "description": "Learn React.js useState and Events from scratch. how state updates the UI, and how to handle common events like onClick, onChange, onSubmit, onMouseEnter, and keyboard events with simple examples.",

  "content": [
    {
      "type": "heading",
      "text": "What is State in React?"
    },
    {
      "type": "paragraph",
      "text": "State is data that belongs to a component and can change over time. When state changes, React re-renders the component and updates the UI with the new data."
    },
    {
      "type": "paragraph",
      "text": "Normal JavaScript variables can change, but React does not automatically know that the value has changed. Because of this, the UI does not update automatically. State is used when changing data should also update the UI."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function Counter() {\n  let count = 0;\n\n  function increase() {\n    count = count + 1;\n  }\n\n  return (\n    <div>\n      <h1>{count}</h1>\n      <button onClick={increase}>\n        Increase\n      </button>\n    </div>\n  );\n}"
    },
    {
      "type": "paragraph",
      "text": "In this example, the count variable changes, but React does not know that it should update the UI. Therefore, the new value may not appear on the screen."
    },

    {
      "type": "heading",
      "text": "What is useState?"
    },
    {
      "type": "paragraph",
      "text": "useState is a React Hook that allows functional components to store and manage changing data. When the state update function is called, React updates the state and re-renders the component."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <h1>{count}</h1>\n\n      <button onClick={() => setCount(count + 1)}>\n        Increase\n      </button>\n    </div>\n  );\n}"
    },
    {
      "type": "paragraph",
      "text": "The useState Hook returns two values. The first value is the current state value, and the second value is a function used to update that state. The value passed to useState is the initial state value."
    },
    {
      "type": "summary",
      "items": [
        "State stores changing data inside a component.",
        "useState is used to create state in functional components.",
        "The first value is the current state.",
        "The second value is the state update function.",
        "Updating state causes React to re-render the component.",
        "State is used when changing data should update the UI."
      ]
    },

    {
      "type": "heading",
      "text": "How useState Works"
    },
    {
      "type": "paragraph",
      "text": "When the state update function is called, React receives a signal that the component data has changed. React then re-renders the component and updates the UI with the new state value."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "const [count, setCount] = useState(0);\n\nsetCount(1);"
    },
    {
      "type": "paragraph",
      "text": "Initially, count is 0. When setCount(1) is called, React updates the state to 1, re-renders the component, and displays the new value in the UI."
    },

    {
      "type": "heading",
      "text": "State and Re-rendering"
    },
    {
      "type": "paragraph",
      "text": "Re-rendering means React runs the component again to calculate what the UI should look like with the latest state values. When state changes, React compares the new UI with the previous UI and updates the required parts of the screen."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function Counter() {\n  const [count, setCount] = useState(0);\n\n  function increase() {\n    setCount(count + 1);\n  }\n\n  return <h1>{count}</h1>;\n}"
    },
    {
      "type": "paragraph",
      "text": "The flow is: user action, state update, React re-render, and updated UI."
    },

    {
      "type": "heading",
      "text": "What are Events in React?"
    },
    {
      "type": "paragraph",
      "text": "Events are actions performed by the user or the browser, such as clicking a button, typing in an input, submitting a form, or moving the mouse over an element. React provides event handlers to respond to these actions."
    },
    {
      "type": "summary",
      "items": [
        "onClick handles click events.",
        "onChange handles input value changes.",
        "onSubmit handles form submission.",
        "onMouseEnter handles mouse entering an element.",
        "onMouseLeave handles mouse leaving an element.",
        "onKeyDown handles keyboard key presses."
      ]
    },

    {
      "type": "heading",
      "text": "onClick Event"
    },
    {
      "type": "paragraph",
      "text": "The onClick event runs a function when the user clicks an element such as a button."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  function handleClick() {\n    alert('Button clicked');\n  }\n\n  return (\n    <button onClick={handleClick}>\n      Click Me\n    </button>\n  );\n}"
    },
    {
      "type": "paragraph",
      "text": "The function is passed to onClick without immediately calling it. React calls the function when the click event occurs."
    },

    {
      "type": "heading",
      "text": "onClick with State"
    },
    {
      "type": "paragraph",
      "text": "onClick is commonly used with useState to update data when a user clicks a button."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <>\n      <h1>{count}</h1>\n\n      <button onClick={() => setCount(count + 1)}>\n        Increase\n      </button>\n    </>\n  );\n}"
    },

    {
      "type": "heading",
      "text": "onChange Event"
    },
    {
      "type": "paragraph",
      "text": "The onChange event runs when the value of an input, textarea, or select element changes. It is commonly used with state to create controlled inputs."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  const [name, setName] = useState('');\n\n  function handleChange(e) {\n    setName(e.target.value);\n  }\n\n  return (\n    <>\n      <input\n        value={name}\n        onChange={handleChange}\n        placeholder=\"Enter your name\"\n      />\n\n      <h1>Hello {name}</h1>\n    </>\n  );\n}"
    },
    {
      "type": "paragraph",
      "text": "The event object contains information about the event. e.target.value gives the current value typed into the input."
    },

    {
      "type": "heading",
      "text": "onSubmit Event"
    },
    {
      "type": "paragraph",
      "text": "The onSubmit event is used to handle form submission. By default, the browser reloads the page after submitting a form. event.preventDefault() prevents this default behavior."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  const [name, setName] = useState('');\n\n  function handleSubmit(e) {\n    e.preventDefault();\n\n    console.log(name);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n      />\n\n      <button type=\"submit\">\n        Submit\n      </button>\n    </form>\n  );\n}"
    },

    {
      "type": "heading",
      "text": "onMouseEnter Event"
    },
    {
      "type": "paragraph",
      "text": "The onMouseEnter event runs when the mouse pointer enters an element."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  function handleMouseEnter() {\n    console.log('Mouse entered');\n  }\n\n  return (\n    <div onMouseEnter={handleMouseEnter}>\n      Move your mouse here\n    </div>\n  );\n}"
    },

    {
      "type": "heading",
      "text": "onMouseLeave Event"
    },
    {
      "type": "paragraph",
      "text": "The onMouseLeave event runs when the mouse pointer leaves an element."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  function handleMouseLeave() {\n    console.log('Mouse left');\n  }\n\n  return (\n    <div onMouseLeave={handleMouseLeave}>\n      Move your mouse away\n    </div>\n  );\n}"
    },

    {
      "type": "heading",
      "text": "onKeyDown Event"
    },
    {
      "type": "paragraph",
      "text": "The onKeyDown event runs when a keyboard key is pressed."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  function handleKeyDown(e) {\n    console.log(e.key);\n  }\n\n  return (\n    <input onKeyDown={handleKeyDown} />\n  );\n}"
    },

    {
      "type": "heading",
      "text": "Event Object"
    },
    {
      "type": "paragraph",
      "text": "React passes an event object to event handler functions. This object contains information about the event, such as the target element and the value entered by the user."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function handleChange(e) {\n  console.log(e.target);\n  console.log(e.target.value);\n}"
    },

    {
      "type": "heading",
      "text": "State and Events Together"
    },
    {
      "type": "paragraph",
      "text": "State and events are commonly used together in React. An event detects a user action, the event handler performs an action, state is updated, and React re-renders the UI."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  const [name, setName] = useState('');\n\n  function handleChange(e) {\n    setName(e.target.value);\n  }\n\n  return (\n    <>\n      <input\n        value={name}\n        onChange={handleChange}\n      />\n\n      <h1>{name}</h1>\n    </>\n  );\n}"
    },
    {
      "type": "paragraph",
      "text": "The complete flow is: user action, event triggers, event handler runs, state updates, React re-renders, and the UI displays the latest data."
    },

    {
      "type": "summary",
      "items": [
        "useState is used to store changing data in a component.",
        "Updating state causes React to re-render the component.",
        "Events represent user actions such as clicks, typing, form submission, and mouse movement.",
        "onClick handles click events.",
        "onChange handles changes in input values.",
        "onSubmit handles form submissions.",
        "onMouseEnter runs when the mouse enters an element.",
        "onMouseLeave runs when the mouse leaves an element.",
        "onKeyDown handles keyboard key presses.",
        "The event object provides information about the event.",
        "State and events are commonly used together to create interactive React applications."
      ]
    }
  ]
},
{
  "id": 4,
  "slug": "react-js-list-rendering-keys-conditional-rendering-and-form-handling",
  "title": "List Rendering, Conditional Rendering and Form Handling",
  "date": "25 July 2026",

  "description": "list rendering with map(), conditional rendering using the ternary and && operators, and form handling using useState, controlled inputs, events, object state, and destructuring",

  "content": [
    {
      "type": "heading",
      "text": "What is List Rendering in React?"
    },
    {
      "type": "paragraph",
      "text": "List rendering means displaying multiple items from an array as UI elements. Instead of writing the same JSX manually for every item, React allows us to use the JavaScript map() method to create UI dynamically from array data."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  const students = ['Rahul', 'Aman', 'Priya'];\n\n  return (\n    <div>\n      {students.map((student) => (\n        <h2>{student}</h2>\n      ))}\n    </div>\n  );\n}"
    },
    {
      "type": "paragraph",
      "text": "The map() method goes through every item in the array and returns JSX for each item. React then displays the generated elements on the screen."
    },

    {
      "type": "heading",
      "text": "Rendering Lists of Objects"
    },
    {
      "type": "paragraph",
      "text": "In real applications, list data usually comes as objects. Each object can contain properties such as id, name, email, or age."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "const students = [\n  { id: 1, name: 'Rahul', age: 20 },\n  { id: 2, name: 'Aman', age: 21 }\n];\n\nfunction App() {\n  return (\n    <div>\n      {students.map((student) => (\n        <div key={student.id}>\n          <h2>{student.name}</h2>\n          <p>Age: {student.age}</p>\n        </div>\n      ))}\n    </div>\n  );\n}"
    },

    {
      "type": "heading",
      "text": "What are Keys in React?"
    },
    {
      "type": "paragraph",
      "text": "A key is a unique value that helps React identify each item in a list. When items are added, removed, or changed, React uses keys to understand which item is which."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "{students.map((student) => (\n  <h2 key={student.id}>\n    {student.name}\n  </h2>\n))}"
    },
    {
      "type": "paragraph",
      "text": "A unique and stable id is usually the best choice for a key. The array index should generally be avoided when the list can change or be reordered."
    },

    {
      "type": "summary",
      "items": [
        "The map() method is used to render arrays as UI.",
        "Each list item should have a unique key.",
        "Keys help React identify individual list items.",
        "A unique id is generally the best key."
      ]
    },

    {
      "type": "heading",
      "text": "What is Conditional Rendering?"
    },
    {
      "type": "paragraph",
      "text": "Conditional rendering means displaying different UI based on a condition. For example, a logged-in user may see a dashboard while a logged-out user may see a login button."
    },

    {
      "type": "heading",
      "text": "Ternary Operator"
    },
    {
      "type": "paragraph",
      "text": "The ternary operator is used when we want one UI for a true condition and another UI for a false condition."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  const isLoggedIn = true;\n\n  return (\n    <div>\n      {isLoggedIn ? (\n        <h1>Welcome to Dashboard</h1>\n      ) : (\n        <h1>Please Login</h1>\n      )}\n    </div>\n  );\n}"
    },
    {
      "type": "paragraph",
      "text": "If isLoggedIn is true, the dashboard message is displayed. If it is false, the login message is displayed."
    },

    {
      "type": "heading",
      "text": "Logical AND (&&) Operator"
    },
    {
      "type": "paragraph",
      "text": "The && operator is used when something should be displayed only if a condition is true."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  const isAdmin = true;\n\n  return (\n    <div>\n      {isAdmin && <h1>Admin Panel</h1>}\n    </div>\n  );\n}"
    },
    {
      "type": "paragraph",
      "text": "If isAdmin is true, the Admin Panel is displayed. If it is false, nothing is displayed."
    },

    {
      "type": "heading",
      "text": "Ternary Operator vs && Operator"
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "{isLoggedIn ? <Dashboard /> : <Login />}"
    },
    {
      "type": "paragraph",
      "text": "Use the ternary operator when both true and false conditions need different UI."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "{isAdmin && <AdminPanel />}"
    },
    {
      "type": "paragraph",
      "text": "Use the && operator when UI should appear only when the condition is true."
    },

    {
      "type": "heading",
      "text": "Conditional Rendering with Lists"
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function App() {\n  const students = ['Rahul', 'Aman'];\n\n  return (\n    <div>\n      {students.length > 0 ? (\n        students.map((student) => (\n          <h2 key={student}>{student}</h2>\n        ))\n      ) : (\n        <p>No students found</p>\n      )}\n    </div>\n  );\n}"
    },
    {
      "type": "summary",
      "items": [
        "Conditional rendering displays UI based on a condition.",
        "The ternary operator handles two possible UI outputs.",
        "The && operator displays UI only when a condition is true.",
        "Conditional rendering can be combined with list rendering."
      ]
    },

    {
      "type": "heading",
      "text": "What is Form Handling in React?"
    },
    {
      "type": "paragraph",
      "text": "Form handling means reading user input, storing it in state, responding to input changes, and handling form submission. In React, forms are commonly managed using useState and event handlers."
    },
    {
      "type": "paragraph",
      "text": "The basic flow is: user types in an input, onChange runs, state is updated, and React displays the latest value."
    },

    {
      "type": "heading",
      "text": "Controlled Input"
    },
    {
      "type": "paragraph",
      "text": "A controlled input is an input whose value is controlled by React state. The state becomes the single source of truth for the input."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "import { useState } from 'react';\n\nfunction App() {\n  const [name, setName] = useState('');\n\n  return (\n    <input\n      value={name}\n      onChange={(e) => setName(e.target.value)}\n      placeholder=\"Enter your name\"\n    />\n  );\n}"
    },
    {
      "type": "paragraph",
      "text": "When the user types, e.target.value gives the latest input value. setName updates the state, and the input receives the updated value through the value prop."
    },

    {
      "type": "heading",
      "text": "Handling a Complete Form"
    },
    {
      "type": "paragraph",
      "text": "A form can contain multiple inputs. Each input can have its own state, but related form fields can also be stored together inside one object."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "import { useState } from 'react';\n\nfunction App() {\n  const [formData, setFormData] = useState({\n    name: '',\n    email: ''\n  });\n\n  function handleChange(e) {\n    const { name, value } = e.target;\n\n    setFormData({\n      ...formData,\n      [name]: value\n    });\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n\n    console.log(formData);\n  }\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        name=\"name\"\n        value={formData.name}\n        onChange={handleChange}\n        placeholder=\"Enter your name\"\n      />\n\n      <input\n        name=\"email\"\n        value={formData.email}\n        onChange={handleChange}\n        placeholder=\"Enter your email\"\n      />\n\n      <button type=\"submit\">\n        Submit\n      </button>\n    </form>\n  );\n}"
    },
    {
      "type": "paragraph",
      "text": "Here, the name and email values are stored inside one formData object. The input name attribute tells React which property should be updated."
    },

    {
      "type": "heading",
      "text": "Understanding Destructuring in Form Handling"
    },
    {
      "type": "paragraph",
      "text": "Destructuring is used here to extract name and value directly from the event target. Instead of writing e.target.name and e.target.value multiple times, we can write const { name, value } = e.target."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function handleChange(e) {\n  const { name, value } = e.target;\n\n  setFormData({\n    ...formData,\n    [name]: value\n  });\n}"
    },
    {
      "type": "paragraph",
      "text": "The spread operator keeps the existing form values, while [name]: value updates only the input that the user is currently changing."
    },

    {
      "type": "heading",
      "text": "Handling Form Submission"
    },
    {
      "type": "paragraph",
      "text": "The onSubmit event runs when the form is submitted. Browsers normally reload the page after a form submission, so event.preventDefault() is used to stop the default browser behavior."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function handleSubmit(e) {\n  e.preventDefault();\n\n  console.log(formData);\n}"
    },
    {
      "type": "paragraph",
      "text": "After preventing the default behavior, the form data can be validated, sent to an API, or used for another action."
    },

    {
      "type": "heading",
      "text": "Simple Form Validation"
    },
    {
      "type": "paragraph",
      "text": "Before submitting a form, we can check whether required fields contain valid data."
    },
    {
      "type": "code",
      "language": "jsx",
      "text": "function handleSubmit(e) {\n  e.preventDefault();\n\n  if (!formData.name || !formData.email) {\n    alert('Please fill all fields');\n    return;\n  }\n\n  console.log('Form submitted', formData);\n}"
    },
    {
      "type": "paragraph",
      "text": "If a required field is empty, the function returns early. Otherwise, the form data can be submitted."
    },

    {
      "type": "heading",
      "text": "The Complete Form Flow"
    },
    {
      "type": "code",
      "language": "text",
      "text": "User types\n    ↓\nonChange runs\n    ↓\nState updates\n    ↓\nReact re-renders\n    ↓\nUser submits form\n    ↓\nonSubmit runs\n    ↓\npreventDefault stops page reload\n    ↓\nValidate and use form data"
    },

    {
      "type": "summary",
      "items": [
        "React forms are commonly managed with useState.",
        "A controlled input gets its value from state.",
        "onChange updates the state when the user types.",
        "onSubmit handles form submission.",
        "preventDefault prevents the browser from reloading the page.",
        "Related form values can be stored inside one object.",
        "Destructuring makes event data easier to read.",
        "The spread operator helps preserve existing form values.",
        "Form data can be validated before submission."
      ]
    },

    {
      "type": "summary",
      "items": [
        "map() is used for list rendering.",
        "Keys help React identify list items.",
        "The ternary operator handles two possible UI outputs.",
        "The && operator renders UI only when a condition is true.",
        "Controlled inputs are managed using React state.",
        "onChange updates form state.",
        "onSubmit handles form submission.",
        "preventDefault prevents the default browser form behavior.",
        "Destructuring and the spread operator make form handling cleaner."
      ]
    }
  ]
}
]