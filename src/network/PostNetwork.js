/**
 * Created by jaeyoung on 2017. 5. 3..
 */

var http = require('http');
var options = {
    hostname: 'http://thealcapi.pythonanywhere.com',
    port: '80',
    path: '/api/post/'
};



function handleResponse(response) {
    var serverData = '';

    response.on('data', function (chunk) {
        serverData += chunk;
        console.log(serverData);
    });
    response.on('end', function () {
        console.log(serverData);
    });
}

function getPosts() {

    return (
        http.request(options, function (response) {
            console.log("GET from api / ", response);
        }).end()
    );
}

export default getPosts;
