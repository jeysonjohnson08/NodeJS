//nodemon
/*nodemon is a tool that helps to develop Node.js based applications
by automatically restarting the node server when a file change in the 
directory is detected

npm install nodemon --save-dev or -D
nodemon will be installed in Devdependencies in package.json 

npm install nodemon --save-dev -g // to install nodemon globally
If we install nodemon globally we don't have to do the scripts thing.

If we install nodemon locally, we can't use it directly from the command line. 
Instead, local installation of nodemon an be run by calling it from within an npm script.
*/

/*



scripts in package.json
you can add this  to scripts:  ""start": "node app.js","
now you can start the node app using npm start command, and app.js will run

For some commmands you can simply type "npm <command>"", but for some commmand
you'll have to provide the full value that is "npm run <command> " to make 
the program to run.
*/


/*
- npx aka(package runner)
npx is a command tool that comes with npm. It allows us to run node.js packages
 without have to install them globally.

Npm looks for a local or gloval package, if no package is present, it will install
the required package, run the package and uninstall the package.

 If the package is already present in your system (either globally or locally
 in another project), npx will use that existing package to run the specified command. 
 It will not reinstall the package or remove it after running the command.
*/