const fs = require("fs");

fs.writeFile(
  "Task1-Part2.txt",
  "This is the contents of the second part of task 1",
  (error) => {
    if (error) {
      console.log(error);
      return;
    }

    fs.readFile("Task1-Part2.txt", "utf8", (error, data) => {
      if (error) {
        console.log(error);
        return;
      }

      console.log(data);

      fs.appendFile("Task1-Part2.txt", "Appended Content", (error) => {
        if (error) {
          console.log(error);
          return;
        }

        fs.unlink("Task1-Part2.txt", (error) => {
          if (error) {
            console.log(error);
            return;
          }
        });
      });
    });
  },
);
