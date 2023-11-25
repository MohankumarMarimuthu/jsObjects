var a = false
const person = {firstName: "mohankumar" , lastName: "marimuthu" , age: 26}

console.log(person)


const dog = {};
dog.name = "joshi"
dog.gender = "female"
dog.color = "whitesmoke"
dog.willItBite = true
console.log(dog)

const age = 26;
let myAge = age;
console.log("age" , age)
console.log("age" , myAge)
myAge = 27
console.log("age" , myAge)
console.log("age" , age)

const button = document.getElementById("myButton")
console.log("b" , button)   
button.addEventListener("click" , function(){
    console.log("clicked")
})

const family = new Object();
family.dad = "appa"
family.mom = "amma"
family.me = "mohan"
family.dog = "joshi"
family.bro = "bro"
family.mohan = "mohan"
family.about = function(){
    return this.dad + this.mom + this.me + this.dog + this.bro;
}
console.log("about" ,family.about())
for(let x in family){
    console.log(family[x])
}

delete family["mohan"];
// delete family.mohan
console.log(family)

const aboutMe = {
    name: "mohan",
    sex: "male",
    degree: {
      ug: "bsc",
      pg: "mca",
      attempts: {
        bsc: "++ arrears",
        mca: "+ arrears"
      }
    }
}
console.log(aboutMe.degree["attempts"].bsc)
let p1 = "degree"
let p2 = "attempts"
console.log(aboutMe[p1][p2])

// const reactTeam = [
//     {
//         person: "mohan",
//         project : "ps group",
//     },
//     {
//         person: "madhu",
//         project : "ps group",
//     },
//     {
//         person: "anil",
//         project : "ah",
//     },
//     {
//         person: "venkat",
//         project : "ah",
//     },
//     {
//         person: "bharath",
//         project : "some project",
//     },
//     {
//         person: "prince",
//         project : "some project",
//     },
// ]

// const div = document.getElementById("renderHere")

// console.log(div)

// for(let item in reactTeam){
//   div.innerHTML += `<p>The team member is ${reactTeam[item].person}</p> <p>current project is ${reactTeam[item].project}</p>`
// }

const name = {
    firstName: "mohankumar",
    lastName: "marimuthu",
    fullName: function(){
        return this.firstName + " " + this.lastName 
    }
}
let fullName = name.fullName()
console.log(fullName)

"use strict";
function check(){
   console.log(this)
}
check()


const date = new Date()
// in this method we can covert object to an array
// while performing this method i won't affect the original object
const core_value = {
    icon: "https://terra-cms.irepo.in/psgroup-v2-cms/wp-content/uploads/2023/10/Knowledge-of-Design.png",
    heading_en: "Knowledge of Design",
    sub_text_en: "Design plays a vital role in success of a project. Every element has \r\na story to tell",
    date: date.getDate()
}
const coreValue = Object.values(core_value)
console.log(coreValue)

// it will convert object to a string it won't affect the original object
console.log(JSON.stringify(core_value))
// console.log(core_value)

// it will convert array to string arry
const strToArr = [1,2,3]
console.log(JSON.stringify(strToArr))

// set in object
const work = {
    designation: "software engineer",
    language: "react js",
    experience: "",
    set exp(exp){
        this.experience = exp;
    }
}

work.exp = "2 yrs"
console.log(work)

// get in object
const employee = {
    name: "mohan",
    experience: "2 yrs",
    language: "react js/next js",
    get lang(){
        return this.language
    }
}

console.log(employee.lang)

// difference between get function and function
const name1 = {
    firstName: "mohankumar",
    lastName: "marimuthu",
    get fullName(){
        return this.firstName + this.lastName
    }
}
console.log(name1.fullName)

// function
const name2 = {
    firstName: "mohankumar",
    lastName: "marimuthu",
    fullName: function(){
        return this.firstName + this.lastName;
    }
}
console.log(name2.fullName())

// If we look at above two examples in name2 we are calling the fullName() function to see the result
// but in name1 we are directly accessing the property(key) 

// in overall:
// while using the set and get data is protected it gives more quality
// it is helped to achieve the things getting better
// we don't need to use different syntax for calling function we can access like accessing property



// object define property
const obj = { counter: 0};

Object.defineProperty(obj, "reset" , {
    get: function(){
        this.counter = 0;
    }
})

Object.defineProperty(obj, "add" , {
    get: function(){
        this.counter++;
    }
})
Object.defineProperty(obj, "sub" , {
    get: function(){
        this.counter--;
    }
})

obj.reset;
obj.add;
obj.add;
obj.add;
obj.add;
obj.add;
obj.add;
obj.sub;
console.log(obj.counter)


// constructor 

function Laptop(brand , processor , price){
    this.brand = brand;
    this.processor = processor;
    this.price = price;
    this.priceProcessor = function() {
        return this.price + " " + this.processor;
    };
    this.brandChange = function(brand){
        this.brand = brand;
    }
      
}

const ofcLaptop = new Laptop("dell" , "i5" , 45000);
const broLaptop = new Laptop("mac" , "m2" , 95000);
broLaptop.country = "us"
broLaptop.brandAndPrice = function(){
    return this.brand + " " + this.price;
}
Laptop.user = "mohan" // it won't work because we have to add it constructor only
ofcLaptop.brandChange("lenovo")
console.log("object" , broLaptop, ofcLaptop)

// we can also create variables like this but,
// let name = "mohan" is more straight forward & it gives easy readability
// primitive data types are faster than non primitive data types , 
// primitive values are stored in static memory location non primitive values are stored in dynamic memory location

const x1 = new String();   // A new String object
const x2 = new Number();   // A new Number object
const x3 = new Boolean();  // A new Boolean object
const x4 = new Object();   // A new Object object
const x5 = new Array();    // A new Array object
const x6 = new RegExp();   // A new RegExp object
const x7 = new Function(); // A new Function object
const x8 = new Date();     // A new Date object


// using prototype we can directly add new properties to constructors
Laptop.prototype.releasedOn = "2021"
ofcLaptop.releasedOn = "2019" // this is also do able after adding it to constructor using prototype we can change it for one object
console.log("prototype" , ofcLaptop.releasedOn , broLaptop.releasedOn)

Laptop.prototype.function = function(){
    return "prototype function added"
}
console.log("releasedOn" , ofcLaptop.function())


let text = "";
const letters = new Set(["a","b","c"]);
letters.forEach ((value) => (
  text += value + " "
))
console.log("text", letters.values());

const z = new ArrayBuffer(5)
z[0] = "0"
console.log("ArrayBuffer" ,z)

const y = []
y[0] = "1";
console.log("y" , y)