console.log("js testing");
var x=10;
var y= 10;
console.log(x+y);
let a=50;
a=45;
console.log(a);
const b=5;
// === both data type and value should be same,== only the value should be same
//primitive data types - shallow copy
let an=10;
let bn=an;
bn=30;
console.log(an);
//Non primitive datatype - deep copy
let obj1={
    name:"Tharunika",age:18
}
let obj2=obj1;
obj2.name="Tharu";
console.log(obj1.name);
console.log(obj2.name);
//Array
let arr1=[1,2,3,4,5];
let arr2=arr1;
arr2[0]=100;
console.log(arr1[0]);
console.log(arr2[0]);
console.log(typeof x);
//Array methods
let arr3=[1,2,3,4,5];
console.log(arr3.length);
//promise
let promise=new Promise((resolve,reject)=>{
    let a=1+1;
    if(a==2){
        resolve("Promise resolved");
    }
    else{
        reject("Promise rejected");
    }
});