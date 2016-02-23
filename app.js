/**
 * Created by hughesl on 2/22/16.
 */


/**
 * Created by hughesl on 2/17/16.
 */



var express = require('express');
var app = express();
var authHelper = require('./authHelper');



app.get('/', function (req, res) {


    res.send('Hello World!');
});

//splitString = function(string, splitters) {
//    var list = [string];
//    for(var i=0, len=splitters.length; i<len; i++) {
//        traverseList(list, splitters[i], 0);
//    }
//    return flatten(list);
//}
//
//traverseList = function(list, splitter, index) {
//    if(list[index]) {
//        if((list.constructor !== String) && (list[index].constructor === String))
//            (list[index] != list[index].split(splitter)) ? list[index] = list[index].split(splitter) : null;
//        (list[index].constructor === Array) ? traverseList(list[index], splitter, 0) : null;
//        (list.constructor === Array) ? traverseList(list, splitter, index+1) : null;
//    }
//}
//
//flatten = function(arr) {
//    return arr.reduce(function(acc, val) {
//        return acc.concat(val.constructor === Array ? flatten(val) : val);
//    },[]);
//}

app.listen(5010, function () {
    console.log('Example app listening on port 5005!');

    var code = 'AAABAAAAiL9Kn2Z27UubvWFPbm0gLR7A9ZLI1kg2y9CdYcjFfLkJR9HB8qPxwIm70uapXNJqC0Dlt8b4a-aHDcoDzFjITXf_SMA1UJ_hw42nss3O2_ERJjj32II2rsb5_B2goLZOAFVwNSBeaRmlXSqP36RQ1VCUoGHRJrSB_ajEPFLVwQJiYG8rottVwC0ZX2cafxg4h49eiObMkfe__jiZROwMp03bRwCDqcLHsomC2oFePvciDjwlbDJKRss7kh5MMO5pbLQ-R9G9E8QMJHk26v-xwagvpTfc6meMy0zc4qh3dd67TzAmBg58YCjt4QxUNA3uZp6Mt7jmjFVCHWronb8mJWmlO3a5QmQynOuD3UKySh-0HDr6u9lOkDXsSdIPF7q4f5P4xiKT_uI0CqcZ6ARjM6hbzYByoICF1tdPej2L6eWqDydmuQvlV6flD2To8saXPqnB-m4ICLiJMqkrUKnjqTOdMYTtGUY4bR8DaldYkt-wUSAG8ENSwchyrQv2Kq24R4mHhNn-J0fa5xcDaJ5F4L9OKt7zPTi1dRv5r3uPw7qDN2KhlfBqWb1edFyDB2umU_XIycoEx-JmQ0TBVkg4OyAA';



    authHelper.getToken(code, function (err, data) {

        if (err) {
            console.log(err);
        }
        else
            console.log('got data: ' + data);
    });



});



