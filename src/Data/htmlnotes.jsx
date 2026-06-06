export const htmlnotes = [
      {
    id: 1,
    slug: "introduction-to-html5",
    title: "Introduction to HTML5",
    date: "01 June 2026",

    description:
      "Overview of HTML5, website structure, boilerplate code and basic tags.",

    content: [
      {
        type: "heading",
        text: "What is HTML?"
      },

      {
        type: "paragraph",
        text: "HTML (HyperText Markup Language) is used to create the structure of a website."
      },

      {
        type: "paragraph",
        text: "With HTML we can create headings, paragraphs, images, links and forms."
      },

      {
        type: "image",
        src: "/htmlstracture.webp",
        alt: "HTML Structure"
      },

      {
        type: "heading",
        text: "Why Do We Use HTML?"
      },

      {
        type: "paragraph",
        text: "HTML helps browsers understand what content should appear on a webpage."
      },

      {
        type: "heading",
        text: "HTML Boilerplate Code"
      },

      {
        type: "code",
        language: "html",
        text:
         `
         <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
  <title>My First Website</title>
</head>
<body>

</body>
</html>

`
      },

      {
        type: "heading",
        text: "Understanding Boilerplate"
      },

      {
        type: "list",
        items: [
          "<!DOCTYPE html> → Defines HTML5 document",
          "<html> → Root element",
          "<head> → Stores page information",
          "<body> → Visible webpage content",
          "<title> → Browser tab title",
          "charset → Character encoding",
          "viewport → Mobile responsiveness"
        ]
      },

      {
        type: "heading",
        text: "Heading Tag"
      },

      {
        type: "code",
        language: "html",
        text: `<h1>Welcome Students</h1>`
      },

      {
        type: "output",
        text: "Welcome Students"
      },

      {
        type: "heading",
        text: "Paragraph Tag"
      },

      {
        type: "code",
        language: "html",
        text: `<p>Welcome to MIO Institute.</p>`
      },

      {
        type: "output",
        text: "Welcome to MIO Institute."
      },

      {
        type: "heading",
        text: "Practice Project"
      },

      {
        type: "code",
        language: "html",
        text: `<!DOCTYPE html>
<html lang="en">
<head>
  <title>MIO Institute</title>
</head>
<body>

  <h1>MIO Modern Computers Institute</h1>

  <p>
    Learn MERN Stack Development from Basics to Advanced.
  </p>

  <img src="student.jpg" alt="Student">

  <button>Join Us</button>

</body>
</html>`
      },

      {
        type: "output",
        html: `
          <h1>MIO Modern Computers Institute</h1>
          <p>Learn MERN Stack Development from Basics to Advanced.</p>
          <button>Join Us</button>
        `
      },

      {
        type: "summary",
        items: [
          "What is HTML",
          "Why HTML is Used",
          "Boilerplate Code",
          "Meta Tags",
          "Heading Tag",
          "Paragraph Tag",
          "Image Tag"
        ]
      },
        {
      type: "feedback"
    }
    ]
  },

{
  id: 2,
  slug: "html-lists-and-forms",
  title: "HTML Lists & Forms",
  date: "02 June 2026",

  description:
    "Learn HTML lists (ordered, unordered, description) and forms (input, submit, etc).",

  content: [
    {
      type: "heading",
      text: "HTML Lists"
    },

    {
      type: "paragraph",
      text: "HTML lists are used to group items in a structured way."
    },

    {
      type: "heading",
      text: "Types of Lists"
    },

    {
      type: "list",
      items: [
        "Ordered List (ol)",
        "Unordered List (ul)",
        "Description List (dl)"
      ]
    },

    {
      type: "heading",
      text: "Unordered List Example"
    },

    {
      type: "code",
      language: "html",
      text: `<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`
    },

    {
      type: "output",
      html: `
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      `
    },

    {
      type: "heading",
      text: "Ordered List Example"
    },

    {
      type: "code",
      language: "html",
      text: `<ol>
  <li>First Step</li>
  <li>Second Step</li>
  <li>Third Step</li>
</ol>`
    },

    {
      type: "output",
      html: `
        <ol style="padding: 20px;">
         <li>First Step</li>
          <li>Second Step</li>
          <li>Third Step</li>
        </ol>
      `
    },

    {
      type: "heading",
      text: "Description List (dl) Example"
    },

    {
      type: "paragraph",
      text: "Description list is used to define terms and their descriptions."
    },

    {
      type: "code",
      language: "html",
      text: `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language - structure of webpage</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets - styling of webpage</dd>

  <dt>JS</dt>
  <dd>JavaScript - adds interactivity</dd>
</dl>`
    },

    {
      type: "output",
      html: `
        <dl>
          <dt>HTML</dt>
          <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HyperText Markup Language</dd>

          <dt>CSS</dt>
          <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cascading Style Sheets</dd>

          <dt>JS</dt>
          <dd>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript for interactivity</dd>
        </dl>
      `
    },

    {
      type: "heading",
      text: "HTML Forms"
    },

    {
      type: "paragraph",
      text: "HTML forms are used to collect user input like name, email, password etc."
    },

    {
      type: "heading",
      text: "Form Example"
    },

   {
  type: "code",
  language: "html",
  text: `<form>

  <!-- NAME -->
  <label>Name:</label>
  <input type="text" placeholder="Enter your name">

  <br><br>

  <!-- EMAIL -->
  <label>Email:</label>
  <input type="email" placeholder="Enter your email">

  <br><br>

  <!-- PASSWORD -->
  <label>Password:</label>
  <input type="password" placeholder="Enter password">

  <br><br>

  <!-- NUMBER -->
  <label>Age:</label>
  <input type="number" placeholder="Enter your age">

  <br><br>

  <!-- RADIO BUTTON -->
  <label>Gender:</label><br>
  <input type="radio" name="gender"> Male
  <input type="radio" name="gender"> Female
  <input type="radio" name="gender"> Other

  <br><br>

  <!-- CHECKBOX -->
  <label>Skills:</label><br>
  <input type="checkbox"> HTML
  <input type="checkbox"> CSS
  <input type="checkbox"> JavaScript

  <br><br>

  <!-- SELECT OPTION -->
  <label>Course:</label>
  <select>
    <option>Frontend</option>
    <option>Backend</option>
    <option>MERN Stack</option>
  </select>

  <br><br>

  <!-- BUTTONS -->
  <button type="submit">Submit</button>
  <input type="reset" value="Reset">

</form>`
},

   {
  type: "output",
  html: `
    <form>

      <label>Name:</label>
      <input type="text" placeholder="Enter your name">
      <br><br>

      <label>Email:</label>
      <input type="email" placeholder="Enter your email">
      <br><br>

      <label>Password:</label>
      <input type="password" placeholder="Enter password">
      <br><br>

      <label>Age:</label>
      <input type="number" placeholder="Enter your age">
      <br><br>

      <label>Gender:</label><br>
      <input type="radio" name="gender"> Male
      <input type="radio" name="gender"> Female
      <input type="radio" name="gender"> Other
      <br><br>

      <label>Skills:</label><br>
      <input type="checkbox"> HTML
      <input type="checkbox"> CSS
      <input type="checkbox"> JavaScript
      <br><br>

      <label>Course:</label>
      <select>
        <option>Frontend</option>
        <option>Backend</option>
        <option>MERN Stack</option>
      </select>

      <br><br>

      <button type="submit">Submit</button>
      <button type="reset">Reset</button>

    </form>
  `
},

    {
      type: "heading",
      text: "Important Form Inputs"
    },

    {
      type: "list",
      items: [
        "<input type='text'> → Text input",
        "<input type='email'> → Email input",
        "<input type='password'> → Password input",
        "<input type='radio'> → Single selection",
        "<input type='checkbox'> → Multiple selection",
        "<button> → Submit button",
        "required → Makes a field mandatory before submitting the form"
      ]
    },

    {
      type: "summary",
      items: [
        "HTML Lists",
        "Ordered List (ol)",
        "Unordered List (ul)",
        "Description List (dl)",
        "HTML Forms",
        "Input Types",
        "Form Submission"
      ]
    },
         {
      type: "feedback"
    }
  ]
},
{
  id: 3,
  slug: "html-tables-and-semantic-tags",
  title: "HTML Tables & Semantic Tags",
  date: "03 June 2026",

  description:
    "Learn HTML Tables and Semantic Tags in a very simple way with examples.",

  content: [
    {
      type: "heading",
      text: "HTML Tables"
    },

    {
      type: "paragraph",
      text: "HTML tables are used to display data in rows and columns."
    },

    {
      type: "heading",
      text: "Basic Table Structure"
    },

    {
      type: "code",
      language: "html",
      text: `<table border="1">
<thead>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Course</th>
  </tr>
  </thead>

  <tbody>
  <tr>
    <td>Rahul</td>
    <td>18</td>
    <td>MERN</td>
  </tr>

  <tr>
    <td>Aman</td>
    <td>20</td>
    <td>Frontend</td>
  </tr>
</tbody>

</table>`
    },

    {
      type: "output",
      html: `
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
          </tr>

          <tr>
            <td>Rahul</td>
            <td>18</td>
            <td>MERN</td>
          </tr>

          <tr>
            <td>Aman</td>
            <td>20</td>
            <td>Frontend</td>
          </tr>
        </table>
      `
    },

    {
      type: "heading",
      text: "Important Table Tags"
    },

    {
      type: "list",
      items: [
        "<table> → Creates table",
        "<thead> → Creates table header",
        "<tr> → Table row",
        "<th> → Table heading",
        "<td> → Table data",
        "<tbody> → Creates table  body",
        "<tfoot> → Creates table footer",
      ]
    },

    {
      type: "heading",
      text: "HTML Semantic Tags"
    },

    {
      type: "paragraph",
      text: "Semantic tags clearly describe the meaning of content in HTML."
    },

    {
      type: "image",
      src: "/semantipic.jpg",
      alt: "HTML Semantic Tags Diagram"
    },

    {
      type: "heading",
      text: "Why Semantic Tags are Important?"
    },

    {
      type: "list",
      items: [
        "Makes code easy to read",
        "Improves SEO",
        "Helps browsers understand layout",
        "Better accessibility"
      ]
    },

    {
      type: "heading",
      text: "Common Semantic Tags"
    },

    {
      type: "code",
      language: "html",
      text: `<header>Header Section</header>

<nav>Navigation Menu</nav>

<main>Main Content</main>

<section>Section of page</section>

<article>Independent content</article>

<footer>Footer Section</footer>`
    },

    {
      type: "output",
      html: `
        <header>Header Section</header>
        <nav>Navigation Menu</nav>
        <main>Main Content</main>
        <section>Section of page</section>
        <article>Independent content</article>
        <footer>Footer Section</footer>
      `
    },

    {
      type: "summary",
      items: [
        "HTML Tables",
        "table, tr, td, th, thead, tbody, tfoot",
        "Rows and Columns",
        "Semantic Tags",
        "header, nav, main, section, article, footer",
        "Why Semantic HTML is important"
      ]
    },
         {
      type: "feedback"
    }
  ]
},

{
  id: 4,
  slug: "html-entities-inline-block-media",
  title: "HTML Entities, Inline & Block Elements",
  date: "04 June 2026",

  description:
    "Learn HTML Entities, Inline Elements, Block Elements, Audio and Video tags.",

  content: [

    {
      type: "heading",
      text: "HTML Entities"
    },

    {
      type: "paragraph",
      text: "HTML Entities are special codes used to display reserved characters and symbols in a webpage."
    },

    {
      type: "paragraph",
      text: "Some characters have a special meaning in HTML, so we cannot write them directly. For such cases we use HTML Entities."
    },

    {
      type: "heading",
      text: "Common HTML Entities"
    },

    {
      type: "code",
      language: "html",
      text: `&lt;  = <
&gt;  = >
&amp; = &
&nbsp; = Space
&copy; = ©
&reg; = ®`
    },

    {
      type: "output",
      html: `
        <p><b>&lt;</b> = <</p>
        <p><b>&gt;</b> = ></p>
        <p><b>&amp;</b> = &</p>
        <p><b>&copy;</b> = ©</p>
        <p><b>&reg;</b> = ®</p>
      `
    },

    {
      type: "heading",
      text: "Why Do We Use Entities?"
    },

    {
      type: "list",
      items: [
        "To display special symbols",
        "To display reserved HTML characters",
        "To avoid browser confusion",
        "To improve content formatting"
      ]
    },

    {
      type: "heading",
      text: "Block Elements"
    },

    {
      type: "paragraph",
      text: "Block Elements always start from a new line and take the full available width."
    },

    {
      type: "code",
      language: "html",
      text: `<h1>Heading</h1>

<p>This is a paragraph.</p>

<div>This is a div.</div>`
    },

    {
      type: "paragraph",
      text: "Each element appears on a new line because these are Block Elements."
    },

    {
      type: "heading",
      text: "Common Block Elements"
    },

    {
      type: "list",
      items: [
        "<h1> to <h6>",
        "<p>",
        "<div>",
        "<section>",
        "<article>",
        "<header>",
        "<footer>"
      ]
    },

    {
      type: "heading",
      text: "Inline Elements"
    },

    {
      type: "paragraph",
      text: "Inline Elements do not start from a new line. They only take the space required by their content."
    },

    {
      type: "code",
      language: "html",
      text: `This is a <span>span tag</span>.

<a href="#">Click Here</a>

<strong>Important Text</strong>`
    },

    {
      type: "paragraph",
      text: "Inline elements stay in the same line unless there is not enough space."
    },

    {
      type: "heading",
      text: "Common Inline Elements"
    },

    {
      type: "list",
      items: [
        "<span>",
        "<a>",
        "<strong>",
        "<em>",
        "<img>",
        "<label>"
      ]
    },

    {
      type: "heading",
      text: "Difference Between Block and Inline Elements"
    },

    {
      type: "list",
      items: [
        "Block Elements start on a new line",
        "Inline Elements stay in the same line",
        "Block Elements take full width",
        "Inline Elements take only required width"
      ]
    },

    {
      type: "heading",
      text: "HTML Audio Tag"
    },

    {
      type: "paragraph",
      text: "The audio tag is used to play audio files directly inside a webpage."
    },

    {
      type: "code",
      language: "html",
      text: `<audio controls>
  <source src="song.mp3" type="audio/mp3">
</audio>`
    },

    {
      type: "paragraph",
      text: "The controls attribute provides Play, Pause and Volume controls."
    },

    {
      type: "heading",
      text: "HTML Video Tag"
    },

    {
      type: "paragraph",
      text: "The video tag is used to display videos directly inside a webpage."
    },

    {
      type: "code",
      language: "html",
      text: `<video width="400" controls>
  <source src="video.mp4" type="video/mp4">
</video>`
    },

    {
      type: "paragraph",
      text: "The controls attribute allows users to Play, Pause and control the video."
    },

    {
      type: "heading",
      text: "Practice Project"
    },

    {
      type: "code",
      language: "html",
      text: `<!DOCTYPE html>
<html>
<body>

<h1>Welcome to MIO Institute</h1>

<p>
Copyright &copy; 2026
</p>

<a href="#">Join Course</a>

<br><br>

<audio controls>
  <source src="song.mp3">
</audio>

<br><br>

<video width="300" controls>
  <source src="video.mp4">
</video>

</body>
</html>`
    },

    {
      type: "output",
      html: `
        <h2>Welcome to MIO Institute</h2>

        <p>Copyright © 2026</p>

        <a href="#">Join Course</a>

        <br><br>

        🎵 Audio Player

        <br><br>

        🎬 Video Player
      `
    },

    {
      type: "summary",
      items: [
        "HTML Entities",
        "Reserved Characters",
        "Special Symbols",
        "Block Elements",
        "Inline Elements",
        "Difference Between Block and Inline",
        "Audio Tag",
        "Video Tag"
      ]
    },

    {
      type: "feedback"
    }

  ]
},
]