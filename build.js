// **********
// To Build Manifest File (based on ENV from cli command)
// **********

const manifestData = require('./manifest.js');

const manifest = JSON.stringify(manifestData, null, 2);
var fs = require('fs');
let outputPath = 'manifest.json';

process.argv.forEach(function (val) {
  if (val === 'prod') {
    outputPath = 'dist/manifest.json';
  }
});

fs.writeFile(outputPath, manifest, 'utf-8', function (err) {
  if (err) console.log('error', err);
});
