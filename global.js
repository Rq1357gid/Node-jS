//console.log(global);  //global object in node js
setTimeout(() => {

    console.log("time out"); //this function run only once after 3 second
    clearInterval(int);      // this code clears the interval after this function exicution
}, 3000);

const int = setInterval(() =>{
    console.log("Interval"); //this function keeps on running , every 1 second
}, 1000)

console.log(__dirname);