#!/usr/bin/node

const fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(data.toString());
});
