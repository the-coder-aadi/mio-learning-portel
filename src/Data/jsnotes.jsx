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
  },
  {
  id: 2,
  slug: "javascript-operators-complete-guide",
  title: "JavaScript Operators (Complete Guide)",
  date: "30 June 2026",

  description:
    "Learn JavaScript operators including arithmetic, unary, assignment, comparison, logical, and ternary operators with beginner-friendly examples.",

  content: [

    {
      type: "heading",
      text: "What are Operators?"
    },
    {
      type: "paragraph",
      text: "Operators are special symbols used to perform operations on values and variables."
    },
    {
      type: "paragraph",
      text: "Simple meaning: Variables store data, and operators help us work with that data."
    },

    {
      type: "heading",
      text: "Arithmetic Operators"
    },
    {
      type: "paragraph",
      text: "Arithmetic operators are used for mathematical calculations."
    },
    {
      type: "summary",
      items: [
        "+ = Addition",
        "- = Subtraction",
        "* = Multiplication",
        "/ = Division",
        "% = Remainder"
      ]
    },
    {
      type: "code",
      language: "javascript",
      text: "let price = 1000;\nlet discount = 200;\n\nlet finalPrice = price - discount;\nconsole.log(finalPrice);"
    },
    {
      type: "paragraph",
      text: "Real-world use: Used in e-commerce apps to calculate prices, discounts, taxes, etc."
    },

    {
      type: "heading",
      text: "Unary Operators"
    },
    {
      type: "paragraph",
      text: "Unary operators work on only one value."
    },
    {
      type: "summary",
      items: [
        "++ = Increment",
        "-- = Decrement"
      ]
    },
    {
      type: "code",
      language: "javascript",
      text: "let score = 10;\n\nscore++;\nconsole.log(score);\n\nscore--;\nconsole.log(score);"
    },
    {
      type: "paragraph",
      text: "Real-world use: Used in games, cart quantity, likes counter, etc."
    },
    {
  type: "heading",
  text: "Difference Between ++a and a++"
},
{
  type: "paragraph",
  text: "Both increase the value by 1, but the difference is when the value gets updated."
},
{
  type: "summary",
  items: [
    "a++ = Use first, then increase (Post Increment)",
    "++a = Increase first, then use (Pre Increment)"
  ]
},
{
  type: "code",
  language: "javascript",
  text: "let a = 5;\n\nconsole.log(a++); // 5\nconsole.log(a);   // 6"
},
{
  type: "paragraph",
  text: "In post increment (a++), the current value is used first, then it increases."
},
{
  type: "code",
  language: "javascript",
  text: "let b = 5;\n\nconsole.log(++b); // 6\nconsole.log(b);   // 6"
},
{
  type: "paragraph",
  text: "In pre increment (++b), the value increases first, then it is used."
},

    {
      type: "heading",
      text: "Assignment Operators"
    },
    {
      type: "paragraph",
      text: "Assignment operators are used to assign and update values."
    },
    {
      type: "summary",
      items: [
        "= = Assign value",
        "+= = Add and assign",
        "-= = Subtract and assign"
      ]
    },
    {
      type: "code",
      language: "javascript",
      text: "let balance = 500;\n\nbalance += 200;\nconsole.log(balance);\n\nbalance -= 100;\nconsole.log(balance);"
    },
    {
      type: "paragraph",
      text: "Real-world use: Used in wallet balance, game scores, bank transactions."
    },

    {
      type: "heading",
      text: "Comparison Operators"
    },
    {
      type: "paragraph",
      text: "Comparison operators compare two values and always return true or false."
    },
    {
      type: "summary",
      items: [
        "== = Equal value",
        "=== = Equal value and type",
        "!= = Not equal",
        "> = Greater than",
        "< = Less than"
      ]
    },
    {
      type: "code",
      language: "javascript",
      text: "let age = 20;\n\nconsole.log(age > 18);\nconsole.log(age == 20);\nconsole.log(age === '20');"
    },
    {
      type: "paragraph",
      text: "Real-world use: Used in checking age, login validation, eligibility checks."
    },

    {
      type: "heading",
      text: "Logical Operators"
    },
    {
      type: "paragraph",
      text: "Logical operators combine multiple conditions."
    },
    {
      type: "summary",
      items: [
        "&& = AND (both true)",
        "|| = OR (at least one true)",
        "! = NOT (reverse)"
      ]
    },
    {
      type: "code",
      language: "javascript",
      text: "let age = 20;\nlet hasID = true;\n\nconsole.log(age >= 18 && hasID);"
    },
    {
      type: "paragraph",
      text: "Real-world use: Used in login systems, permissions, and access checks."
    },
    {
  type: "heading",
  text: "If Else Conditions"
},
{
  type: "paragraph",
  text: "If else is used to make decisions in JavaScript based on conditions."
},
{
  type: "paragraph",
  text: "Simple meaning: If the condition is true, one block runs. Otherwise, another block runs."
},
{
  type: "paragraph",
  text: "Syntax:"
},
{
  type: "code",
  language: "javascript",
  text: "if(condition){\n  // code\n} else {\n  // code\n}"
},
{
  type: "code",
  language: "javascript",
  text: "let age = 20;\n\nif(age >= 18){\n  console.log('You can vote');\n} else {\n  console.log('You cannot vote');\n}"
},
{
  type: "paragraph",
  text: "Real-world use: Used for login checks, age verification, payment success/failure, etc."
},
{
  type: "heading",
  text: "Else If Conditions"
},
{
  type: "paragraph",
  text: "Else if is used when there are multiple conditions."
},
{
  type: "code",
  language: "javascript",
  text: "let marks = 85;\n\nif(marks >= 90){\n  console.log('Grade A');\n} else if(marks >= 70){\n  console.log('Grade B');\n} else {\n  console.log('Grade C');\n}"
},
{
  type: "paragraph",
  text: "Real-world use: Used in grading systems, salary ranges, discounts, etc."
},

    {
      type: "heading",
      text: "Ternary Operators"
    },
    {
      type: "paragraph",
      text: "Ternary operator is a short form of if-else."
    },
    {
      type: "paragraph",
      text: "Syntax: condition ? true : false"
    },
    {
      type: "code",
      language: "javascript",
      text: "let age = 20;\n\nlet result = age >= 18 ? 'Adult' : 'Minor';\nconsole.log(result);"
    },
    {
      type: "paragraph",
      text: "Real-world use: Used for quick decisions like login status, stock availability, etc."
    },

    {
      type: "heading",
      text: "Quick Revision"
    },
    {
      type: "summary",
      items: [
        "Arithmetic = calculations",
        "Unary = increase/decrease value",
        "Assignment = assign/update values",
        "Comparison = compare values",
        "Logical = combine conditions",
        "Ternary = short if-else"
      ]
    }

  ]
},
{
  id: 3,
  slug: "javascript-loops-complete-guide",
  title: "JavaScript Loops (Complete Guide)",
  date: "01 July 2026",

  description:
    "Learn JavaScript loops including for loop, while loop, do while loop, nested loops, and real-world examples with beginner-friendly explanations.",

  content: [

    {
      type: "heading",
      text: "What are Loops?"
    },
    {
      type: "paragraph",
      text: "Loops are used to repeat a block of code multiple times."
    },
    {
      type: "paragraph",
      text: "Simple meaning: When you want to do the same work again and again, you use loops."
    },
    {
      type: "paragraph",
      text: "Real-life example: Sending notifications to 100 users. Instead of writing the same code 100 times, we use loops."
    },

    {
      type: "heading",
      text: "Why Loops?"
    },
    {
      type: "code",
      language: "javascript",
      text: "console.log('Hello');\nconsole.log('Hello');\nconsole.log('Hello');"
    },
    {
      type: "paragraph",
      text: "This works, but it is repetitive. Loops make this shorter and cleaner."
    },

    {
      type: "heading",
      text: "For Loop"
    },
    {
      type: "paragraph",
      text: "For loop is used when we know how many times the code should run."
    },
    {
      type: "paragraph",
      text: "Syntax:"
    },
    {
      type: "code",
      language: "javascript",
      text: "for(initialization; condition; increment){\n  // code\n}"
    },
    {
      type: "summary",
      items: [
        "Initialization = starting point",
        "Condition = until when loop runs",
        "Increment = updates value each round"
      ]
    },
    {
      type: "code",
      language: "javascript",
      text: "for(let i = 1; i <= 5; i++){\n  console.log(i);\n}"
    },
    {
      type: "paragraph",
      text: "This prints numbers from 1 to 5."
    },

    {
      type: "heading",
      text: "Reverse Loop"
    },
    {
      type: "paragraph",
      text: "Loops can also run backward."
    },
    {
      type: "code",
      language: "javascript",
      text: "for(let i = 5; i >= 1; i--){\n  console.log(i);\n}"
    },
    {
      type: "paragraph",
      text: "This prints numbers from 5 to 1."
    },

    {
      type: "heading",
      text: "Using If Else Inside Loop"
    },
    {
      type: "paragraph",
      text: "We can combine loops with conditions."
    },
    {
      type: "code",
      language: "javascript",
      text: "for(let i = 1; i <= 10; i++){\n  if(i % 2 === 0){\n    console.log(i);\n  }\n}"
    },
    {
      type: "paragraph",
      text: "This prints only even numbers from 1 to 10."
    },

    {
      type: "heading",
      text: "While Loop"
    },
    {
      type: "paragraph",
      text: "While loop runs as long as the condition is true."
    },
    {
      type: "paragraph",
      text: "Used when we do not know the exact number of repetitions."
    },
    {
      type: "code",
      language: "javascript",
      text: "let i = 1;\n\nwhile(i <= 5){\n  console.log(i);\n  i++;\n}"
    },
    {
      type: "paragraph",
      text: "Important: Always update the variable, otherwise it can create an infinite loop."
    },

    {
      type: "heading",
      text: "Do While Loop"
    },
    {
      type: "paragraph",
      text: "Do while loop runs at least one time, even if the condition is false."
    },
    {
      type: "code",
      language: "javascript",
      text: "let i = 6;\n\ndo{\n  console.log(i);\n  i++;\n}while(i <= 5);"
    },
    {
      type: "paragraph",
      text: "Even though the condition is false, it still runs once."
    },

    {
      type: "heading",
      text: "Nested Loops"
    },
    {
      type: "paragraph",
      text: "A loop inside another loop is called a nested loop."
    },
    {
      type: "code",
      language: "javascript",
      text: "for(let i = 1; i <= 3; i++){\n  for(let j = 1; j <= 2; j++){\n    console.log(i, j);\n  }\n}"
    },
    {
      type: "paragraph",
      text: "Used in patterns, tables, and grid systems."
    },

    {
      type: "heading",
      text: "Real-world Example"
    },
    {
      type: "code",
      language: "javascript",
      text: "let notifications = 3;\n\nfor(let i = 1; i <= notifications; i++){\n  console.log('Notification sent');\n}"
    },
    {
      type: "paragraph",
      text: "This sends the same notification multiple times."
    },

    {
      type: "heading",
      text: "Quick Revision"
    },
    {
      type: "summary",
      items: [
        "Loops repeat code multiple times",
        "For loop = known repetitions",
        "While loop = condition based",
        "Do while = runs at least once",
        "Nested loop = loop inside loop"
      ]
    },

    {
      type: "heading",
      text: "Practice Questions"
    },
    {
      type: "summary",
      items: [
        "Print numbers from 1 to 10 using for loop",
        "Print numbers from 10 to 1 using reverse loop",
        "Print even numbers from 1 to 20",
        "Print table of 5 using loop"
      ]
    }

  ]
}
];