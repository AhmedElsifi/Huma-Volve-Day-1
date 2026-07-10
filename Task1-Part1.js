// Research :

// "fs" stands for File System, since Node.js can't interact with files on the computer by itself it uses fs "file system library".
// "fs" can be imported using :
import fs from "fs";
// or :
// const fs = require("fs");

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

// ======================================================
// Method 3
fs.appendFile("notes.txt", "\n and I'm a third year CS student", (error) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log("Text Added");
});

// fs.appendFile(<file-path>,<content-to-add>,<callback-fn>);
// used to append "add" some content to the end of an existing file, or create a new file if no file exists

// ======================================================
// Method 4
