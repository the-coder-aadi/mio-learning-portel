export const jsnotes = [
  {
    id: 1,
    slug: "javascript-complete-beginner-guide",
    title: "JavaScript (Zero to Basics)",
    date: "24 June 2026",

    description:
      "Learn JavaScript including introduction, V8 engine, console.log, variables, and data types with real-world examples.",

    content: [

      {
        type: "heading",
        text: "What is JavaScript?"
      },
      {
        type: "paragraph",
        text: "JavaScript is a programming language used to make websites interactive and dynamic."
      },
      {
        type: "paragraph",
        text: "Simple meaning: HTML provides structure, CSS provides design, and JavaScript adds logic and interactivity to a website."
      },
      {
        type: "paragraph",
        text: "Real-life example: HTML is the body, CSS is the clothes, and JavaScript is the brain that controls everything."
      },

      {
        type: "heading",
        text: "How JavaScript Works (V8 Engine)"
      },
      {
        type: "paragraph",
        text: "JavaScript runs on the V8 engine (Google Chrome), which converts JavaScript code into machine code."
      },
      {
        type: "paragraph",
        text: "It runs in the browser (frontend) and also on the server using Node.js (backend)."
      },

      {
        type: "heading",
        text: "First JavaScript Code"
      },
      {
        type: "paragraph",
        text: "We use console.log() to print output in JavaScript."
      },
      {
        type: "code",
        language: "javascript",
        text: "console.log('Hello World');"
      },
      {
        type: "paragraph",
        text: "This is the first step in learning JavaScript."
      },

      {
        type: "heading",
        text: "Variables in JavaScript"
      },
      {
        type: "paragraph",
        text: "Variables are containers used to store data values."
      },
      {
        type: "code",
        language: "javascript",
        text: "let name = 'Aman';\nconst age = 20;\n\nconsole.log(name);\nconsole.log(age);"
      },
      {
        type: "summary",
        items: [
          "let = changeable value",
          "const = fixed value",
          "Used to store data in memory"
        ]
      },

      {
        type: "heading",
        text: "Basic Data Types"
      },
      {
        type: "summary",
        items: [
          "String = text (\"hello\")",
          "Number = numeric value (10)",
          "Boolean = true/false",
          "Null = intentionally empty value",
          "Undefined = value not assigned yet"
        ]
      },

      {
        type: "code",
        language: "javascript",
        text: "let name = 'Rahul';\nlet age = 22;\nlet isStudent = true;\nlet marks = null;\nlet city;\n\nconsole.log(typeof name);\nconsole.log(typeof age);\nconsole.log(typeof isStudent);\nconsole.log(typeof marks);\nconsole.log(typeof city);"
      },

      {
        type: "heading",
        text: "Null vs Undefined (Important Difference)"
      },
      {
        type: "paragraph",
        text: "Null means the developer intentionally assigns an empty value."
      },
      {
        type: "paragraph",
        text: "Undefined means a variable is declared but no value has been assigned yet."
      },
      {
        type: "summary",
        items: [
          "null = intentionally empty (set by developer)",
          "undefined = not assigned (set by JavaScript)"
        ]
      },

      {
        type: "heading",
        text: "Quick Revision"
      },
      {
        type: "summary",
        items: [
          "JavaScript = interactive web programming language",
          "V8 engine = converts code into machine language",
          "console.log = used to print output",
          "let = changeable variable",
          "const = fixed variable",
          "typeof = used to check data type",
          "null = intentionally empty",
          "undefined = not assigned yet"
        ]
      }
    ]
  }
];