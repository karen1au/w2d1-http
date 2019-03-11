function getHTML (options, callback) {

  var https = require('https');

  https.get(options, function (response){

    response.on('data', function (data){
      var chunk = '';
        chunk += data;
      callback(chunk);

    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
