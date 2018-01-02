var request=require('request')
var fs=require('fs')
var zlib=require('zlib')

request('https://aksout.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('ao.htm'))