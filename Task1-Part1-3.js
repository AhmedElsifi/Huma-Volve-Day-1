// Research :

// "fs" stands for File System, since Node.js can't interact with files on the computer by itself it uses fs "file system library".
// "fs" can be imported using :
// import fs from "fs";
// or :
const fs = require("fs");

// ======================================================
// Method 3
fs.appendFile("notes.txt", "\nand I'm a third year CS student", (error) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log("Text Added");
});

// fs.appendFile(<file-path>,<content-to-add>,<callback-fn>);
// used to append "add" some content to the end of an existing file, or create a new file if no file exists
