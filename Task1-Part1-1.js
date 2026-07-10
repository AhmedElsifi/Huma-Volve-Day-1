// Research :

// "fs" stands for File System, since Node.js can't interact with files on the computer by itself it uses fs "file system library".
// "fs" can be imported using :
// import fs from "fs";
// or :
const fs = require("fs");

// ======================================================
// Method 1
fs.writeFile(
  "notes.txt",
  "I am Ahmed Elsifi, and I work as a Software Engineer",
  (error) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log("no errors");
  },
);

// fs.writeFile(<file-path>,<file-content>,<callback-fn>);
// it creates a new file or replaces the content of the file if a file with the same name already exists
// also it receives a callback-fn with an error argument incase something happened
