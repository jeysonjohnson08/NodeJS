const {readFile, writeFile} = require("fs");
const { reject } = require("lodash");
// const file1 = readFile("./content/folder1/textfile1.txt",{encoding: "utf-8"},(err,res)=>{
//     if(err){
//         console.log(error)
//     }
//     else{
//         console.log(res);
//     }
// })

// const file2 = readFile("./content/folder1/textfile2.txt",{encoding:"utf-8"},(err,data)=>{
// if(err){
//     console.log("File not found");
// }
// else{
//     console.log(data);
// }
// })

// writeFile("./content/folder1/folder2/folder3/text.txt","This is the new change which I made to the code",{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log(err);}
//     else{
//         console.log(data)
//     }
// })

const getText = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path, {encoding:"utf-8"},(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
} 

const writeText = (path,data)=>{
return new Promise((resolve, reject)=>{
    // The order of resolve and reject matters. had an error because of this
    writeFile(path,data,{encoding:"utf-8"},(err)=>{
        if(err){
            reject(err);
        }
        else{
            console.log("Writing successful!");
            resolve();
        };
    });
});
}  




// getText("./content/folder1/textfile2.txt").then((result)=>{console.log(result)});
// writeText("../content/folder1/folder2/folder3.text.txt","Hey Hansika escuseme",{encoding:"utf-8"}).catch((err)=>{
//     console.log(err)
// })

async function demo(){
try{
const read1 = await getText("./content/folder1/textfile2.txt");
console.log(read1);
await writeText("./content/folder1/folder2/folder3/text.txt","hey hansika");
console.log(1);
const read2 = await getText("./content/folder1/folder2/folder3/text.txt");
console.log(read2);

}
catch(err){
    console.log(err);
}
    
}
demo()