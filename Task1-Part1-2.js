// Research :

// "fs" stands for File System, since Node.js can't interact with files on the computer by itself it uses fs "file system library".
// "fs" can be imported using :
// import fs from "fs";
// or :
const fs = require("fs");

// ======================================================
// Method 2
fs.readFile("notes.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(data);
});

// fs.readFile(<file-path>,<encoding>,<callback-fn>); => used to read contents of a file, the callback-fn receives the contents and the error if there is any
// we use "utf8" because data is stored as bytes of ASCII characters and we need a method to transform them from some numbers into characters
