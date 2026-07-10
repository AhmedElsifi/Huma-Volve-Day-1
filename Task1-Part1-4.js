// Research :

// "fs" stands for File System, since Node.js can't interact with files on the computer by itself it uses fs "file system library".
// "fs" can be imported using :
// import fs from "fs";
// or :
const fs = require("fs");

// ======================================================
// Method 4
fs.unlink("notes.txt", (error) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log("File Deleted");
});

// fs.unlink(<file-path>,<callback-fn>);
// used to delete a file, if the file doesn't exist it will throw an error in the callback-fn
