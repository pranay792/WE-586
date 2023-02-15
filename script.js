//arguments object 
function sum(a,b){
    console.log(arguments);
    let res=0;
    for(let i in arguments)
        res += arguments[i];
    return res;

}

console.log(sum(10,20,30,40,50));
