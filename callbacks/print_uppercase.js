var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printUpper (html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUpper)