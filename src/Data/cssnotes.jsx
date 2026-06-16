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
"More selectors, colors, background colors, text alignment.",

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

},
{
id: 7,
slug: "css-text-decoration-transform-and-styling",
title: "CSS Text Decoration, Transform & Text Styling",
date: "08 June 2026",

description:
"text decoration, decoration styles, text transform and additional text styling properties.",

content: [

{
type: "heading",
text: "Text Decoration"
},

{
type: "paragraph",
text: "The text-decoration property is used to add or remove decorations such as underline, overline and line-through."
},

{
type: "heading",
text: "Underline Text"
},

{
type: "code",
language: "css",
text: "h1 {\n  text-decoration: underline;\n}"
},

{
type: "paragraph",
text: "The underline value places a line below the text."
},

{
type: "output",
html: "<h1 style='text-decoration:underline'>Welcome</h1>"
},

{
type: "heading",
text: "Overline Text"
},

{
type: "paragraph",
text: "The overline value places a line above the text."
},

{
type: "code",
language: "css",
text: "h1 {\n  text-decoration: overline;\n}"
},

{
type: "output",
html: "<h1 style='text-decoration:overline'>Welcome</h1>"
},

{
type: "heading",
text: "Line Through Text"
},

{
type: "paragraph",
text: "The line-through value draws a line through the middle of the text."
},

{
type: "code",
language: "css",
text: "h1 {\n  text-decoration: line-through;\n}"
},

{
type: "output",
html: "<h1 style='text-decoration:line-through'>Welcome</h1>"
},

{
type: "heading",
text: "Text Decoration Style"
},

{
type: "paragraph",
text: "Decoration styles change the appearance of the decoration line. A decoration line must exist before a style can be applied."
},

{
type: "code",
language: "css",
text: "h1 {\n  text-decoration: underline;\n  text-decoration-style: dotted;\n}"
},

{
type: "output",
html: "<h1 style='text-decoration:underline dotted'>Welcome</h1>"
},

{
type: "paragraph",
text: "The dotted style creates small dots in the underline."
},

{
type: "code",
language: "css",
text: "h1 {\n  text-decoration: underline;\n  text-decoration-style: wavy;\n}"
},

{
type: "output",
html: "<h1 style='text-decoration:underline wavy'>Welcome</h1>"
},

{
type: "paragraph",
text: "Other available values are solid, dashed, dotted, double and wavy."
},

{
type: "heading",
text: "Text Transform"
},

{
type: "paragraph",
text: "The text-transform property changes the capitalization of text without changing the original content."
},

{
type: "heading",
text: "Uppercase"
},

{
type: "code",
language: "css",
text: "p {\n  text-transform: uppercase;\n}"
},

{
type: "paragraph",
text: "All letters become capital letters."
},

{
type: "output",
html: "<p style='text-transform:uppercase'>hello world</p>"
},

{
type: "heading",
text: "Lowercase"
},

{
type: "code",
language: "css",
text: "p {\n  text-transform: lowercase;\n}"
},

{
type: "paragraph",
text: "All letters become small letters."
},

{
type: "output",
html: "<p style='text-transform:lowercase'>HELLO WORLD</p>"
},

{
type: "heading",
text: "Capitalize"
},

{
type: "code",
language: "css",
text: "p {\n  text-transform: capitalize;\n}"
},

{
type: "paragraph",
text: "The first letter of each word becomes uppercase."
},

{
type: "output",
html: "<p style='text-transform:capitalize'>hello world</p>"
},

{
type: "heading",
text: "Text Indent"
},

{
type: "paragraph",
text: "The text-indent property adds space before the first line of a paragraph."
},

{
type: "code",
language: "css",
text: "p {\n  text-indent: 40px;\n}"
},

{
type: "output",
html: "<p style='text-indent:40px'>This paragraph starts with an indent.</p>"
},

{
type: "heading",
text: "Letter Spacing"
},

{
type: "paragraph",
text: "The letter-spacing property controls the space between characters."
},

{
type: "code",
language: "css",
text: "h1 {\n  letter-spacing: 10px;\n}"
},

{
type: "output",
html: "<h1 style='letter-spacing:10px'>WELCOME</h1>"
},

{
type: "heading",
text: "Word Spacing"
},

{
type: "paragraph",
text: "The word-spacing property controls the space between words."
},

{
type: "code",
language: "css",
text: "p {\n  word-spacing: 10px;\n}"
},

{
type: "output",
html: "<p style='word-spacing:10px'>Hello World Everyone</p>"
},

{
type: "heading",
text: "Line Height"
},

{
type: "paragraph",
text: "The line-height property controls the vertical spacing between lines of text."
},

{
type: "code",
language: "css",
text: "p {\n  line-height: 2;\n}"
},

{
type: "output",
html: "<p style='line-height:2'>Line One<br>Line Two<br>Line Three</p>"
},

{
type: "paragraph",
text: "Increasing line-height improves readability in long paragraphs."
},

{
type: "heading",
text: "Font Weight"
},

{
type: "paragraph",
text: "The font-weight property controls the thickness of text. Higher values create bolder text."
},

{
type: "code",
language: "css",
text: "h1 {\n  font-weight: bold;\n}"
},

{
type: "output",
html: "<h1 style='font-weight:bold'>Welcome</h1>"
},

{
type: "paragraph",
text: "Common values are normal, bold and numeric values from 100 to 900."
},

{
type: "heading",
text: "Font Style"
},

{
type: "paragraph",
text: "The font-style property is used to make text appear normal, italic or oblique."
},

{
type: "code",
language: "css",
text: "h1 {\n  font-style: italic;\n}"
},

{
type: "output",
html: "<h1 style='font-style:italic'>Welcome</h1>"
},

{
type: "paragraph",
text: "The italic value slants the text for emphasis. Other available values are normal and oblique."
},


{
type: "heading",
text: "What You Learned"
},

{
type: "summary",
items: [
"Text Decoration",
"Underline Text",
"Overline Text",
"Line Through Text",
"Text Decoration Style",
"Dotted Decoration",
"Wavy Decoration",
"Text Transform",
"Uppercase",
"Lowercase",
"Capitalize",
"Text Indent",
"Letter Spacing",
"Word Spacing",
"Line Height",
"Text Shadow"
]
}

]

},
{
id: 8,
slug: "css-units",
title: "CSS Units",
date: "09 June 2026",

description:
"CSS units including absolute and relative units such as px, %, em, rem, vw, vh, vmin, vmax and ch.",

content: [

{
type: "heading",
text: "Introduction to CSS Units"
},

{
type: "paragraph",
text: "CSS units are used to define the size of text, elements, spacing and layouts. Whenever you set a width, height, margin, padding or font size, you usually use a CSS unit."
},

{
type: "paragraph",
text: "Choosing the correct unit is important because different units behave differently. Some units always stay fixed, while others automatically adjust according to the parent element or screen size."
},

{
type: "heading",
text: "Types of CSS Units"
},

{
type: "paragraph",
text: "CSS units are divided into two main categories: Absolute Units and Relative Units."
},

{
type: "heading",
text: "Absolute Units"
},

{
type: "paragraph",
text: "Absolute units have a fixed size. Their value does not depend on the parent element, root element or screen size."
},

{
type: "paragraph",
text: "For modern web development, the most important absolute unit is px (pixel)."
},

{
type: "heading",
text: "Pixels (px)"
},

{
type: "paragraph",
text: "The px (pixel) unit represents a fixed size on the screen. It is the most commonly used CSS unit and is considered an absolute unit."
},

{
type: "paragraph",
text: "A value defined in pixels remains the same regardless of the parent element or viewport size."
},

{
type: "code",
language: "css",
text: "h1 {\n  font-size: 40px;\n}"
},

{
type: "output",
html: "<h1 style='font-size:40px'>Welcome</h1>"
},

{
type: "paragraph",
text: "The heading will always remain 40 pixels in size."
},

{
type: "paragraph",
text: "Best for: borders, icons, fixed spacing, shadows and small UI elements."
},

{
type: "heading",
text: "Relative Units"
},

{
type: "paragraph",
text: "Relative units calculate their size based on another value such as a parent element, root element or viewport size. These units are commonly used for responsive web design."
},

{
type: "heading",
text: "Percentage (%)"
},

{
type: "paragraph",
text: "The percentage unit is relative to the size of its parent element."
},

{
type: "paragraph",
text: "If the parent width is 1000px and the child width is 50%, the child becomes 500px wide."
},

{
type: "code",
language: "css",
text: ".child {\n  width: 50%;\n}"
},

{
type: "output",
html: "<div style='width:100%;background:#eee;padding:10px'><div style='width:50%;background:#bbb;padding:10px'>50% Width</div></div>"
},

{
type: "paragraph",
text: "As the parent size changes, the child size changes automatically."
},

{
type: "paragraph",
text: "Best for: layouts, containers, grids and responsive widths."
},

{
type: "heading",
text: "em Unit"
},

{
type: "paragraph",
text: "The em unit is relative to the font size of the parent element."
},

{
type: "paragraph",
text: "If the parent font size is 20px and the child font size is 2em, the child becomes 40px."
},

{
type: "code",
language: "css",
text: ".parent {\n  font-size:20px;\n}\n\n.child {\n  font-size:2em;\n}"
},

{
type: "output",
html: "<div style='font-size:20px'>Parent <span style='font-size:2em'>Child Text</span></div>"
},

{
type: "paragraph",
text: "The em unit grows and shrinks according to the parent font size."
},

{
type: "paragraph",
text: "Best for: component spacing, padding, margins and buttons."
},

{
type: "heading",
text: "rem Unit"
},

{
type: "paragraph",
text: "The rem unit stands for Root EM. It is calculated using the font size of the html element instead of the parent element."
},

{
type: "paragraph",
text: "Most browsers use a default root font size of 16px."
},

{
type: "code",
language: "css",
text: "h1 {\n  font-size:2rem;\n}"
},

{
type: "output",
html: "<h1 style='font-size:2rem'>Welcome</h1>"
},

{
type: "paragraph",
text: "If the root font size is 16px, then 2rem becomes 32px."
},

{
type: "paragraph",
text: "Unlike em, rem always uses the root font size, making sizing more predictable."
},

{
type: "paragraph",
text: "Best for: headings, paragraphs, typography and scalable designs."
},

{
type: "heading",
text: "Viewport Width (vw)"
},

{
type: "paragraph",
text: "The vw unit is based on the width of the browser window."
},

{
type: "paragraph",
text: "1vw equals 1% of the viewport width."
},

{
type: "paragraph",
text: "If the screen width is 1000px, then 1vw equals 10px."
},

{
type: "code",
language: "css",
text: "h1 {\n  font-size:5vw;\n}"
},

{
type: "output",
html: "<h1 style='font-size:5vw'>Responsive Text</h1>"
},

{
type: "paragraph",
text: "As the screen width changes, the text size automatically changes."
},

{
type: "paragraph",
text: "Best for: responsive headings, banners and hero text."
},

{
type: "heading",
text: "Viewport Height (vh)"
},

{
type: "paragraph",
text: "The vh unit is based on the height of the browser window."
},

{
type: "paragraph",
text: "1vh equals 1% of the viewport height."
},

{
type: "paragraph",
text: "100vh means 100% of the screen height."
},

{
type: "code",
language: "css",
text: ".hero {\n  height:100vh;\n}"
},

{
type: "output",
html: "<div style='height:80px;background:#ddd;display:flex;align-items:center;justify-content:center'>100vh Example</div>"
},

{
type: "paragraph",
text: "A height of 100vh creates a section that covers the entire visible screen."
},

{
type: "paragraph",
text: "Best for: hero sections, landing pages and full-screen layouts."
},

{
type: "heading",
text: "vmin Unit"
},

{
type: "paragraph",
text: "The vmin unit uses the smaller value between the viewport width and viewport height."
},

{
type: "paragraph",
text: "Suppose the viewport width is 1200px and the height is 800px. Since 800px is smaller, vmin calculations will use the height."
},

{
type: "code",
language: "css",
text: "h1 {\n  font-size:8vmin;\n}"
},

{
type: "output",
html: "<h1 style='font-size:8vmin'>vmin Text</h1>"
},

{
type: "paragraph",
text: "This makes elements scale safely on both portrait and landscape screens."
},

{
type: "paragraph",
text: "Best for: responsive logos, circles, icons and adaptive text."
},

{
type: "heading",
text: "vmax Unit"
},

{
type: "paragraph",
text: "The vmax unit uses the larger value between the viewport width and viewport height."
},

{
type: "paragraph",
text: "Suppose the viewport width is 1200px and the height is 800px. Since 1200px is larger, vmax calculations will use the width."
},

{
type: "code",
language: "css",
text: "h1 {\n  font-size:8vmax;\n}"
},

{
type: "output",
html: "<h1 style='font-size:8vmax'>vmax Text</h1>"
},

{
type: "paragraph",
text: "This allows elements to grow according to the larger screen dimension."
},

{
type: "paragraph",
text: "Best for: creative layouts, large banners and visual effects."
},

{
type: "heading",
text: "ch Unit"
},

{
type: "paragraph",
text: "The ch unit represents the width of the character '0' in the current font."
},

{
type: "paragraph",
text: "1ch is approximately equal to the width of one character."
},

{
type: "code",
language: "css",
text: "input {\n  width:20ch;\n}"
},

{
type: "output",
html: "<input style='width:20ch' placeholder='20 Characters Wide'>"
},

{
type: "paragraph",
text: "A width of 20ch creates a field that is approximately wide enough for 20 characters."
},

{
type: "paragraph",
text: "Best for: forms, input fields, OTP boxes and text-based layouts."
},

{
type: "heading",
text: "Absolute vs Relative Units"
},

{
type: "paragraph",
text: "px is an absolute unit because it always remains fixed. Percentage, em, rem, vw, vh, vmin, vmax and ch are relative units because they depend on another value."
},

{
type: "heading",
text: "Which Unit Should You Use?"
},

{
type: "paragraph",
text: "Use px when you need an exact fixed size. Use % when an element should take a percentage of its parent. Use rem for fonts and typography. Use em for component spacing. Use vw and vh for responsive screen-based layouts. Use vmin and vmax for adaptive scaling. Use ch when working with text inputs and character-based widths."
},

{
type: "heading",
text: "Quick Reference Guide"
},

{
type: "paragraph",
text: "px → Fixed sizes. % → Responsive layouts. rem → Fonts and typography. em → Component spacing. vw → Responsive width-based sizing. vh → Full-screen height sections. vmin → Safe responsive scaling. vmax → Large responsive scaling. ch → Forms and input fields."
},

{
type: "heading",
text: "Best Practices"
},

{
type: "paragraph",
text: "Modern websites mostly use px, %, rem, em, vw and vh. These units provide the best balance between consistency and responsiveness. Beginners should focus on mastering these units before using advanced units."
},

{
type: "heading",
text: "What You Learned"
},

{
type: "summary",
items: [
"CSS Units",
"Absolute Units",
"Relative Units",
"px Unit",
"Percentage (%)",
"em Unit",
"rem Unit",
"Viewport Width (vw)",
"Viewport Height (vh)",
"vmin Unit",
"vmax Unit",
"ch Unit",
"Absolute vs Relative Units",
"Quick Reference Guide",
"Best Practices"
]
}

]
},
{
id: 9,
slug: "css-visual-styling",
title: "CSS Visual Styling",
date: "10 June 2026",

description:
"Learn margin, padding, border radius, outline, opacity, cursor, text shadow and box shadow.",

content: [

{
type: "heading",
text: "Margin"
},

{
type: "paragraph",
text: "The margin property adds space outside an element. It creates distance between the element and surrounding elements."
},

{
type: "code",
language: "css",
text: "div {\n  margin: 20px;\n}"
},

{
type: "output",
html: "<div style='margin:20px;background:#ddd;padding:10px'>Margin Example</div>"
},

{
type: "heading",
text: "Padding"
},

{
type: "paragraph",
text: "The padding property adds space inside an element between the content and border."
},

{
type: "code",
language: "css",
text: "div {\n  padding: 20px;\n}"
},

{
type: "output",
html: "<div style='padding:20px;background:#ddd'>Padding Example</div>"
},

{
type: "heading",
text: "Margin vs Padding"
},

{
type: "paragraph",
text: "Margin creates space outside an element, while padding creates space inside an element."
},

{
type: "code",
language: "css",
text: "div {\n  margin: 20px;\n  padding: 20px;\n}"
},

{
type: "output",
html: "<div style='margin:20px;padding:20px;background:#ddd'>Margin and Padding</div>"
},

{
type: "heading",
text: "Border Radius"
},

{
type: "paragraph",
text: "The border-radius property creates rounded corners."
},

{
type: "code",
language: "css",
text: "div {\n  border-radius: 10px;\n}"
},

{
type: "output",
html: "<div style='background:#ddd;padding:10px;border-radius:10px'>Rounded Box</div>"
},

{
type: "paragraph",
text: "A value of 50% creates a circle when width and height are equal."
},

{
type: "code",
language: "css",
text: "div {\n  border-radius: 50%;\n}"
},

{
type: "output",
html: "<div style='width:80px;height:80px;background:#bbb;border-radius:50%'></div>"
},

{
type: "heading",
text: "Outline"
},

{
type: "paragraph",
text: "The outline property creates a line outside the border of an element."
},

{
type: "code",
language: "css",
text: "button {\n  outline: 2px solid red;\n}"
},

{
type: "output",
html: "<button style='outline:2px solid red'>Click Me</button>"
},

{
type: "heading",
text: "Border vs Outline"
},

{
type: "paragraph",
text: "Border is part of the element and affects its size. Outline is drawn outside the border and does not affect the element size."
},

{
type: "code",
language: "css",
text: "div {\n  border: 2px solid blue;\n  outline: 2px solid red;\n}"
},

{
type: "output",
html: "<div style='border:2px solid blue;outline:2px solid red;padding:10px'>Border and Outline</div>"
},

{
type: "heading",
text: "Opacity"
},

{
type: "paragraph",
text: "The opacity property controls the transparency of an element. Values range from 0 to 1."
},

{
type: "code",
language: "css",
text: "div {\n  opacity: 0.5;\n}"
},

{
type: "output",
html: "<div style='background:steelblue;color:white;padding:10px;opacity:0.5'>Opacity Example</div>"
},

{
type: "heading",
text: "Cursor"
},

{
type: "paragraph",
text: "The cursor property changes the mouse pointer when it moves over an element."
},

{
type: "code",
language: "css",
text: "button {\n  cursor: pointer;\n}"
},

{
type: "output",
html: "<button style='cursor:pointer'>Hover Me</button>"
},

{
type: "paragraph",
text: "Other common values are not-allowed, wait, grab and crosshair."
},

{
type: "heading",
text: "Text Shadow"
},

{
type: "paragraph",
text: "The text-shadow property adds a shadow behind text."
},

{
type: "code",
language: "css",
text: "h1 {\n  text-shadow: 2px 2px 5px gray;\n}"
},

{
type: "output",
html: "<h1 style='text-shadow:2px 2px 5px gray'>Welcome</h1>"
},

{
type: "heading",
text: "Box Shadow"
},

{
type: "paragraph",
text: "The box-shadow property adds a shadow around an element."
},

{
type: "code",
language: "css",
text: "div {\n  box-shadow: 0 0 10px gray;\n}"
},

{
type: "output",
html: "<div style='padding:10px;background:white;box-shadow:0 0 10px gray'>Card Element</div>"
},

{
type: "heading",
text: "What You Learned"
},

{
type: "summary",
items: [
"Margin",
"Padding",
"Margin vs Padding",
"Border Radius",
"Outline",
"Border vs Outline",
"Opacity",
"Cursor",
"Text Shadow",
"Box Shadow"
]
}

]
},

{
id: 10,
slug: "css-backgrounds-overflow-and-pseudo-classes",
title: "CSS Backgrounds & Pseudo Classes",
date: "11 June 2026",

description:
"Background images, sizing, overflow and some imp pseudo classes such as hover, active, focus and visited.",

content: [

{
type: "heading",
text: "Background Image"
},

{
type: "paragraph",
text: "The background-image property is used to place an image behind an element."
},

{
type: "code",
language: "css",
text: "div {\n  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb');\n}"
},

{
type: "output",
html: "<div style='height:420px;background-image:url(https://images.unsplash.com/photo-1506744038136-46273834b3fb);background-size:cover'></div>"
},

{
type: "paragraph",
text: "Background images are commonly used in banners, hero sections and website headers."
},

{
type: "heading",
text: "Background Repeat"
},

{
type: "paragraph",
text: "By default, a background image repeats if it is smaller than its container."
},

{
type: "code",
language: "css",
text: "div {\n  background-repeat: no-repeat;\n}"
},

{
type: "output",
html: "<div style='height:120px;background-image:url(https://images.unsplash.com/photo-1506744038136-46273834b3fb);background-repeat:no-repeat;background-size:120px'></div>"
},

{
type: "paragraph",
text: "The no-repeat value displays the image only once."
},

{
type: "heading",
text: "Background Position"
},

{
type: "paragraph",
text: "The background-position property controls where the image appears inside the element."
},

{
type: "code",
language: "css",
text: "div {\n  background-position: center;\n}"
},

{
type: "output",
html: "<div style='height:120px;background-image:url(https://images.unsplash.com/photo-1506744038136-46273834b3fb);background-size:cover;background-position:center'></div>"
},

{
type: "paragraph",
text: "Common values are left, center, right, top and bottom."
},

{
type: "heading",
text: "Background Size"
},

{
type: "paragraph",
text: "The background-size property controls the size of the background image."
},

{
type: "heading",
text: "Cover"
},

{
type: "paragraph",
text: "The cover value fills the entire container. Some parts of the image may be cropped."
},

{
type: "code",
language: "css",
text: "div {\n  background-size: cover;\n}"
},

{
type: "output",
html: "<div style='height:120px;background-image:url(https://images.unsplash.com/photo-1506744038136-46273834b3fb);background-size:cover;background-position:center'></div>"
},

{
type: "heading",
text: "Contain"
},

{
type: "paragraph",
text: "The contain value shows the complete image without cropping. Empty space may appear around the image."
},

{
type: "code",
language: "css",
text: "div {\n  background-size: contain;\n}"
},

{
type: "output",
html: "<div style='height:120px;background-image:url(https://images.unsplash.com/photo-1506744038136-46273834b3fb);background-size:contain;background-repeat:no-repeat;background-position:center'></div>"
},

{
type: "paragraph",
text: "Use cover when filling a section is more important. Use contain when showing the full image is more important."
},

{
type: "heading",
text: "Overflow"
},

{
type: "paragraph",
text: "The overflow property controls what happens when content becomes larger than its container."
},

{
type: "code",
language: "css",
text: "div {\n  width: 200px;\n  height: 80px;\n  overflow: auto;\n}"
},

{
type: "output",
html: "<div style='width:200px;height:80px;overflow:auto;border:1px solid #999'>This is a very long content that does not fit inside the container. Scrollbars will appear automatically when needed.</div>"
},

{
type: "paragraph",
text: "Common values are visible, hidden, scroll and auto."
},

{
type: "heading",
text: "Hover Pseudo Class"
},

{
type: "paragraph",
text: "The :hover pseudo class applies styles when the user moves the mouse over an element."
},

{
type: "code",
language: "css",
text: "button:hover {\n  background-color: black;\n  color: white;\n}"
},

{
  type: "output",
  html: `
    <style>
      .btn1:hover{
        background:black;
        color:white;
      }
    </style>

    <button class="btn1">Hover Me</button>
  `
},

{
type: "paragraph",
text: "Hover effects are commonly used on buttons, links and cards."
},

{
type: "heading",
text: "Active Pseudo Class"
},

{
type: "paragraph",
text: "The :active pseudo class applies styles while an element is being clicked."
},

{
type: "code",
language: "css",
text: "button:active {\n  transform: scale(0.95);\n}"
},

{
  type: "output",
  html: `
    <style>
      .btn:active{
        transform:scale(0.95);
      }
    </style>

    <button class="btn">Click Me</button>
  `
},

{
type: "paragraph",
text: "Active provides visual feedback when users press a button."
},

{
type: "heading",
text: "Focus Pseudo Class"
},

{
type: "paragraph",
text: "The :focus pseudo class applies styles when an input field receives focus."
},

{
type: "code",
language: "css",
text: "input:focus {\n  border: 2px solid blue;\n}"
},

{
  type: "output",
  html: `
    <style>
      input{
      outline:none;
        border:1px solid #999;
        padding:8px;
      }

      input:focus{
        border:2px solid red !important;
      }
    </style>

    <input placeholder="Click Here">
  `
},

{
type: "paragraph",
text: "Focus is commonly used to highlight active form fields."
},

{
type: "heading",
text: "Visited Pseudo Class"
},

{
type: "paragraph",
text: "The :visited pseudo class styles links that have already been visited by the user."
},

{
type: "code",
language: "css",
text: "a:visited {\n  color: purple;\n}"
},

{
type: "output",
html: "<a href='#'>Visited Link Example</a>"
},

{
type: "paragraph",
text: "It helps users identify which links they have already opened."
},

{
type: "heading",
text: "What You Learned"
},

{
type: "summary",
items: [
"Background Image",
"Background Repeat",
"Background Position",
"Background Size",
"Cover",
"Contain",
"Overflow",
"Hover Pseudo Class",
"Active Pseudo Class",
"Focus Pseudo Class",
"Visited Pseudo Class"
]
}

]
},

{
id: 10,
slug: "css-lists-filter-transform-animation",
title: "CSS Lists, Filter, Transform & Animation",
date: "12 June 2026",

description:
"list styling, list positions, filter effects, transform properties and CSS animations with simple explanations and examples.",

content: [

{
type: "heading",
text: "List Styling"
},

{
type: "paragraph",
text: "The list-style-type property is used to change the marker of lists. It works with both ul and ol lists. Common values include disc, circle, square, decimal, lower-alpha and upper-roman."
},

{
type: "code",
language: "css",
text: "ul {\n  list-style-type: square;\n}"
},

{
type: "output",
html: `
<ul style="list-style-type:square">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
`
},

{
type: "paragraph",
text: "You can also use custom emojis or images instead of default markers. Emojis can be added using list-style-type with symbols, while images can be added using list-style-image."
},

{
type: "code",
language: "css",
text: "ul {\n  list-style-image: url('https://cdn-icons-png.flaticon.com/16/1828/1828884.png');\n}"
},

{
type: "output",
html: `
<ul style="list-style-image:url('https://cdn-icons-png.flaticon.com/16/1828/1828884.png')">
  <li>Learn CSS</li>
  <li>Build Projects</li>
</ul>
`
},

{
type: "paragraph",
text: "Popular list-style-type values: disc, circle, square, decimal, lower-alpha and upper-roman."
},

{
type: "heading",
text: "List Position"
},

{
type: "paragraph",
text: "The list-style-position property controls whether the marker appears inside or outside the content area."
},

{
type: "code",
language: "css",
text: "ul {\n  list-style-position: inside;\n}"
},

{
type: "output",
html: `
<ul style="list-style-position:inside;border:1px solid #999;padding:10px;width:250px">
  <li>This is a long list item to show marker position.</li>
</ul>
`
},

{
type: "paragraph",
text: "Common values are outside (default) and inside."
},

{
type: "heading",
text: "Filter"
},

{
type: "paragraph",
text: "The filter property adds visual effects to images and elements without editing the original image."
},

{
type: "code",
language: "css",
text: "img {\n  filter: grayscale(100%);\n}"
},

{
type: "output",
html: `
<img
src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500"
style="width:100%;max-height:250px;object-fit:cover;filter:grayscale(100%)"
/>
`
},

{
type: "paragraph",
text: "Common filter values are blur(), brightness(), contrast(), grayscale(), sepia() and drop-shadow(). Multiple filters can be combined together."
},

{
type: "heading",
text: "Transform"
},

{
type: "paragraph",
text: "The transform property changes the position, size or rotation of an element without affecting the document layout."
},

{
type: "heading",
text: "Translate"
},

{
type: "paragraph",
text: "translate() moves an element from its original position."
},

{
type: "code",
language: "css",
text: "div {\n  transform: translateX(50px);\n}"
},

{
type: "output",
html: `
<div style="width:100px;height:100px;background:#4caf50;transform:translateX(50px)"></div>
`
},

{
type: "heading",
text: "Scale"
},

{
type: "paragraph",
text: "scale() increases or decreases the size of an element."
},

{
type: "code",
language: "css",
text: "div {\n  transform: scale(1.2);\n}"
},

{
type: "output",
html: `
<div style="width:80px;height:80px;background:#2196f3;transform:scale(1.2);margin:15px"></div>
`
},

{
type: "heading",
text: "Rotate"
},

{
type: "paragraph",
text: "rotate() rotates an element by a specified angle."
},

{
type: "code",
language: "css",
text: "div {\n  transform: rotate(20deg);\n}"
},

{
type: "output",
html: `
<div style="width:90px;height:90px;background:#ff9800;transform:rotate(20deg);margin:20px"></div>
`
},

{
type: "heading",
text: "Transform Combination"
},

{
type: "paragraph",
text: "Multiple transforms can be applied together."
},

{
type: "code",
language: "css",
text: "div {\n  transform: translateX(30px) rotate(15deg) scale(1.1);\n}"
},

{
type: "output",
html: `
<div style="width:90px;height:90px;background:#e91e63;transform:translateX(30px) rotate(15deg) scale(1.1);margin:20px"></div>
`
},

{
type: "paragraph",
text: "Most commonly used transform functions are translate(), scale(), rotate() and skew()."
},

{
type: "heading",
text: "Transition (Smooth Transform)"
},

{
type: "paragraph",
text: "CSS transition is used to make changes smooth instead of instant. When you hover or change a property like transform, it animates gradually instead of jumping."
},

{
type: "paragraph",
text: "You define transition with duration and timing function (easing)."
},

{
type: "code",
language: "css",
text: "div {\n  transition: transform 0.5s ease;\n}\n\ndiv:hover {\n  transform: translateX(50px);\n}"
},

{
type: "output",
html: `
<style>
.box1{
  width:80px;
  height:80px;
  background:#4caf50;
  transition: transform 0.5s ease;
}

.box1:hover{
  transform: translateX(50px);
}
</style>

<div class="box1"></div>
`
},

{
type: "heading",
text: "CSS Timing Functions (Easing)"
},

{
type: "paragraph",
text: "Easing controls how the speed of the animation changes over time."
},

{
type: "paragraph",
text: "1. ease → slow start, fast middle, slow end (default)\n2. linear → same speed throughout\n3. ease-in → slow start, fast end\n4. ease-out → fast start, slow end\n5. ease-in-out → slow start and slow end (smooth and natural)\n6. step-end → jumps directly to final state (no smooth transition)"
},

{
type: "code",
language: "css",
text: ".box {\n  transition: transform 1s ease-in-out;\n}\n\n.box:hover {\n  transform: translateX(100px) rotate(20deg);\n}"
},

{
type: "output",
html: `
<style>
.box2{
  width:80px;
  height:80px;
  background:#e91e63;
  transition: transform 1s ease-in-out;
}

.box2:hover{
  transform: translateX(100px) rotate(20deg);
}
</style>

<div class="box2"></div>
`
},

{
type: "paragraph",
text: "Best practice: use ease-in-out for UI animations because it feels smooth and natural."
},


{
type: "heading",
text: "Animation"
},

{
type: "paragraph",
text: "CSS animations allow elements to change styles smoothly over time without JavaScript."
},

{
type: "heading",
text: "Keyframes"
},

{
type: "paragraph",
text: "The @keyframes rule defines how an animation should progress from start to finish."
},

{
type: "code",
language: "css",
text: "@keyframes move {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(200px);\n  }\n}"
},

{
type: "heading",
text: "Basic Animation"
},

{
type: "paragraph",
text: "The animation property applies the keyframes to an element."
},

{
type: "code",
language: "css",
text: ".box {\n  animation: move 3s infinite alternate;\n}"
},

{
type: "output",
html: `
<style>
@keyframes moveBox{
  from{
    transform:translateX(0);
  }
  to{
    transform:translateX(200px);
  }
}

.move-box{
  width:70px;
  height:70px;
  background:#4caf50;
  animation:moveBox 3s infinite alternate;
}
</style>

<div class="move-box"></div>
`
},

{
type: "paragraph",
text: "Here, 3s is the duration, infinite repeats forever and alternate makes the animation move back and forth."
},

{
type: "heading",
text: "Loading Animation Example"
},

{
type: "paragraph",
text: "Animations are commonly used for loaders, buttons, cards and interactive UI effects."
},

{
type: "code",
language: "css",
text: "@keyframes pulse {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.2); }\n  100% { transform: scale(1); }\n}\n\n.circle {\n  animation: pulse 1.5s infinite;\n}"
},

{
type: "output",
html: `
<style>
@keyframes pulse{
  0%{
    transform:scale(1);
  }
  50%{
    transform:scale(1.25);
  }
  100%{
    transform:scale(1);
  }
}

.pulse-circle{
  width:70px;
  height:70px;
  border-radius:50%;
  background:#2196f3;
  animation:pulse 1.5s infinite;
}
</style>

<div class="pulse-circle"></div>
`
},

{
type: "paragraph",
text: "Important animation properties are animation-name, animation-duration, animation-delay, animation-iteration-count and animation-direction."
},

{
type: "heading",
text: "What You Learned"
},

{
type: "summary",
items: [
"List Styling",
"Custom List Markers",
"List Position",
"Filter",
"Translate",
"Scale",
"Rotate",
"Transform Combination",
"Keyframes",
"CSS Animation",
"Animation Properties"
]
}

]
},

{
id: 10,
slug: "css-position-float",
title: "CSS Position & Float",
date: "13 June 2026",

description:
"Learn CSS Position and Float in a simple and beginner-friendly way with real-life examples and practical use cases.",

content: [

{
type: "heading",
text: "What is Position?"
},

{
type: "paragraph",
text: "The position property is used to control where an element appears on a webpage. By default, all elements follow the normal document flow and appear one after another. Position allows us to change that behavior when needed."
},

{
type: "paragraph",
text: "Real Life Example: Imagine students sitting in a classroom. Everyone sits in their assigned seat by default. Position helps us move a student to a different place when needed."
},

{
type: "heading",
text: "Position Types Overview"
},

{
type: "paragraph",
text: "Before learning each value, remember this simple rule:\n\nStatic → Stay where the browser places you (default position)\nRelative → Move from your original position but keep your original space\nAbsolute → Leave your original space and move according to the nearest positioned parent\nFixed → Move according to the browser screen and stay visible even while scrolling\nSticky → Behave like a normal element at first, then stick to a position when the page is scrolled"
},

{
type: "heading",
text: "Static Position"
},

{
type: "paragraph",
text: "static is the default value of position. Elements stay in the normal document flow and cannot be moved using top, right, bottom or left."
},

{
type: "code",
language: "css",
text: ".box {\n  position: static;\n}"
},

{
type: "output",
html: `

<div style="width:100px;height:100px;background:#4caf50;color:white;display:flex;align-items:center;justify-content:center">
  Static
</div>
`
},

{
type: "paragraph",
text: "In real projects, we rarely write position: static because every element is already static by default."
},

{
type: "heading",
text: "Relative Position"
},

{
type: "paragraph",
text: "relative moves an element from its original position, but the original space remains reserved."
},

{
type: "paragraph",
text: "Real Life Example: A car moves slightly forward in a parking lot, but the parking space still belongs to that car."
},

{
type: "code",
language: "css",
text: ".box {\n  position: relative;\n  left: 40px;\n}"
},

{
type: "output",
html: `

<div style="width:100px;height:100px;background:#2196f3;color:white;display:flex;align-items:center;justify-content:center;position:relative;left:40px">
  Relative
</div>
`
},

{
type: "paragraph",
text: "The box moves, but its original space is still reserved."
},

{
type: "heading",
text: "Absolute Position"
},

{
type: "paragraph",
text: "absolute removes an element from the normal document flow. The original space is no longer reserved."
},

{
type: "paragraph",
text: "Real Life Example: A sticker placed on a wall can be attached anywhere without affecting other objects."
},

{
type: "code",
language: "css",
text: ".parent {\n  position: relative;\n}\n\n.child {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}"
},

{
type: "output",
html: `

<div style="position:relative;width:250px;height:150px;border:2px solid #333">
  <div style="position:absolute;top:10px;right:10px;width:70px;height:70px;background:#ff9800"></div>
</div>
`
},

{
type: "paragraph",
text: "Absolute elements search for the nearest positioned parent. If no positioned parent exists, they use the browser window."
},

{
type: "paragraph",
text: "Most Common Pattern:\nParent → position: relative\nChild → position: absolute"
},

{
type: "heading",
text: "Real World Use Cases of Absolute"
},

{
type: "paragraph",
text: "Notification badges, sale labels, profile status indicators, heart icons and corner buttons are commonly built using absolute positioning."
},

{
type: "heading",
text: "Fixed Position"
},

{
type: "paragraph",
text: "fixed attaches an element to the browser screen. The element stays in the same position even when the page is scrolled."
},

{
type: "paragraph",
text: "Real Life Example: A CCTV camera attached to a wall stays in the same place regardless of what happens around it."
},

{
type: "code",
language: "css",
text: ".box {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}"
},

{
type: "paragraph",
text: "Common use cases include WhatsApp buttons, chat support buttons and back-to-top buttons."
},

{
type: "heading",
text: "Sticky Position"
},

{
type: "paragraph",
text: "sticky behaves like relative at first. When the page reaches a specific scroll position, it behaves like fixed."
},

{
type: "paragraph",
text: "Real Life Example: A bookmark in a notebook stays visible while you continue reading."
},

{
type: "code",
language: "css",
text: ".navbar {\n  position: sticky;\n  top: 0;\n}"
},

{
type: "output",
html: `

<div style="position:sticky;top:0;background:#e91e63;color:white;padding:12px;text-align:center">
  Sticky Navbar
</div>
`
},

{
type: "paragraph",
text: "Sticky navigation bars are commonly used in modern websites."
},

{
type: "heading",
text: "Top, Right, Bottom and Left"
},

{
type: "paragraph",
text: "These properties are used to move positioned elements."
},

{
type: "code",
language: "css",
text: ".box {\n  position: relative;\n  top: 20px;\n  left: 30px;\n}"
},

{
type: "paragraph",
text: "Easy Trick:\nleft moves the element toward the right.\nright moves the element toward the left.\ntop moves the element downward.\nbottom moves the element upward."
},

{
type: "heading",
text: "Z-Index"
},

{
type: "paragraph",
text: "z-index decides which element appears on top when multiple elements overlap."
},

{
type: "paragraph",
text: "Real Life Example: If two books are placed on a table, the book placed above will be visible."
},

{
type: "code",
language: "css",
text: ".red {\n  z-index: 1;\n}\n\n.blue {\n  z-index: 2;\n}"
},

{
type: "output",
html: `

<div style="position:relative;height:150px">
  <div style="position:absolute;width:100px;height:100px;background:red;z-index:1"></div>
  <div style="position:absolute;left:40px;top:40px;width:100px;height:100px;background:blue;z-index:2"></div>
</div>
`
},

{
type: "paragraph",
text: "The element with the higher z-index appears above the others."
},

{
type: "heading",
text: "What is Float?"
},

{
type: "paragraph",
text: "Before Flexbox and Grid existed, developers used float for layouts. Today, float is mainly used for wrapping text around images."
},

{
type: "paragraph",
text: "Real Life Example: Newspaper articles where text flows around an image."
},

{
type: "heading",
text: "Float Left"
},

{
type: "paragraph",
text: "float:left moves an element to the left side and allows surrounding content to wrap around it."
},

{
type: "code",
language: "css",
text: "img {\n  float: left;\n  margin-right: 15px;\n}"
},

{
type: "output",
html: ` <img
src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200"
style="float:left;width:120px;margin-right:15px"
/>

<p>
This text wraps around the image because the image is floated to the left side.
</p>
`
},

{
type: "heading",
text: "Float Right"
},

{
type: "paragraph",
text: "float:right moves an element to the right side and allows surrounding content to wrap around it."
},

{
type: "code",
language: "css",
text: "img {\n  float: right;\n}"
},

{
type: "output",
html: ` <img
src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200"
style="float:right;width:120px"
/>

<p>
This text wraps around the image because the image is floated to the right side.
</p>
`
},

{
type: "heading",
text: "Clear Property"
},

{
type: "paragraph",
text: "Sometimes floated elements affect the content below them. The clear property is used to stop that effect."
},

{
type: "code",
language: "css",
text: ".next {\n  clear: both;\n}"
},

{
type: "output",
html: `

<div style="float:left;width:100px;height:100px;background:#4caf50"></div>

<div style="clear:both;padding-top:10px">
  This content starts below the floated element.
</div>
`
},

{
type: "paragraph",
text: "Common values are left, right and both."
},

{
type: "heading",
text: "Position vs Float"
},

{
type: "paragraph",
text: "Position is used to place elements at specific locations. Float is mainly used to wrap text around images. Modern layouts should use Flexbox and Grid instead of float."
},

{
type: "heading",
text: "Quick Revision"
},

{
type: "summary",
items: [
"Static → Default Position",
"Relative → Move but Keep Space",
"Absolute → Move and Leave Space",
"Fixed → Stick to Screen",
"Sticky → Normal then Stick",
"Top Right Bottom Left",
"Z-Index",
"Float Left",
"Float Right",
"Clear Property",
"Position vs Float"
]
}

]
}




]