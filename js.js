// let number=[5,9,1,"opencode","true"];
// number[0]=15;

// console.log(number);
// let person={
// name:"shervin",
// age:20,
// gender:"male",
// address:{
//     country:"iran",
//     city:"tehran"
// },
// hobbies:["watching","movies","codding"]

// };
// person.email="nj_shervin@yahoo.com";
// console.log(person);



// function sayHello(name,age){
//     console.log("hello my name is "+name+age);
// }
// sayHello("shervin",26);
// sayHello("sherv",26);
// sayHello("shevin",26);

// function square(number){
// return number*number
// }
// console.log(square(2));




// function sayHello(name,age){

//     return name*age
// }
// document.write(sayHello(2,5)); 
// function sayHello(name,age){
//     return name*age


// }
// console.log(sayHello(2,5))

// let family={name:"shervin",last:"nj"}
// let as=family;


//     console.log(family);
//     console.log(as);
//______________________________________
// let array=[1,2,3,4];
// let oarray=array;
// oarray=Object.assign([],array);
// oarray[1]=5;

// console.log(array);
// console.log(oarray);
//alan ye log begiri 2 tash tagir karde ma fagat 
//mikhayim yekishoon tagir koneh
//____________________________________________________


//---------------------------------

let result=Math.round(2.9)

console.log(result);
//be adade bala tar rondesh mikoneh
//=================================
let d=Math.ceil(2.8);
console.log(result);
// ceil kari nadareh addadet chiyeh kolan be samteh bala rondesh mikoneh
//________________

//be samteh payin rondesh mikoneh
let w =Math.floor(2.3);
console.log(w);
//-----------------------------------
let a=Math.abs(-2.7);
console.log(a);
//har addadi manfi bashe mosbatesh mikoneh

//__________________________
//ye add random beyneh 0 ta 19 bara man peyda kon

let r=Math.floor(Math.random()*20)
console.log(r);
//________________________________________

let jam;
let name="shervin";
let lastname="nj";
let age=20;
let job="web developer";

jam="hello may name is "+name+" and may last name is"+lastname+
"and my age is " +age+" and i work as "+job;
console.log(jam);

//===== ya
jam=`hello my name is ${name}and my last nam is ${lastname}and my age is ${age}and i work as ${job}`;

//dar mesale bala ma az kelide payine esc astefadeh kardim
//=========================================================