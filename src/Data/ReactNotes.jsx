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
}
]