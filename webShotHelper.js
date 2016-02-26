/**
 * Created by hughesl on 2/22/16.
 */


/**
 * Created by hughesl on 2/18/16.
 */


//app.use(bodyParser.urlencoded({
//    limit: '50mb',
//    extended: true
//})); // to support URL-encoded bodies

var webshot  = require('webshot');
var Promise = require('bluebird');


module.exports.getImage = function(html, width, height) {

    return new Promise(function (resolve, reject) {

      //  resolve("tst");

        var options = {
            siteType: 'html',
            windowSize: {
                width: width,
                height: height, //330 //static height
            },
            shotSize: {
                width: 'all',
                height: 'all',
            },
        };

        var renderStream = webshot(html, options);
        var buf = "";

        renderStream.on('data', function(data) {
            buf += 'test';// data.toString('base64');

        });

        renderStream.on('end', function() {
            var b64 = buf;

            resolve(b64);


            //response.writeHead(200, {
            //    'Content-Length': Buffer.byteLength(b64, 'utf8')
            //});
            //response.end(b64, 'utf8');
        });

    });
}
