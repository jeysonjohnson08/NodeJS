const path = require("path");
const sep = path.sep; //gives us the platform specific seperator in our case it is "\"

const filePath = path.join("content", "folder","folder2") // these path names does not exist, it works

const base = path.basename(filePath);

// console.log(sep);
// console.log(path);
console.log(filePath);
console.log(base);
const fullPath = path.resolve(__dirname, "content", "folder1", "folder2","folder3","folder4"); // this joins the 
// current directory path with additional path we mention right next to it [note: these additional path names does not exist,
// it still works]
console.log(fullPath);
