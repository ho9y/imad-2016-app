var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={ 'article-one':{title:'Article one i tanmai Gopal',
                heading:'Article One',
                date:'Sep 5, 2016',
                content:`<p>What you should already know
This guide assumes you have the following basic background:

A general understanding of the Internet and the World Wide Web (WWW).
Good working knowledge of HyperText Markup Language (HTML).
Some programming experience. If you are new to programming, try one of the tutorials linked on the main page about JavaScript.
Where to find JavaScript information
The JavaScript documentation on MDN includes the following:

Learning the Web provides information for beginners and introduces basic concepts of programming and the Internet.
JavaScript Guide (this guide) provides an overview about the JavaScript language and its objects.
JavaScript Reference provides detailed reference material for JavaScript.
If you are new to JavaScript, start with the articles in the learning area and the JavaScript Guide. Once you have a firm grasp of the fundamentals, you can use the JavaScript Reference to get more details on individual objects and statements.

<h1>What is JavaScript?</h1>
JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.

JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects; for example:

Client-side JavaScript extends the core language by supplying objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation.
Server-side JavaScript extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server.
</p>`},

'article-two':{title:'2nd article i tanmai Gopal',
                heading:'Article 2',
                date:'Sep 5, 2016',
                content:`<p><h1>Introduction to HTML</h1></p>
                <p>Most fundamentally, when you look at a webpage in a Web browser, you see words. But most of the time webpages contain styled text rather than plain text.  Nowadays, webpage designers have access to hundreds of different fonts, font sizes, colors, and even alphabets (e.g. Spanish, Japanese, Russian), and browsers can for the most part display them accurately. Webpages may also contain images, video clips, and background music. They may include drop-down menus, search boxes, or links you can follow to access other pages (whether on the same site or another site). Some websites even let visitors customize the page display to accommodate their preferences and challenges (e.g., sight challenges, deafness, or color blindness). Often a page contains content boxes that move (scroll) while the rest of the page remains static.

A typical webpage depends on several technologies (such as CSS, JavaScript, AJAX, JSON) to control what the end-user sees, but most fundamentally, developers write webpages in HTML, without which there can be no webpages. To display the page on the client-side device, a browser starts out by reading the HTML.

The W3C (World Wide Web Consortium) and the WHATWG (Web Hypertext Application Technology Working Group) maintains the HTML (HyperText Markup Language) international standards and specifications. The WHATWG treats HTML as a constantly evolving "living standard", whereas the W3C works both on HTML evolution (HTML 5.1) and on "snapshots" of HTML (of which the most recent is HTML5).

The HTML specification defines a single language that can be written either with the relaxed HTML syntax or the stricter XML syntax (Extensible Markup Language). HTML also addresses the needs of Web apps. HTML only describes the meaning of the content, not style and formatting. To define appearance and layout, please use CSS, not explicit presentational HTML.

This article provides an Introduction to HTML. If you've ever wondered what goes on behind the scenes in your web browser, this article is the place to start learning.

History of HTML
Tim Berners-Lee, then a contractor at CERN (the European Organization for Nuclear Research), devised a way in the late 1980s for scientists to share documents over the Internet. Before that, Internet communication had been limited to plain text, using technologies such as email, FTP (File Transfer Protocol), and Usenet-based discussion boards. HTML used a content model stored on a central server but transferrable to a local workstation and viewable in a browser, simplifying access to content and making "rich" content possible (such as sophisticated text formatting and images). HTML is derived from SGML, which is a complex syntax for marking up or binding of content (text or graphics) in documents; as of HTML5, HTML no longer attempts to adhere to SGML syntax.
                </p>`},
'article-three':{title:' 3rd article i tanmai Gopal',
                heading:'Article 3',
                date:'Sep 5, 2016',
                content:`<p><h1>CSS</h1>

Cascading Style Sheets (CSS) are a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects like SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

CSS is one of the core languages of the open web and has a standardized W3C specification. Developed in levels, CSS1 is now obsolete, CSS2.1 is a recommendation, and CSS3, now split into smaller modules, is progressing on the standardization track.</p>`}
};

 app.get('/profile',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'profile.html'));
     });
function createTemplate(data){
var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content; 
var htmlTemplate =
`<html>
     <head>
     <title>
        ${title}
        </title>
        <meta name="viewpaort" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css>" rel="stylesheet"
      >
      </head>
      <body> <div class="container">
      <div>
      <a href="/">Home>/a>
         </div>
         <hr/>
         <h3>
         ${heading}
         </h3>
         <div>
         ${date}
         </div>
         <div>
         ${content}
         </div>
         </div>
         </body>
         </html>`;
         return htmlTemplate;
         
}
 






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter= 0;
app.get('/counter',function(req,res){
    counter = counter + 1;
    res.send(counter.toString());
});
var name = [];
 app.get('/submit-name',function(req,res){
     var name = req.query.name;
     names.push(name);
     //jason
     res.send(JSON.stringify(names));
     
     
 });
 

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
 
 
     
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
