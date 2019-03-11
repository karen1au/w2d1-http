function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response){

    response.on('data', function (data){
      var chunk = '';
        chunk += data;
      console.log(chunk);
    });

  });
}

getAndPrintHTML();