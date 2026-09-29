const fs = require("fs");

// Create File
fs.writeFile("test.txt", "Hello Node.js", (err) => {
  if (err) throw err;

  console.log("File Created");

  // Read File
  fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) throw err;

    console.log("File Content:", data);

    // Update File
    fs.appendFile("test.txt", "\nLearning FS Module", (err) => {
      if (err) throw err;

      console.log("File Updated");

      // Delete File
      fs.unlink("test.txt", (err) => {
        if (err) throw err;

        console.log("File Deleted");
      });
    });
  });
});
