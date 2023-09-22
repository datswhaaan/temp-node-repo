// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - funtion to use modules (CommonJS)
// module     - info about aurrent module (file)
// process    - info abouut env where the program is being executed

console.log(__dirname);
setInterval(()=>{
    console.log('hello world');
}, 1000)