const {readFile, writeFile} = require("fs") //for asynchrounous file reading and writing we use readFile 
// and writeFile

const f1 = readFile("./content/folder1/textfile1.txt",{encoding:"utf-8"},(error,result)=>{
    if(error){
        console.log(error);
        
    }
    else{
        console.log(result);
    }
})
// console.log(f1)

writeFile("./content/folder1/folder2/folder3/text.txt","Hey is is my new contribution to the code",{encoding:"utf-8",flag:"a"},(error,result)=>{ 
    /*In write file function in node js the data parameter is typically undefined , because it doesn't retuen anything. It calls 
    the callback function with error object if it has any errors or null*/
    if(error){
        console.log(error);
        return;
    }
    else{
        console.log("done"+result);
    }
    }
);
const f2 = readFile("./content/folder1/folder2/folder3/text.txt",{encoding:"utf-8"},(error,result)=>{
    if(error){
        console.log(error);
        return;
    }
    else{
        console.log(result);
    }
})