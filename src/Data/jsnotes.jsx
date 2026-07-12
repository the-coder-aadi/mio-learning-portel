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
},
{
  id: 4,
  slug: "javascript-arrays-and-functions-complete-guide",
  title: "JavaScript Arrays & Functions (Complete Guide)",
  date: "03 July 2026",

  description:
    "Learn JavaScript Arrays and Functions with beginner-friendly explanations, important methods, loops, parameters, arguments, return, and arrow functions.",

  content: [

    {
      type: "heading",
      text: "What are Arrays?"
    },
    {
      type: "paragraph",
      text: "An array is used to store multiple values inside one variable."
    },
    {
      type: "paragraph",
      text: "Simple meaning: If you want to store many values together, use an array."
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana', 'Mango'];\nconsole.log(fruits);"
    },

    {
      type: "heading",
      text: "Array Index"
    },
    {
      type: "paragraph",
      text: "Every array value has an index. Index always starts from 0."
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana', 'Mango'];\n\nconsole.log(fruits[0]);\nconsole.log(fruits[1]);"
    },

    {
      type: "heading",
      text: "Updating Array Values"
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana'];\nfruits[1] = 'Mango';\nconsole.log(fruits);"
    },

    {
      type: "heading",
      text: "push()"
    },
    {
      type: "paragraph",
      text: "Adds a new value at the end."
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple'];\nfruits.push('Banana');\nconsole.log(fruits);"
    },

    {
      type: "heading",
      text: "pop()"
    },
    {
      type: "paragraph",
      text: "Removes the last value."
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana'];\nfruits.pop();\nconsole.log(fruits);"
    },

    {
      type: "heading",
      text: "unshift()"
    },
    {
      type: "paragraph",
      text: "Adds a value at the beginning."
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Banana'];\nfruits.unshift('Apple');\nconsole.log(fruits);"
    },

    {
      type: "heading",
      text: "shift()"
    },
    {
      type: "paragraph",
      text: "Removes the first value."
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana'];\nfruits.shift();\nconsole.log(fruits);"
    },

    {
      type: "heading",
      text: "slice()"
    },
    {
      type: "paragraph",
      text: "Gets part of an array."
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana', 'Mango'];\nconsole.log(fruits.slice(0,2));"
    },

    {
      type: "heading",
      text: "splice()"
    },
    {
      type: "paragraph",
      text: "Adds or removes values from any position."
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana'];\nfruits.splice(1,0,'Mango');\nconsole.log(fruits);"
    },

    {
      type: "heading",
      text: "includes()"
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana'];\nconsole.log(fruits.includes('Apple'));"
    },

    {
      type: "heading",
      text: "indexOf()"
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana'];\nconsole.log(fruits.indexOf('Banana'));"
    },

    {
      type: "heading",
      text: "Looping Through Array"
    },
    {
      type: "paragraph",
      text: "We can use loops to access all array values."
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana', 'Mango'];\n\nfor(let fruit of fruits){\n  console.log(fruit);\n}"
    },

    {
      type: "heading",
      text: "What are Functions?"
    },
    {
      type: "paragraph",
      text: "A function is a block of code used to perform a task."
    },
    {
      type: "paragraph",
      text: "Simple meaning: Write once, use many times."
    },

    {
      type: "heading",
      text: "Normal Function"
    },
    {
      type: "code",
      language: "javascript",
      text: "function greet(){\n  console.log('Hello Student');\n}\n\ngreet();"
    },

    {
      type: "heading",
      text: "Function with Parameters"
    },
    {
      type: "paragraph",
      text: "Parameters are variables written when creating the function."
    },
    {
      type: "code",
      language: "javascript",
      text: "function greet(name){\n  console.log('Hello ' + name);\n}\n\ngreet('Rahul');"
    },

    {
      type: "heading",
      text: "Arguments"
    },
    {
      type: "paragraph",
      text: "Arguments are actual values passed when calling the function."
    },
    {
      type: "code",
      language: "javascript",
      text: "function add(a, b){\n  console.log(a + b);\n}\n\nadd(10, 20);"
    },

    {
      type: "heading",
      text: "Return Keyword"
    },
    {
      type: "paragraph",
      text: "Return sends the result back."
    },
    {
      type: "code",
      language: "javascript",
      text: "function multiply(a, b){\n  return a * b;\n}\n\nlet result = multiply(5, 2);\nconsole.log(result);"
    },

    {
      type: "heading",
      text: "Arrow Function"
    },
    {
      type: "paragraph",
      text: "Arrow function is the short modern way to write functions."
    },
    {
      type: "code",
      language: "javascript",
      text: "const greet = (name) => {\n  console.log(`Hello ${name}`);\n};\n\ngreet('Aman');"
    },

    {
      type: "heading",
      text: "Normal Function vs Arrow Function"
    },
    {
      type: "summary",
      items: [
        "Normal function = old and traditional way",
        "Arrow function = shorter and modern way",
        "Both do the same work",
        "Arrow functions are easier to write"
      ]
    },
    {
      type: "code",
      language: "javascript",
      text: "function add(a,b){\n  return a+b;\n}\n\nconst add2 = (a,b) => a+b;\n\nconsole.log(add(2,3));\nconsole.log(add2(2,3));"
    },

    {
      type: "heading",
      text: "Real-world Example"
    },
    {
      type: "code",
      language: "javascript",
      text: "let cart = [100, 200, 300];\n\nfunction getTotal(items){\n  let total = 0;\n\n  for(let item of items){\n    total += item;\n  }\n\n  return total;\n}\n\nconsole.log(getTotal(cart));"
    },
    {
      type: "paragraph",
      text: "This calculates the total cart price."
    },

    {
      type: "heading",
      text: "Quick Revision"
    },
    {
      type: "summary",
      items: [
        "Array = stores multiple values",
        "push/pop = add/remove from end",
        "shift/unshift = add/remove from start",
        "slice = get part of array",
        "splice = add/remove anywhere",
        "Function = reusable block of code",
        "Parameter = variable in function",
        "Argument = value passed in function",
        "Return = sends back result",
        "Arrow function = short function syntax"
      ]
    },

    {
      type: "heading",
      text: "Practice Questions"
    },
    {
      type: "summary",
      items: [
        "Create an array of 5 fruits and print all using loop",
        "Add and remove values using push and pop",
        "Create a function to add two numbers",
        "Create an arrow function to multiply two numbers"
      ]
    }

  ]
},
{
  id: 5,
  slug: "javascript-array-methods-and-dom-complete-guide",
  title: "JavaScript Array Methods & DOM (Complete Guide)",
  date: "04 July 2026",

  description:
    "Learn important array methods like forEach, map, filter, reduce and complete DOM manipulation from basic to advanced with beginner-friendly examples.",

  content: [

    {
      type: "heading",
      text: "forEach() Method"
    },
    {
      type: "paragraph",
      text: "forEach() runs a function for every item in an array."
    },
    {
      type: "paragraph",
      text: "Used when you want to perform an action on each item."
    },
    {
      type: "code",
      language: "javascript",
      text: "let fruits = ['Apple', 'Banana', 'Mango'];\n\nfruits.forEach(function(fruit){\n  console.log(fruit);\n});"
    },
    {
      type: "paragraph",
      text: "This prints every fruit one by one."
    },

    {
      type: "heading",
      text: "map() Method"
    },
    {
      type: "paragraph",
      text: "map() creates a new array by changing each item."
    },
    {
      type: "code",
      language: "javascript",
      text: "let nums = [1,2,3];\n\nlet doubled = nums.map(function(num){\n  return num * 2;\n});\n\nconsole.log(doubled);"
    },
    {
      type: "paragraph",
      text: "Used when you want to transform data."
    },

    {
      type: "heading",
      text: "filter() Method"
    },
    {
      type: "paragraph",
      text: "filter() selects only those values that match a condition."
    },
    {
      type: "code",
      language: "javascript",
      text: "let ages = [12,18,25,15,30];\n\nlet adults = ages.filter(function(age){\n  return age >= 18;\n});\n\nconsole.log(adults);"
    },
    {
      type: "paragraph",
      text: "Used to filter required data."
    },

    {
      type: "heading",
      text: "reduce() Method"
    },
    {
      type: "paragraph",
      text: "reduce() combines all values into one single value."
    },
    {
      type: "code",
      language: "javascript",
      text: "let prices = [100,200,300];\n\nlet total = prices.reduce(function(acc, curr){\n  return acc + curr;\n},0);\n\nconsole.log(total);"
    },
    {
      type: "paragraph",
      text: "Used for total price, sum, max, min, etc."
    },

    {
      type: "heading",
      text: "What is DOM?"
    },
    {
      type: "paragraph",
      text: "DOM stands for Document Object Model."
    },
    {
      type: "paragraph",
      text: "It allows JavaScript to access and change HTML elements."
    },
    {
      type: "paragraph",
      text: "Simple meaning: JavaScript uses DOM to control the webpage."
    },

    {
      type: "heading",
      text: "Window Object"
    },
    {
      type: "paragraph",
      text: "window is the main object of the browser."
    },
    {
      type: "paragraph",
      text: "Everything starts from window."
    },
    {
      type: "code",
      language: "javascript",
      text: "console.log(window);"
    },

    {
      type: "heading",
      text: "Document Object"
    },
    {
      type: "paragraph",
      text: "document is inside window and represents the whole HTML page."
    },
    {
      type: "code",
      language: "javascript",
      text: "console.log(document);"
    },

    
    {
      type: "heading",
      text: "Access Element by ID"
    },
    {
      type: "paragraph",
      text: "Used to select a single element using id."
    },
    {
      type: "code",
      language: "javascript",
      text: "let heading = document.getElementById('title');"
    },

    {
      type: "heading",
      text: "Access Element by Class"
    },
    {
      type: "code",
      language: "javascript",
      text: "let items = document.getElementsByClassName('box');"
    },

    {
      type: "heading",
      text: "Access Element by Tag"
    },
    {
      type: "code",
      language: "javascript",
      text: "let paragraphs = document.getElementsByTagName('p');"
    },

    {
      type: "heading",
      text: "querySelector()"
    },
    {
      type: "paragraph",
      text: "Selects the first matching element."
    },
    {
      type: "code",
      language: "javascript",
      text: "let btn = document.querySelector('.btn');"
    },

    {
      type: "heading",
      text: "querySelectorAll()"
    },
    {
      type: "paragraph",
      text: "Selects all matching elements."
    },
    {
      type: "code",
      language: "javascript",
      text: "let allBtns = document.querySelectorAll('.btn');"
    },

    {
  type: "heading",
  text: "DOM Traversing"
},
{
  type: "paragraph",
  text: "DOM traversing means moving between elements like parent, child, and sibling."
},

{
  type: "heading",
  text: "parentNode"
},
{
  type: "paragraph",
  text: "Gets the parent element."
},
{
  type: "code",
  language: "javascript",
  text: "let child = document.getElementById('child');\nconsole.log(child.parentNode);"
},

{
  type: "heading",
  text: "childNodes"
},
{
  type: "paragraph",
  text: "Returns all child nodes including text, spaces, and elements."
},
{
  type: "code",
  language: "javascript",
  text: "let parent = document.getElementById('parent');\nconsole.log(parent.childNodes);"
},

{
  type: "paragraph",
  text: "Important: childNodes also counts spaces and line breaks."
},

{
  type: "heading",
  text: "children"
},
{
  type: "paragraph",
  text: "Returns only HTML elements (not spaces or text)."
},
{
  type: "code",
  language: "javascript",
  text: "console.log(parent.children);"
},

{
  type: "heading",
  text: "firstChild"
},
{
  type: "paragraph",
  text: "Gets the first child node."
},
{
  type: "code",
  language: "javascript",
  text: "console.log(parent.firstChild);"
},

{
  type: "heading",
  text: "lastChild"
},
{
  type: "paragraph",
  text: "Gets the last child node."
},
{
  type: "code",
  language: "javascript",
  text: "console.log(parent.lastChild);"
},

{
  type: "heading",
  text: "firstElementChild"
},
{
  type: "paragraph",
  text: "Gets the first HTML element child."
},
{
  type: "code",
  language: "javascript",
  text: "console.log(parent.firstElementChild);"
},

{
  type: "heading",
  text: "lastElementChild"
},
{
  type: "paragraph",
  text: "Gets the last HTML element child."
},
{
  type: "code",
  language: "javascript",
  text: "console.log(parent.lastElementChild);"
},

{
  type: "heading",
  text: "nextSibling"
},
{
  type: "paragraph",
  text: "Gets the next node."
},
{
  type: "code",
  language: "javascript",
  text: "let item = document.getElementById('item1');\nconsole.log(item.nextSibling);"
},

{
  type: "heading",
  text: "previousSibling"
},
{
  type: "paragraph",
  text: "Gets the previous node."
},
{
  type: "code",
  language: "javascript",
  text: "console.log(item.previousSibling);"
},

{
  type: "heading",
  text: "nextElementSibling"
},
{
  type: "paragraph",
  text: "Gets the next HTML element only."
},
{
  type: "code",
  language: "javascript",
  text: "console.log(item.nextElementSibling);"
},

{
  type: "heading",
  text: "previousElementSibling"
},
{
  type: "paragraph",
  text: "Gets the previous HTML element only."
},
{
  type: "code",
  language: "javascript",
  text: "console.log(item.previousElementSibling);"
},

{
  type: "heading",
  text: "Difference Between childNodes and children"
},
{
  type: "summary",
  items: [
    "childNodes = returns everything (elements + text + spaces)",
    "children = returns only HTML elements"
  ]
},

{
  type: "code",
  language: "javascript",
  text: "<div id='parent'>\n   <p>Hello</p>\n   <h1>World</h1>\n</div>"
},

{
  type: "paragraph",
  text: "Here childNodes may count spaces also, but children will only count p and h1."
},

    {
      type: "heading",
      text: "Changing Text"
    },
    {
      type: "code",
      language: "javascript",
      text: "document.getElementById('title').textContent = 'Hello World';"
    },

    {
      type: "heading",
      text: "Changing HTML"
    },
    {
      type: "code",
      language: "javascript",
      text: "document.getElementById('box').innerHTML = '<h1>New Heading</h1>';"
    },

    {
      type: "heading",
      text: "Changing Styles"
    },
    {
      type: "code",
      language: "javascript",
      text: "document.getElementById('title').style.color = 'red';"
    },

    {
      type: "heading",
      text: "Changing Attributes"
    },
    {
      type: "code",
      language: "javascript",
      text: "let img = document.querySelector('img');\nimg.setAttribute('src', 'new.jpg');"
    },

    {
      type: "heading",
      text: "Getting Attributes"
    },
    {
      type: "code",
      language: "javascript",
      text: "console.log(img.getAttribute('src'));"
    },

    {
      type: "heading",
      text: "Creating New Element"
    },
    {
      type: "code",
      language: "javascript",
      text: "let p = document.createElement('p');\np.textContent = 'New Paragraph';"
    },

    {
      type: "heading",
      text: "Adding Element"
    },
    {
      type: "code",
      language: "javascript",
      text: "document.body.appendChild(p);"
    },

    {
      type: "heading",
      text: "Removing Element"
    },
    {
      type: "code",
      language: "javascript",
      text: "let box = document.getElementById('box');\nbox.remove();"
    },

    {
      type: "heading",
      text: "Event Handling"
    },
    {
      type: "paragraph",
      text: "Events are actions like click, hover, input, etc."
    },
    {
      type: "code",
      language: "javascript",
      text: "let btn = document.getElementById('btn');\n\nbtn.onclick = function(){\n  alert('Button clicked');\n};"
    },

    {
      type: "heading",
      text: "addEventListener()"
    },
    {
      type: "paragraph",
      text: "Modern and better way to handle events."
    },
    {
      type: "code",
      language: "javascript",
      text: "btn.addEventListener('click', function(){\n  console.log('Clicked');\n});"
    },

    {
      type: "heading",
      text: "Input Value Access"
    },
    {
      type: "code",
      language: "javascript",
      text: "let input = document.getElementById('username');\nconsole.log(input.value);"
    },

    {
      type: "heading",
      text: "Real-world Example"
    },
    {
      type: "code",
      language: "javascript",
      text: "let username = 'Rahul';\n\ndocument.getElementById('name').textContent = username;"
    },
    {
      type: "paragraph",
      text: "Used in profile pages, chat apps, dashboards, forms, etc."
    },

    {
      type: "heading",
      text: "Quick Revision"
    },
    {
      type: "summary",
      items: [
        "forEach = loop through array",
        "map = transform array",
        "filter = select data",
        "reduce = combine data",
        "window = browser object",
        "document = webpage object",
        "getElementById = select by id",
        "querySelector = select first element",
        "textContent = change text",
        "innerHTML = change HTML",
        "style = change CSS",
        "createElement = create element",
        "appendChild = add element",
        "remove = delete element",
        "addEventListener = handle events"
      ]
    },

    {
      type: "heading",
      text: "Practice Questions"
    },
    {
      type: "summary",
      items: [
        "Use map() to double all numbers",
        "Use filter() to get even numbers",
        "Use reduce() to find total price",
        "Change heading text using DOM",
        "Create a button and add click event",
        "Create a paragraph using createElement and append it"
      ]
    }

  ]
},

{
  id: 6,
  slug: "javascript-events-complete-guide",
  title: "JavaScript Events (Complete Guide)",
  date: "05 July 2026",

  description:
    "JavaScript events including mouse events, keyboard events, form events, window events, event object, preventDefault(), stopPropagation(), and addEventListener.",

  content: [

    {
      type: "heading",
      text: "What are Events?"
    },
    {
      type: "paragraph",
      text: "Events are actions performed by the user or browser. JavaScript listens to these actions and runs code when they happen."
    },
    {
      type: "paragraph",
      text: "Examples: Clicking a button, typing in an input, moving the mouse, submitting a form, or loading a page."
    },

    {
      type: "heading",
      text: "Why Do We Use Events?"
    },
    {
      type: "paragraph",
      text: "Without events, a webpage cannot react to user actions. Events make websites interactive."
    },
    {
      type: "code",
      language: "javascript",
      text: "alert('Hello');"
    },
    {
      type: "paragraph",
      text: "This runs immediately. But with events, JavaScript waits until the user performs an action."
    },

    {
      type: "heading",
      text: "Ways to Add Events"
    },
    {
      type: "paragraph",
      text: "There are three common ways to add events in JavaScript."
    },

    {
      type: "heading",
      text: "1. Inline Event (Not Recommended)"
    },
    {
      type: "code",
      language: "html",
      text: "<button onclick=\"alert('Hello')\">Click</button>"
    },
    {
      type: "paragraph",
      text: "Here JavaScript is written directly inside HTML. This works, but it mixes HTML and JavaScript, making code difficult to manage."
    },

    {
      type: "heading",
      text: "2. JavaScript Property"
    },
    {
      type: "code",
      language: "javascript",
      text: "let btn = document.getElementById('btn');\n\nbtn.onclick = function(){\n  alert('Button Clicked');\n};"
    },
    {
      type: "paragraph",
      text: "Here we first select the element and then attach the event in JavaScript."
    },

    {
      type: "heading",
      text: "3. addEventListener() (Best Method)"
    },
    {
      type: "code",
      language: "javascript",
      text: "let btn = document.getElementById('btn');\n\nbtn.addEventListener('click', function(){\n  alert('Button Clicked');\n});"
    },
    {
      type: "paragraph",
      text: "This is the modern and recommended way because multiple events can be attached to the same element."
    },

    {
      type: "heading",
      text: "click"
    },
    {
      type: "paragraph",
      text: "Runs when an element is clicked."
    },
    {
      type: "code",
      language: "javascript",
      text: "btn.addEventListener('click', function(){\n  console.log('Clicked');\n});"
    },

    {
      type: "heading",
      text: "dblclick"
    },
    {
      type: "paragraph",
      text: "Runs when the user double-clicks."
    },
    {
      type: "code",
      language: "javascript",
      text: "btn.addEventListener('dblclick', function(){\n  console.log('Double Click');\n});"
    },

    {
      type: "heading",
      text: "mouseover"
    },
    {
      type: "paragraph",
      text: "Runs when the mouse enters an element."
    },
    {
      type: "code",
      language: "javascript",
      text: "box.addEventListener('mouseover', function(){\n  box.style.background='yellow';\n});"
    },

    {
      type: "heading",
      text: "mouseout"
    },
    {
      type: "paragraph",
      text: "Runs when the mouse leaves an element."
    },
    {
      type: "code",
      language: "javascript",
      text: "box.addEventListener('mouseout', function(){\n  box.style.background='white';\n});"
    },

    {
      type: "heading",
      text: "mousedown"
    },
    {
      type: "paragraph",
      text: "Runs when the mouse button is pressed."
    },
    {
      type: "code",
      language: "javascript",
      text: "box.addEventListener('mousedown', function(){\n  console.log('Mouse Down');\n});"
    },

    {
      type: "heading",
      text: "mouseup"
    },
    {
      type: "paragraph",
      text: "Runs when the mouse button is released."
    },
    {
      type: "code",
      language: "javascript",
      text: "box.addEventListener('mouseup', function(){\n  console.log('Mouse Up');\n});"
    },

    {
      type: "heading",
      text: "mousemove"
    },
    {
      type: "paragraph",
      text: "Runs whenever the mouse moves."
    },
    {
      type: "code",
      language: "javascript",
      text: "document.addEventListener('mousemove', function(){\n  console.log('Moving');\n});"
    },

    {
      type: "heading",
      text: "keydown"
    },
    {
      type: "paragraph",
      text: "Runs when any key is pressed."
    },
    {
      type: "code",
      language: "javascript",
      text: "document.addEventListener('keydown', function(event){\n  console.log(event.key);\n});"
    },

    {
      type: "heading",
      text: "keyup"
    },
    {
      type: "paragraph",
      text: "Runs when the key is released."
    },
    {
      type: "code",
      language: "javascript",
      text: "document.addEventListener('keyup', function(event){\n  console.log(event.key);\n});"
    },

    {
      type: "heading",
      text: "input"
    },
    {
      type: "paragraph",
      text: "Runs whenever the input value changes."
    },
    {
      type: "code",
      language: "javascript",
      text: "input.addEventListener('input', function(){\n  console.log(input.value);\n});"
    },

    {
      type: "heading",
      text: "change"
    },
    {
      type: "paragraph",
      text: "Runs after the value is changed and confirmed."
    },
    {
      type: "code",
      language: "javascript",
      text: "input.addEventListener('change', function(){\n  console.log(input.value);\n});"
    },

    {
      type: "heading",
      text: "focus"
    },
    {
      type: "paragraph",
      text: "Runs when the input gets focus."
    },
    {
      type: "code",
      language: "javascript",
      text: "input.addEventListener('focus', function(){\n  input.style.background='lightyellow';\n});"
    },

    {
      type: "heading",
      text: "blur"
    },
    {
      type: "paragraph",
      text: "Runs when the input loses focus."
    },
    {
      type: "code",
      language: "javascript",
      text: "input.addEventListener('blur', function(){\n  input.style.background='white';\n});"
    },

    {
      type: "heading",
      text: "submit"
    },
    {
      type: "paragraph",
      text: "Runs when a form is submitted."
    },
    {
      type: "code",
      language: "javascript",
      text: "form.addEventListener('submit', function(event){\n  event.preventDefault();\n  console.log('Form Submitted');\n});"
    },

    {
      type: "heading",
      text: "load"
    },
    {
      type: "paragraph",
      text: "Runs after the page is fully loaded."
    },
    {
      type: "code",
      language: "javascript",
      text: "window.addEventListener('load', function(){\n  console.log('Page Loaded');\n});"
    },

    {
      type: "heading",
      text: "resize"
    },
    {
      type: "paragraph",
      text: "Runs when the browser window size changes."
    },
    {
      type: "code",
      language: "javascript",
      text: "window.addEventListener('resize', function(){\n  console.log(window.innerWidth);\n});"
    },

    {
      type: "heading",
      text: "scroll"
    },
    {
      type: "paragraph",
      text: "Runs whenever the page is scrolled."
    },
    {
      type: "code",
      language: "javascript",
      text: "window.addEventListener('scroll', function(){\n  console.log(window.scrollY);\n});"
    },

    {
      type: "heading",
      text: "Event Object"
    },
    {
      type: "paragraph",
      text: "The event object contains information about the event such as key pressed, mouse position, target element, and more."
    },
    {
      type: "code",
      language: "javascript",
      text: "btn.addEventListener('click', function(event){\n  console.log(event.target);\n});"
    },

    {
      type: "heading",
      text: "this Keyword"
    },
    {
      type: "paragraph",
      text: "Inside a normal event function, this refers to the element that triggered the event."
    },
    {
      type: "code",
      language: "javascript",
      text: "btn.addEventListener('click', function(){\n  this.style.background='green';\n});"
    },

    {
      type: "heading",
      text: "preventDefault()"
    },
    {
      type: "paragraph",
      text: "Stops the browser's default behavior."
    },
    {
      type: "code",
      language: "javascript",
      text: "form.addEventListener('submit', function(event){\n  event.preventDefault();\n});"
    },

    {
      type: "heading",
      text: "stopPropagation()"
    },
    {
      type: "paragraph",
      text: "Stops the event from moving to parent elements."
    },
    {
      type: "code",
      language: "javascript",
      text: "button.addEventListener('click', function(event){\n  event.stopPropagation();\n});"
    },

    {
      type: "heading",
      text: "Quick Revision"
    },
    {
      type: "summary",
      items: [
        "Inline Event = old method",
        "onclick = JavaScript property",
        "addEventListener = best method",
        "click = mouse click",
        "dblclick = double click",
        "mouseover / mouseout = mouse enter & leave",
        "mousedown / mouseup = mouse press & release",
        "mousemove = mouse movement",
        "keydown / keyup = keyboard events",
        "input / change = input field events",
        "focus / blur = input focus events",
        "submit = form submit",
        "load / resize / scroll = window events",
        "event = information about event",
        "preventDefault() = stop default action",
        "stopPropagation() = stop event bubbling"
      ]
    },

    {
      type: "heading",
      text: "Practice Questions"
    },
    {
      type: "summary",
      items: [
        "Change text when button is clicked.",
        "Change box color on mouseover.",
        "Show pressed key using keydown.",
        "Display input value while typing.",
        "Prevent a form from refreshing the page.",
        "Print page scroll position using scroll event."
      ]
    }

  ]
},
{
  "id": 7,
  "slug": "javascript-prototypes-and-classes-beginner-guide",
  "title": "JavaScript Prototypes & Classes (Easy Beginner Guide)",
  "date": "07 July 2026",

  "description": "Super simple guide to JavaScript Prototypes, Classes, this, extends, and super with easy real-world examples.",

  "content": [
    {
      "type": "heading",
      "text": "1. What is a Prototype? (The Backup Object)"
    },
    {
      "type": "paragraph",
      "text": "Think of a prototype as a 'backup' object. If you ask an object for a property or method and it doesn't have it, JavaScript will look inside its backup (prototype) object."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "let grandfather = { gold: true };\nlet father = { cash: 1000 };\n\n// Making grandfather the backup (prototype) of father\nfather.__proto__ = grandfather;\n\nconsole.log(father.cash); // 1000 (his own)\nconsole.log(father.gold); // true (taken from backup/prototype)"
    },

    {
      "type": "heading",
      "text": "2. What is a Class? (The Blueprint)"
    },
    {
      "type": "paragraph",
      "text": "A class is just a template or a 'blank form'. Instead of creating 100 separate objects for 100 users manually, you make one Class and stamp out objects easily."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "class Student {\n  // constructor runs automatically to fill the form\n  constructor(name) {\n    this.name = name;\n  }\n}\n\n// Creating real objects from the template\nlet s1 = new Student('Rahul');\nlet s2 = new Student('Amit');"
    },

    {
      "type": "heading",
      "text": "3. The 'this' Keyword (Mera Khud Ka)"
    },
    {
      "type": "paragraph",
      "text": "The word 'this' simply means 'the current object'. Inside a class template, 'this' acts as a placeholder for whichever object is being made right now."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "class Toy {\n  constructor(color) {\n    this.color = color; // 'this' means the current toy's color\n  }\n}\nlet redToy = new Toy('Red'); // Here, 'this' becomes redToy"
    },

    {
      "type": "heading",
      "text": "4. What is extends? (Copy-Paste Features)"
    },
    {
      "type": "paragraph",
      "text": "When you want to create a new class but want to copy everything from an old class, you use 'extends'. It connects a Child class to a Parent class."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "class Phone {\n  call() { console.log('Calling...'); }\n}\n\n// SmartPhone copies everything from Phone\nclass SmartPhone extends Phone {\n  browse() { console.log('Browsing internet...'); }\n}\n\nlet myPhone = new SmartPhone();\nmyPhone.call();   // Works! (Copied from Parent)\nmyPhone.browse(); // Works! (Its own feature)"
    },

    {
      "type": "heading",
      "text": "5. The super() Keyword (Inform the Parent)"
    },
    {
      "type": "paragraph",
      "text": "If a Child class adds its own new constructor, it MUST call super() first. It is like telling the Parent class: 'Hey, initialize your properties first, then I will add mine.'"
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "class Parent {\n  constructor(lastName) {\n    this.lastName = lastName;\n  }\n}\n\nclass Child extends Parent {\n  constructor(firstName, lastName) {\n    super(lastName); // Passes lastName to Parent's constructor\n    this.firstName = firstName;\n  }\n}\n\nlet person = new Child('Aryan', 'Sharma');"
    },

    {
      "type": "heading",
      "text": "Quick Revision"
    },
    
    {
      "type": "summary",
      "items": [
        "Prototype = The backup object where JS looks if something is missing.",
        "Class = A reusable blueprint/template to create objects.",
        "this = Refers to the specific object currently using the code.",
        "extends = Keyword used to inherit/copy features from a parent class.",
        "super() = Must-call function to setup the parent class constructor inside a child."
      ]
    },

    {
      "type": "heading",
      "text": "Practice Tasks"
    },
    {
      "type": "summary",
      "items": [
        "Create two objects 'human' and 'coder'. Connect them using __proto__.",
        "Make a simple 'User' class that sets a 'username' using 'this'.",
        "Create an 'Animal' parent class and extend a 'Dog' child class from it.",
        "Add a new constructor to 'Dog' and use super() to pass a name to 'Animal'."
      ]
    },
    
  {
    "type": "heading",
    "text": "6. setTimeout() (Run Code After Some Time)"
  },
  {
    "type": "paragraph",
    "text": "setTimeout() runs a function only once after a specified delay. The time is given in milliseconds (1000ms = 1 second). JavaScript doesn't stop while waiting; it continues executing the remaining code."
  },
  {
    "type": "code",
    "language": "javascript",
    "text": "console.log('Start');\n\nsetTimeout(() => {\n  console.log('Hello!');\n}, 2000);\n\nconsole.log('End');"
  },

  {
    "type": "heading",
    "text": "7. clearTimeout()"
  },
  {
    "type": "paragraph",
    "text": "setTimeout() returns a Timer ID. If you don't want the scheduled function to run, use clearTimeout() with that Timer ID."
  },
  {
    "type": "code",
    "language": "javascript",
    "text": "let timer = setTimeout(() => {\n  console.log('Hello');\n}, 5000);\n\nclearTimeout(timer);"
  },

  {
    "type": "heading",
    "text": "8. setInterval() (Repeat Again and Again)"
  },
  {
    "type": "paragraph",
    "text": "setInterval() runs a function repeatedly after every specified interval until it is stopped."
  },
  {
    "type": "code",
    "language": "javascript",
    "text": "let timer = setInterval(() => {\n  console.log('Running...');\n}, 1000);"
  },

  {
    "type": "heading",
    "text": "9. clearInterval()"
  },
  {
    "type": "paragraph",
    "text": "Use clearInterval() to stop a running interval. Pass the Timer ID returned by setInterval()."
  },
  {
    "type": "code",
    "language": "javascript",
    "text": "let timer = setInterval(() => {\n  console.log('Running...');\n}, 1000);\n\nsetTimeout(() => {\n  clearInterval(timer);\n}, 5000);"
  },

  {
    "type": "heading",
    "text": "Quick Revision"
  },
  {
    "type": "summary",
    "items": [
      "setTimeout() → Runs once after a delay.",
      "clearTimeout() → Cancels a timeout.",
      "setInterval() → Runs repeatedly.",
      "clearInterval() → Stops the interval.",
      "Time is always in milliseconds."
    ]
  },

  {
    "type": "heading",
    "text": "Practice Tasks"
  },
  {
    "type": "summary",
    "items": [
      "Print a message after 3 seconds using setTimeout().",
      "Create a counter that prints every second using setInterval().",
      "Stop the counter after 5 seconds using clearInterval()."
    ]
  }
    
  ]
},
{
  "id": 8,
  "slug": "javascript-async-callbacks-promises-beginner-guide",
  "title": "JavaScript Async, Callbacks & Promises (Easy Beginner Guide)",
  "date": "12 July 2026",

  "description": "Simple beginner guide to Synchronous, Asynchronous, Callback, Callback Hell, Promise, then() and catch() with easy real-world examples.",

  "content": [
    {
      "type": "heading",
      "text": "1. Synchronous JavaScript (One By One)"
    },
    {
      "type": "paragraph",
      "text": "JavaScript is synchronous by default. It executes one line at a time. The next line will not run until the current line finishes."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "console.log('Step 1');\nconsole.log('Step 2');\nconsole.log('Step 3');"
    },

    {
      "type": "heading",
      "text": "2. Asynchronous JavaScript (Don't Wait)"
    },
    {
      "type": "paragraph",
      "text": "Some tasks take time, like fetching data or waiting for a timer. JavaScript doesn't stop for them. It continues running the next lines and comes back later when the task is finished."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "console.log('Start');\n\nsetTimeout(() => {\n  console.log('Hello after 2 seconds');\n}, 2000);\n\nconsole.log('End');"
    },

    {
      "type": "heading",
      "text": "3. Callback Function (Do This After My Work)"
    },
    {
      "type": "paragraph",
      "text": "A callback is simply a function passed to another function so it can be executed later when the main task is completed."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "function login(callback) {\n  setTimeout(() => {\n    console.log('Login Successful');\n    callback();\n  }, 2000);\n}\n\nlogin(() => {\n  console.log('Open Dashboard');\n});"
    },

    {
      "type": "heading",
      "text": "4. Callback Hell (Too Many Nested Callbacks)"
    },
    {
      "type": "paragraph",
      "text": "When one callback is placed inside another callback again and again, the code becomes difficult to read and maintain. This is called Callback Hell."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "login(() => {\n  getProfile(() => {\n    getPosts(() => {\n      console.log('Dashboard Ready');\n    });\n  });\n});"
    },

    {
      "type": "heading",
      "text": "5. Promise (A Better Way)"
    },
    {
      "type": "paragraph",
      "text": "A Promise represents the future result of an asynchronous task. Instead of passing callbacks everywhere, a function returns a Promise which can later be handled using then() or catch()."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "function login() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      console.log('Login Successful');\n      resolve();\n    }, 2000);\n  });\n}"
    },

    {
      "type": "heading",
      "text": "6. then() (Run After Success)"
    },
    {
      "type": "paragraph",
      "text": "then() runs only when the Promise is successfully completed (resolved)."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "login()\n  .then(() => {\n    console.log('Open Dashboard');\n  });"
    },

    {
      "type": "heading",
      "text": "7. catch() (Handle Errors)"
    },
    {
      "type": "paragraph",
      "text": "If something goes wrong and the Promise is rejected, catch() receives the error so your application doesn't crash."
    },
    {
      "type": "code",
      "language": "javascript",
      "text": "function login() {\n  return new Promise((resolve, reject) => {\n    let success = false;\n\n    if (success) {\n      resolve('Login Successful');\n    } else {\n      reject('Login Failed');\n    }\n  });\n}\n\nlogin()\n  .then((res) => {\n    console.log(res);\n  })\n  .catch((err) => {\n    console.log(err);\n  });"
    },

    {
      "type": "heading",
      "text": "Quick Revision"
    },
    {
      "type": "summary",
      "items": [
        "Synchronous = Runs one line at a time.",
        "Asynchronous = Doesn't wait for slow tasks.",
        "Callback = Function passed into another function to run later.",
        "Callback Hell = Too many nested callbacks make code messy.",
        "Promise = Cleaner way to handle asynchronous work.",
        "then() = Runs when Promise is resolved.",
        "catch() = Runs when Promise is rejected."
      ]
    },

    {
      "type": "heading",
      "text": "Practice Tasks"
    },
    {
      "type": "summary",
      "items": [
        "Print 'Hello' after 2 seconds using setTimeout().",
        "Create a function that accepts a callback and runs it after 1 second.",
        "Write three nested callbacks to understand Callback Hell.",
        "Convert the callback example into a Promise.",
        "Use then() to print 'Dashboard Opened'.",
        "Reject a Promise and handle the error using catch()."
      ]
    }
  ]
}
];