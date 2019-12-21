const { src, target } = require('../utils/params');
const { createWriteStream } = require('fs');
const { pack } = require('tar-pack');

const __root = process.cwd();
const srcFolder = `${__root}/${src}`;
const outputFile = `${__root}/${target}/dots.tar.gz`;

pack(srcFolder, {
  ignoreFiles: ['.npmignore'],
})
  .pipe(createWriteStream(outputFile))
  .on('error', err => {
    console.error(err.stack);
  })
  .on('close', () => {
    console.dir(`Successfuly packed ${src} into ${outputFile}`);
  });
