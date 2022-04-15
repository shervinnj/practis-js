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

//tabdil string be horoofe kochik

let firstName="sherVin Nj"
result=firstName.toLowerCase();
console.log(result);

// make sure put () cuz they method type

//=====================

//=find index of string
let frstName="shervin nj"

result =firstName.indexOf("h")
console.log(result);
//++++++++++++++++++++++++++++++++++++
let asm="hello my name is shervin";

result=asm.split(" ");
console.log(result);
//+++++++++++++++++++++++++++++++++

//tavize string ba asrefate an method replace//
let b ="shervin nj";

result=b.replace("shervin","asghar")
console.log(result);
//=======================================
//way to find out the name is exits or not

let o="shervin nj";
result=o.includes("asghr");
console.log(result);

//-----ba tru ya false javab mideh
//++++++++++++++++++++++++++++++++++++++

// < //kochiktar ya bozorgtar
// !=mokhalef//
// !== mokhalef va ham type nist
// == mogayeseh hastan ya na
// === mosavi y ahamtype //



//+++++++++++++++++++++++++++++++++

let shomare=7;

if (shomare>1){
    console.log("add bozorgtar");

}else{
    console.log("kochiktar");
}

//dastorateh sharti if or else if
//++++++++++++++++++++++++++++++++++++++++
let isRich=true;
let isKind=true;

if(isRich && isKind){
    console.log("its ok");
}
//+++++++++++  OR +++++++++++++
 isRich=true;
 isKind=false;

if(isRich || isKind){
    console.log("its ok");
}


// dar dastooreh ya yek shart mohemeh
//+++++++++++++++++++++++++++++++

//=============== OR++++++++++++++

isRich=5;
isKind="5";

if(isRich===isKind){
    console.log("its okk");
}
//dar dastoreh balah sahih nist chon yeki numbereh va digari string
//++++++++++++++++++++++


let number=4;

switch(number){

case 1:{
console.log("one is okay");
break;

}
case 2:{

console.log("two is okay");
break;

}

case 3:{
    console.log("three is okay");
    break;
}

default:{
console.log("yek add vared kon beyne 1-4");
break;
}
}
//+++++++++++++++++++++++++++++++++++++++++


try{
    let result;
    result= 5+2;
    console.log(sum);
}
catch(e){
console.log(e.message);

}
//dastooreh bala ma ye varible neveshtai, 
//be asme result vali goftim sum chap kon
//ba in dastoor app crash nemishe error to
//syntax be ma neshon mideh 


//+++++++++++ MOHEM or ++++++++++++++

try{
let g;
g=2+3;
console.log(nn);


}
catch(o){
    console.log(o.message);

}
//======================================

i=0;
while(i<5){
    console.log(i);
    i++
}

//dar in mesal har vaght i kochiktar az
//5 bood ba dastooreh i++ yeki behesh
//ezafe kon

//++++++++OR++++++++++
while(i<=20){
    if(i%2==0){
        console.log(i);
    }
i++
}
//bagi moondeh tagsim bareh 2 beshe 
// 0 baramoon bad chap kon


    for(let i=0;i<=20;i++){
        if(i%2==0){
            console.log(i);
        }
    }
    //inja hamoon kari ke ba halghe
    // while kardim mitonim ba i anjam bedim

    //+++++++++++++++++++++++++++++++++++++
    let num=[1,5,8,9,4,21,58];

    for(let i=0;i<num.length;i++){
        if(num[i]==21){
            console.log(i);
        }
    }
    //medaleh bala intori ke begard
    //bebin 21 dara arry vojood dareh 
    //agar dareh andisesho type kon

//=============================

let arraye=[1,5,8,9,7,6];
for(array of arraye){
    console.log(array);
}

//inja shomareha ro az arry kharej kadim
//===== or =====


let p=[1,5,9,8,7]
for(let l of p){
    if(l==8){
        console.log(`${l} found`);
    }

}



let pers={

name:"shervin",
age:25

};
pers.email="nj";
for(let pk in pers){
console.log(`${pk} : ${pers[pk]}`);
}
//estede az in dastoor barayeh dastresi be object arry
//ba estefadeh az halghey for

//++++++++++++ OR ++++++

let nu=[1,2,3,4,5,7];
for(let w in nu){
    console.log(`${w}:${nu[w]}`);
}

//+++++++++++++++++++++++++++++++++

function myFunction(){
    if(true){
        var color="blue";
        
    }
    console.log(color);
}
myFunction();
// estefadeh az let or var
//+++++++++++++++++++++++++++++++
for(let i=0;i<10;i++){
    if(i==7){
        break;
    }else if(i==2){
        continue;
    }
    console.log(i);
}
// astefade az break kolan badesho hazf mikone
//va continue faghat yekisho hazf mikone va badesho chap mikone


let temp=[1,2,3,4,5];
let mm=new Array(6,7,8,9);

console.log(mm);

// sakhte new array ba estefadeh az
// new Array
//+++++++++++++++++++++++++++


let arryes=[1,2,3,4,5,6,7,8]
arryes.push(150);
console.log(arryes);

// ba estefade az dastooreh push() mitoonim be array harchi ezafe konim 
//albateh be akharesh
//+++++++++++++++++++++++++++

let arrye=[1,2,3,4,5,6,7,8];
arrye.unshift(20);
console.log(arrye);

//ba estefadeh az dastooreh unshift be avaleh arry mitoonim
//chizi add konim
//+++++++++++++++++++++++++++++++++
let arryee=[1,2,3,4,5,6,7,8];

arryee.pop();
console.log(arryee);

// ba estefadeh az dastooreh pop() 
// akharin kalameh arry mitoonim pak konim
//+++++++++++++++++++++++++++++++

























