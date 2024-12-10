// **********
// To Build Manifest File (based on ENV from cli command)
// **********

import manifestData from './manifest.js';
import fs from 'fs';

const manifest = JSON.stringify(manifestData, null, 2);
let outputPath = 'manifest.json';

process.argv.forEach((val) => {
  if (val === 'prod') {
    outputPath = 'dist/manifest.json';
  }
});

fs.writeFile(outputPath, manifest, 'utf-8', (err) => {
  if (err) {
    console.error('Error:', err);
  }
});
