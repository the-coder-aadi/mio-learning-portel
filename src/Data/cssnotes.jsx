export const cssnotes = [
    {
id: 5,
slug: "css-introduction-selectors",
title: "Introduction to CSS",
date: "05 June 2026",

description:
"Understand CSS syntax, ways to add CSS, selectors, colors, backgrounds.",

content: [

{
type: "heading",
text: "What is CSS?"
},

{
type: "paragraph",
text: "CSS stands for Cascading Style Sheets. CSS is used to style and design HTML webpages."
},

{
type: "paragraph",
text: "HTML creates the structure of a webpage while CSS controls its appearance such as colors, fonts, spacing, borders, alignment and layouts."
},

{
type: "paragraph",
text: "Without CSS, webpages look very plain. CSS helps make websites attractive and user-friendly."
},

{
type: "heading",
text: "Why Do We Use CSS?"
},

{
type: "list",
items: [
"Add colors to webpages",
"Change fonts and text styles",
"Control spacing and layout",
"Create attractive designs",
"Improve user experience",
"Make websites responsive",
"Separate design from HTML structure"
]
},

{
type: "heading",
text: "CSS Syntax"
},

{
type: "paragraph",
text: "A CSS rule contains three main parts: Selector, Property and Value."
},

{
type: "code",
language: "css",
text: "h1 {\n  color: red;\n}"
},

{
type: "paragraph",
text: "Here, h1 is the selector, color is the property and red is the value."
},

{
type: "heading",
text: "Three Ways To Add CSS"
},

{
type: "heading",
text: "1. Inline CSS"
},

{
type: "paragraph",
text: "Inline CSS is written directly inside the style attribute of an HTML element."
},

{
type: "code",
language: "html",
text: "<h1 style='color:red'>Welcome</h1>"
},

{
type: "output",
html: "<h1 style='color:red'>Welcome</h1>"
},

{
type: "heading",
text: "2. Internal CSS"
},

{
type: "paragraph",
text: "Internal CSS is written inside the style tag in the HTML file."
},

{
type: "code",
language: "html",
text: "<style>\nh1 {\n color: blue;\n}\n</style>\n\n<h1>Welcome</h1>"
},

{
type: "heading",
text: "3. External CSS"
},

{
type: "paragraph",
text: "External CSS is written in a separate .css file and linked with HTML."
},

{
type: "code",
language: "html",
text: "<link rel='stylesheet' href='style.css'>"
},

{
type: "heading",
text: "Selectors in CSS"
},

{
type: "paragraph",
text: "Selectors are used to target HTML elements so that CSS styles can be applied to them."
},

{
type: "heading",
text: "Universal Selector (*)"
},

{
type: "paragraph",
text: "The universal selector selects every element on the webpage."
},

{
type: "code",
language: "html",
text: "<h1>Heading</h1>\n<p>Paragraph</p>"
},

{
type: "code",
language: "css",
text: "* {\n color: blue;\n}"
},

{
type: "heading",
text: "Element Selector"
},

{
type: "paragraph",
text: "Element selectors target HTML tags directly."
},

{
type: "code",
language: "html",
text: "<p>Hello World</p>"
},

{
type: "code",
language: "css",
text: "p {\n color: blue;\n}"
},

{
type: "output",
html: "<p style='color:blue'>Hello World</p>"
},

{
type: "heading",
text: "ID Selector"
},

{
type: "paragraph",
text: "An ID selector is used to target a specific HTML element. An ID should be unique, meaning only one element on a webpage should use that ID. IDs are useful when we want to style or control a single element separately from other elements. In CSS, we use the # symbol before the ID name to select it."
},

{
type: "code",
language: "html",
text: "<h1 id='title'>Welcome</h1>"
},

{
type: "code",
language: "css",
text: "#title {\n color: red;\n}"
},

{
type: "output",
html: "<h1 style='color:red'>Welcome</h1>"
},

{
type: "heading",
text: "Class Selector"
},

{
type: "paragraph",
text: "A class selector is used to target one or more HTML elements that need the same styling. Unlike IDs, the same class can be used on multiple elements on a webpage. This makes classes very useful for applying common styles to different elements. In CSS, a class selector is written using a dot (.) followed by the class name."
},

{
type: "code",
language: "html",
text: "<p class='info'>Hello</p>"
},

{
type: "code",
language: "css",
text: ".info {\n color: green;\n}"
},

{
type: "output",
html: "<p style='color:green'>Hello</p>"
},

{
type: "heading",
text: "Group Selector"
},

{
type: "paragraph",
text: "Group selectors allow multiple elements to share the same styles."
},

{
type: "code",
language: "html",
text: "<h1>Heading</h1>\n<p>Paragraph</p>"
},

{
type: "code",
language: "css",
text: "h1, p {\n color: purple;\n}"
},


{
type: "heading",
text: "What You Learned"
},

{
type: "summary",
items: [
"What is CSS",
"Why CSS is Used",
"CSS Syntax",
"Inline CSS",
"Internal CSS",
"External CSS",
"Universal Selector",
"Element Selector",
"ID Selector",
"Class Selector",
"Group Selector",
]
}

]

},

{
id: 6,
slug: "css-combinators-colors-text-styling",
title: "CSS Combinators, Colors & Text Styling",
date: "06 June 2026",

description:
"More selectors, colors, background colors, text alignment, text decoration and text transform.",

content: [

{
type: "heading",
text: "Selecting Elements Inside Other Elements"
},

{
type: "paragraph",
text: "CSS provides special selectors that help us select elements based on their relationship with other elements. These selectors make styling easier and reduce extra classes and IDs."
},

{
type: "heading",
text: "First Child Selector (:first-child)"
},

{
type: "paragraph",
text: "The :first-child selector targets only the first child element inside a parent element. It is useful when we want to style only the first item differently."
},

{
type: "code",
language: "html",
text: "<div>\n  <p>First Paragraph</p>\n  <p>Second Paragraph</p>\n  <p>Third Paragraph</p>\n</div>"
},

{
type: "code",
language: "css",
text: "div p:first-child {\n  color: red;\n}"
},

{
type: "paragraph",
text: "Only the first paragraph inside the div will become red."
},

{
type: "output",
html: "<p style='color:red'>First Paragraph</p><p>Second Paragraph</p><p>Third Paragraph</p>"
},

{
type: "heading",
text: "Descendant Selector (Parent Child)"
},

{
type: "paragraph",
text: "A descendant selector is used when we want to select all matching elements inside a parent element. It applies styles to every matching child element."
},

{
type: "code",
language: "html",
text: "<div>\n  <p>Paragraph One</p>\n  <p>Paragraph Two</p>\n  <p>Paragraph Three</p>\n</div>"
},

{
type: "code",
language: "css",
text: "div p {\n  color: blue;\n}"
},

{
type: "paragraph",
text: "All paragraph tags inside the div will become blue."
},

{
type: "output",
html: "<p style='color:blue'>Paragraph One</p><p style='color:blue'>Paragraph Two</p><p style='color:blue'>Paragraph Three</p>"
},

{
type: "heading",
text: "nth-child() Selector"
},

{
type: "paragraph",
text: "The :nth-child() selector is used to target a specific child based on its position inside the parent."
},

{
type: "code",
language: "html",
text: "<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n  <li>Item 4</li>\n</ul>"
},

{
type: "code",
language: "css",
text: "li:nth-child(2) {\n  color: red;\n}"
},

{
type: "paragraph",
text: "Only the second list item will become red."
},

{
type: "output",
html: "<ul><li>Item 1</li><li style='color:red'>Item 2</li><li>Item 3</li><li>Item 4</li></ul>"
},

{
type: "paragraph",
text: "We can also style even or odd elements."
},

{
type: "code",
language: "css",
text: "li:nth-child(even) {\n  color: green;\n}"
},

{
type: "paragraph",
text: "This will style the 2nd, 4th, 6th and all even-position elements."
},

{
type: "heading",
text: "Direct Child Selector (>)"
},

{
type: "paragraph",
text: "The direct child selector selects only immediate children of a parent element. It does not affect nested elements further inside."
},

{
type: "code",
language: "html",
text: "<div>\n  <p>Direct Child</p>\n  <section>\n    <p>Nested Paragraph</p>\n  </section>\n</div>"
},

{
type: "code",
language: "css",
text: "div > p {\n  color: purple;\n}"
},

{
type: "paragraph",
text: "Only the direct child paragraph will become purple. The nested paragraph inside section will not be affected."
},

{
type: "heading",
text: "CSS Colors"
},

{
type: "paragraph",
text: "The color property is used to change the color of text. CSS allows us to define colors in multiple ways."
},

{
type: "heading",
text: "1. Color Names"
},

{
type: "paragraph",
text: "The easiest way is to use predefined color names."
},

{
type: "code",
language: "css",
text: "h1 {\n  color: blue;\n}"
},

{
type: "paragraph",
text: "Examples of color names are red, blue, green, black, white, yellow and purple."
},

{
type: "heading",
text: "2. RGB Colors"
},

{
type: "paragraph",
text: "RGB stands for Red, Green and Blue. Every color is made by mixing these three colors."
},

{
type: "paragraph",
text: "Each value can range from 0 to 255."
},

{
type: "code",
language: "css",
text: "h1 {\n  color: rgb(255, 0, 0);\n}"
},

{
type: "paragraph",
text: "rgb(255, 0, 0) means full red, no green and no blue, so the text becomes red."
},

{
type: "code",
language: "css",
text: "p {\n  color: rgb(0, 0, 255);\n}"
},

{
type: "paragraph",
text: "rgb(0, 0, 255) creates blue color."
},

{
type: "heading",
text: "3. Hex Color Codes"
},

{
type: "paragraph",
text: "Hex colors start with # followed by six characters. They are another way to represent colors."
},

{
type: "code",
language: "css",
text: "h1 {\n  color: #ff0000;\n}"
},

{
type: "paragraph",
text: "#ff0000 represents red color."
},

{
type: "code",
language: "css",
text: "p {\n  color: #0000ff;\n}"
},

{
type: "paragraph",
text: "#0000ff represents blue color."
},

{
type: "paragraph",
text: "Most developers commonly use Hex colors because they are short and widely supported."
},

{
type: "heading",
text: "Background Color"
},

{
type: "paragraph",
text: "The background-color property is used to set the background color of an element."
},

{
type: "code",
language: "css",
text: "div {\n  background-color: yellow;\n}"
},

{
type: "output",
html: "<div style='background-color:yellow;padding:10px'>Hello World</div>"
},

{
type: "paragraph",
text: "The text remains the same, but the background behind it becomes yellow."
},

{
type: "heading",
text: "Text Alignment"
},

{
type: "paragraph",
text: "The text-align property controls how text is positioned horizontally inside an element."
},

{
type: "heading",
text: "Left Alignment"
},

{
type: "paragraph",
text: "Left alignment is the default alignment in most webpages."
},

{
type: "code",
language: "css",
text: "p {\n  text-align: left;\n}"
},

{
type: "heading",
text: "Center Alignment"
},

{
type: "paragraph",
text: "Center alignment places text in the middle."
},

{
type: "code",
language: "css",
text: "p {\n  text-align: center;\n}"
},

{
type: "output",
html: "<p style='text-align:center'>Centered Text</p>"
},

{
type: "heading",
text: "Right Alignment"
},

{
type: "paragraph",
text: "Right alignment places text on the right side."
},

{
type: "code",
language: "css",
text: "p {\n  text-align: right;\n}"
},

{
type: "heading",
text: "Justify Alignment"
},

{
type: "paragraph",
text: "Justify alignment spreads text evenly between the left and right edges, giving a clean paragraph look."
},

{
type: "code",
language: "css",
text: "p {\n  text-align: justify;\n}"
},

{
type: "heading",
text: "What You Learned"
},

{
type: "summary",
items: [
"First Child Selector",
"Descendant Selector",
"nth-child() Selector",
"Direct Child Selector",
"CSS Colors",
"Color Names",
"RGB Colors",
"Hex Color Codes",
"Background Color",
"Text Align",
"Left Alignment",
"Center Alignment",
"Right Alignment",
"Justify Alignment",

]
}

]

}

]