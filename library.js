console.log("Hi this is printed on node")

function sample(){
    console.log("sample");
}
let counter = function(arr){
    return "the length of the array is : " +arr.length;
}
let factorial = function(num){
    if(num<=1) return 1;
    else return num*factorial(num-1);
}
module.exports.sample = sample;