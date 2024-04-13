
// npm --version  // To check the npm version installed

// we can install packages into two types, 1. Local Dependency 2. Global dependency

// Local Dependency - we only use it in this particular project
// npm i <package name> or npm install <package name>

// Global Dependency - Global dependencies are installed globally on your system and 
// are accessible from any Node.js project. we can use it in any project
// npm i -g <package name>


// Dev Dependencies - Dev Dependencies are also installed in the projects node_module directory
//these are only needed for development and testing purposes.
// we can also install dev dependency as a global dependency
// npm i <package name> --save-dev or npm install <package name> -D
// npm i <package name> --save-dev -g //installing as global

// package.json //stores important information about installed packages/ dependencies.
// three ways to create package.json
// manual approcah of creating package.json in the root
// npm init (it's a step by step approach for creating package.json)


// npm init -y (everythhing default)

// dependencies are external packages which are  installed in our project(it could
// be a library, module, package or any other piece of software that the software which
// I am working relies on to work properly)

// dependencies can be categorized into two types(could me more)
// Local dependencies - these are used during the development of project. (for example :
//testing)
// Production dependencies - these are dependencies which are required for the 
//project to run in a productin environment. For example, libraries, frameworks etc.

// note: when i install bootstrap, it also installed its peer dependency, 
//however when I uninstall bootstrap, the peer  dependency might not be automatically 
//uninstalled because npm does not track the dependencies which are installed as peer 
//dependencies, to remove the peer dependencies we shoud explicitly remove using command.

// node follows commonJS module system. CommonJS modules are synchronous.

const _ = require("lodash") //underscore (_) is often used as a variable name to represent the lodash library.
// we can use any variable as a reference for`q lodash

const items = [1,2,3,[4,5,6,[7,8,9]]];
const newitems = _.flattenDeep(items);
const newitems2 = _.findLast(items);

console.log(newitems);
console.log(newitems2);

//.gitignore
// .gitignore says to github to ignore the file
// I created a git ingore file and types /node_master inside it and pushed it into git but the
//node master file is still there.
// This is because the directory was already tracked before I added it to .gitignore
// To stop tracking I used
// git rm -r --cached node_master
// git commit -m "Remove node_master directory from tracking".

// if someone else cloned our project they will npm install to install all the
//dependencies from package.json file