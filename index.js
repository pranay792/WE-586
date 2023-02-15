async function sample()
{
    console.log("Sample function");
    // return "CVRCOE";
    console.log('Sample function');
    console.log('Sample function');
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await result.json();
    console.log(data);
}
console.log("After sample");
console.log(sample().then(res=()=>{console.log(res)}));

// This is symbol

let s1=Symbol("CVR");
let s2=Symbol("CVR");
console.log(s1==s2);

let add=Symbol();
let user={
    name : "CVr",
    age : 20,
    [add]:"Hyderabad"
}
for(let i in user)
console.log(i);
// doesnt print symbol object

let arr=[1,2,3,4,5]
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log(arr);

let iter=arr[Symbol.iterator]()
console.log(iter.next());
console.log(iter.next());




