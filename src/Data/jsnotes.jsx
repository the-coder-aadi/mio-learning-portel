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
  slug: "javascript-loops-and-objects-complete-guide",
  title: "JavaScript Loops & Objects (Complete Guide)",
  date: "01 July 2026",

  description:
    "Learn JavaScript loops including for, while, do while, nested loops, for...of, objects, and for...in with beginner-friendly explanations and examples.",

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
      text: "Simple meaning: If you want to do the same task again and again, loops help you do it."
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
      type: "code",
      language: "javascript",
      text: "for(let i = 1; i <= 5; i++){\n  console.log(i);\n}"
    },
    {
      type: "summary",
      items: [
        "let i = 1 → starting point",
        "i <= 5 → condition",
        "i++ → increase after every round"
      ]
    },

    {
      type: "heading",
      text: "Reverse Loop"
    },
    {
      type: "code",
      language: "javascript",
      text: "for(let i = 5; i >= 1; i--){\n  console.log(i);\n}"
    },
    {
      type: "paragraph",
      text: "This prints numbers in reverse order."
    },

    {
      type: "heading",
      text: "Using Conditions Inside Loop"
    },
    {
      type: "code",
      language: "javascript",
      text: "for(let i = 1; i <= 10; i++){\n  if(i % 2 === 0){\n    console.log(i);\n  }\n}"
    },
    {
      type: "paragraph",
      text: "This prints only even numbers."
    },

    {
      type: "heading",
      text: "While Loop"
    },
    {
      type: "paragraph",
      text: "While loop runs until the condition becomes false."
    },
    {
      type: "code",
      language: "javascript",
      text: "let i = 1;\n\nwhile(i <= 5){\n  console.log(i);\n  i++;\n}"
    },

    {
      type: "heading",
      text: "Do While Loop"
    },
    {
      type: "paragraph",
      text: "Do while runs at least one time even if the condition is false."
    },
    {
      type: "code",
      language: "javascript",
      text: "let i = 6;\n\ndo{\n  console.log(i);\n  i++;\n}while(i <= 5);"
    },

    {
      type: "heading",
      text: "Nested Loops"
    },
    {
      type: "paragraph",
      text: "A loop inside another loop is called nested loop."
    },
    {
      type: "code",
      language: "javascript",
      text: "for(let i = 1; i <= 3; i++){\n  for(let j = 1; j <= 2; j++){\n    console.log(i, j);\n  }\n}"
    },

    {
      type: "heading",
      text: "For Of Loop"
    },
    {
      type: "paragraph",
      text: "For...of loop is used to directly get values from arrays or strings."
    },
    {
      type: "paragraph",
      text: "It makes code shorter and easier compared to normal for loop."
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana', 'Mango'];\n\nfor(let fruit of fruits){\n  console.log(fruit);\n}"
    },
    {
      type: "paragraph",
      text: "This directly gives each value one by one."
    },
    {
      type: "summary",
      items: [
        "for loop = works with index",
        "for of = works directly with values"
      ]
    },

    {
      type: "heading",
      text: "What are Objects?"
    },
    {
      type: "paragraph",
      text: "Objects are used to store multiple related values in one variable."
    },
    {
      type: "paragraph",
      text: "Objects store data in key-value pairs."
    },
    {
      type: "paragraph",
      text: "Real-life example: A user profile has name, age, and city. All these can be stored inside one object."
    },

    {
      type: "code",
      language: "javascript",
      text: "let user = {\n  name: 'Rahul',\n  age: 20,\n  city: 'Delhi'\n};"
    },

    {
      type: "heading",
      text: "Accessing Object Values"
    },
    {
      type: "paragraph",
      text: "We can access values using dot notation."
    },
    {
      type: "code",
      language: "javascript",
      text: "console.log(user.name);\nconsole.log(user.age);"
    },

    {
      type: "heading",
      text: "Updating Object Values"
    },
    {
      type: "code",
      language: "javascript",
      text: "user.age = 21;\nconsole.log(user.age);"
    },
    {
      type: "paragraph",
      text: "This updates the value of a key."
    },

    {
      type: "heading",
      text: "For In Loop"
    },
    {
      type: "paragraph",
      text: "For...in loop is mainly used to get keys from objects."
    },
    {
      type: "code",
      language: "javascript",
      text: "let user = {\n  name: 'Rahul',\n  age: 20,\n  city: 'Delhi'\n};\n\nfor(let key in user){\n  console.log(key);\n}"
    },
    {
      type: "paragraph",
      text: "This prints only keys: name, age, city."
    },

    {
      type: "heading",
      text: "Getting Keys and Values Together"
    },
    {
      type: "code",
      language: "javascript",
      text: "for(let key in user){\n  console.log(key, user[key]);\n}"
    },
    {
      type: "paragraph",
      text: "This prints both key and value together."
    },

    {
  type: "heading",
  text: "Template Literals"
},
{
  type: "paragraph",
  text: "Template literals use backticks (` `) instead of quotes. They make strings easier to write and read."
},
{
  type: "code",
  language: "javascript",
  text: "let name = 'Rahul';\n\nconsole.log(`Hello ${name}`);"
},
{
  type: "paragraph",
  text: "This allows us to directly insert variables inside strings."
},

{
  type: "heading",
  text: "String Interpolation (${ })"
},
{
  type: "paragraph",
  text: "Interpolation means inserting variables or expressions inside a string using ${}."
},
{
  type: "code",
  language: "javascript",
  text: "let price = 200;\nlet discount = 20;\n\nconsole.log(`Final price is ${price - discount}`);"
},
{
  type: "paragraph",
  text: "Inside ${}, we can also write calculations."
},

{
  type: "heading",
  text: "Multiline Strings"
},
{
  type: "paragraph",
  text: "Backticks also allow writing strings in multiple lines."
},
{
  type: "code",
  language: "javascript",
  text: "let message = `Hello\nWelcome to JavaScript\nLearning`;\nconsole.log(message);"
},
{
  type: "paragraph",
  text: "This is easier than using \\n again and again."
},

{
  type: "heading",
  text: "Strings in JavaScript"
},
{
  type: "paragraph",
  text: "A string is used to store text in JavaScript."
},
{
  type: "paragraph",
  text: "Strings can be written using single quotes (' '), double quotes (\" \"), and backticks (` `)."
},

{
  type: "heading",
  text: "Single Quotes (' ')"
},
{
  type: "code",
  language: "javascript",
  text: "let name = 'Rahul';\nconsole.log(name);"
},
{
  type: "paragraph",
  text: "Single quotes are the basic and simple way to create strings."
},

{
  type: "heading",
  text: "Double Quotes (\" \")"
},
{
  type: "code",
  language: "javascript",
  text: "let city = \"Delhi\";\nconsole.log(city);"
},
{
  type: "paragraph",
  text: "Double quotes work the same as single quotes."
},

{
  type: "heading",
  text: "Backticks (` `)"
},
{
  type: "code",
  language: "javascript",
  text: "let language = `JavaScript`;\nconsole.log(language);"
},
{
  type: "paragraph",
  text: "Backticks are special because they support template literals and multiline strings."
},

{
  type: "heading",
  text: "Why Use Backticks?"
},
{
  type: "paragraph",
  text: "Backticks make it easier to insert variables inside strings."
},
{
  type: "code",
  language: "javascript",
  text: "let username = 'Rahul';\n\nconsole.log(`Hello ${username}`);"
},
{
  type: "paragraph",
  text: "Here ${username} directly inserts the variable value."
},

{
  type: "heading",
  text: "String Interpolation (${ })"
},
{
  type: "paragraph",
  text: "Interpolation means adding variables or calculations inside a string."
},
{
  type: "code",
  language: "javascript",
  text: "let price = 200;\nlet discount = 20;\n\nconsole.log(`Final price is ${price - discount}`);"
},
{
  type: "paragraph",
  text: "Inside ${}, we can use variables and even calculations."
},

{
  type: "heading",
  text: "Multiline Strings"
},
{
  type: "paragraph",
  text: "Backticks allow writing strings in multiple lines."
},
{
  type: "code",
  language: "javascript",
  text: "let message = `Hello\nWelcome to JavaScript\nLearning`;\nconsole.log(message);"
},
{
  type: "paragraph",
  text: "This is useful for writing long text."
},
{
  type: "heading",
  text: "Important String Methods"
},
{
  type: "paragraph",
  text: "String methods are built-in functions used to perform different operations on strings."
},

{
  type: "heading",
  text: "length"
},
{
  type: "code",
  language: "javascript",
  text: "let name = 'Rahul';\nconsole.log(name.length);"
},
{
  type: "paragraph",
  text: "Returns total number of characters."
},

{
  type: "heading",
  text: "toUpperCase()"
},
{
  type: "code",
  language: "javascript",
  text: "let city = 'delhi';\nconsole.log(city.toUpperCase());"
},
{
  type: "paragraph",
  text: "Converts string into uppercase."
},

{
  type: "heading",
  text: "toLowerCase()"
},
{
  type: "code",
  language: "javascript",
  text: "let country = 'INDIA';\nconsole.log(country.toLowerCase());"
},
{
  type: "paragraph",
  text: "Converts string into lowercase."
},

{
  type: "heading",
  text: "trim()"
},
{
  type: "code",
  language: "javascript",
  text: "let username = '   Rahul   ';\nconsole.log(username.trim());"
},
{
  type: "paragraph",
  text: "Removes extra spaces from start and end."
},

{
  type: "heading",
  text: "slice()"
},
{
  type: "code",
  language: "javascript",
  text: "let text = 'JavaScript';\nconsole.log(text.slice(0,4));"
},
{
  type: "paragraph",
  text: "Extracts part of a string."
},

{
  type: "heading",
  text: "concat()"
},
{
  type: "code",
  language: "javascript",
  text: "let firstName = 'Rahul';\nlet lastName = 'Sharma';\n\nconsole.log(firstName.concat(' ', lastName));"
},
{
  type: "paragraph",
  text: "Joins two or more strings."
},

{
  type: "heading",
  text: "replace()"
},
{
  type: "code",
  language: "javascript",
  text: "let msg = 'Hello Rahul';\nconsole.log(msg.replace('Rahul', 'Aman'));"
},
{
  type: "paragraph",
  text: "Replaces part of a string."
},

{
  type: "heading",
  text: "charAt()"
},
{
  type: "code",
  language: "javascript",
  text: "let word = 'JavaScript';\nconsole.log(word.charAt(0));"
},
{
  type: "paragraph",
  text: "Returns character at a specific index."
},

{
  type: "heading",
  text: "indexOf()"
},
{
  type: "code",
  language: "javascript",
  text: "let word = 'JavaScript';\nconsole.log(word.indexOf('S'));"
},
{
  type: "paragraph",
  text: "Returns the first position of a character."
},

{
  type: "heading",
  text: "includes()"
},
{
  type: "code",
  language: "javascript",
  text: "let text = 'I love JavaScript';\nconsole.log(text.includes('JavaScript'));"
},
{
  type: "paragraph",
  text: "Checks if a word exists inside the string."
},

{
  type: "heading",
  text: "startsWith()"
},
{
  type: "code",
  language: "javascript",
  text: "let text = 'JavaScript';\nconsole.log(text.startsWith('Java'));"
},
{
  type: "paragraph",
  text: "Checks if string starts with given value."
},

{
  type: "heading",
  text: "endsWith()"
},
{
  type: "code",
  language: "javascript",
  text: "let text = 'JavaScript';\nconsole.log(text.endsWith('Script'));"
},
{
  type: "paragraph",
  text: "Checks if string ends with given value."
},

{
  type: "heading",
  text: "split()"
},
{
  type: "code",
  language: "javascript",
  text: "let text = 'apple,banana,mango';\nconsole.log(text.split(','));"
},
{
  type: "paragraph",
  text: "Converts string into array."
},

{
  type: "heading",
  text: "repeat()"
},
{
  type: "code",
  language: "javascript",
  text: "let word = 'Hi ';\nconsole.log(word.repeat(3));"
},
{
  type: "paragraph",
  text: "Repeats the string multiple times."
},

{
  type: "summary",
  items: [
    "length = count characters",
    "toUpperCase = uppercase",
    "toLowerCase = lowercase",
    "trim = remove spaces",
    "slice = extract part",
    "concat = join strings",
    "replace = replace text",
    "charAt = get character",
    "indexOf = find position",
    "includes = check word exists",
    "startsWith = check starting",
    "endsWith = check ending",
    "split = convert to array",
    "repeat = repeat string"
  ]
},

    {
      type: "summary",
      items: [
        "for = best when count is known",
        "while = condition-based loop",
        "do while = runs at least once",
        "for of = gives values directly",
        "object = stores data in key-value pairs",
        "for in = gives keys from object"
      ]
    },

    {
      type: "heading",
      text: "Practice Questions"
    },
    {
      type: "summary",
      items: [
        "Print all fruits using for...of loop",
        "Create an object for a student and print name and age",
        "Use for...in loop to print all keys of an object",
        "Use for...in loop to print all keys and values"
      ]
    }

  ]
}
];