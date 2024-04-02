const {readFileSync, writeFileSync} = require("fs");
console.log(__dirname)
const f1 = readFileSync("./content/folder1/textfile1.txt","utf-8")
const f2 = readFileSync("./content/folder1/textfile2.txt" )

writeFileSync("./content/folder1/folder2/folder3/text.txt",f1+ f2, {encoding:"utf-8", flag: 'a' });
const res = readFileSync("./content/folder1/folder2/folder3/text.txt","utf-8");
console.log(res);
