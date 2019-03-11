function getAndPrintHTML (options) {

  var https = require('https');

  https.get(options, function (response){

    response.on('data', function (data){
      var chunk = '';
        chunk += data;
      console.log(chunk);
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);