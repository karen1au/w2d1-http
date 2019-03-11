var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printLower (html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLower)