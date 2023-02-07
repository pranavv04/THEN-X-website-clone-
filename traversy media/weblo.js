// alert("[Welcome Player.]")   // gives alert or popup in web pages 
// console.log("Welcome Player.") // prints in console in webpages inspect console
// console.error("You are looking at your phone throw that bullshit away") //shows the text in error form
// console.warn("Shut the fuck up and work hard ") // gives text in the form of warning

// Variables in JS
// var const and  let these are the variables in JS

let age2 = 15;
age2 = 68;
// console.log(age2);
// but if we put const instead of let it will give error
const age1 = 25;
// age1 = 69;    gives error 

// console.log(age1);


//Primitive Data types
// strings ,boolean ,numbers ,null ,undefined
const name = 'John';
const age = 20;
const rating = 4.8;
const iscool = true;
const x = null;
const y = undefined;
let z;

// console.log(typeof z);
// Concantetaion
console.log("My name is "+name ,".My age is "+age);

//Template String
console.log(`My name is ${name} and my age is ${age}`);

const hello = `My name is ${name} and my age is ${age}`;
console.log(hello);

const mobile = 'Hello World';
console.log(mobile.length);

console.log(mobile.toUpperCase());
console.log(mobile.toLowerCase());
console.log(mobile.substring(6 , 11));
console.log(mobile.substring(0 ,6).toUpperCase());
const s ='Hello World';
console.log(s.split(' '));

const fruits=['apples','pears','oranges'];
console.log(fruits);
console.log(fruits[1]);
fruits[3]='grapes';
console.log(fruits);

// but the above method we cant do it when we dont know how many array elements are present
// so instead use 
fruits.push("banana");  //to add element at the last
console.log(fruits);

fruits.unshift("peach"); //to add element at the beginning
console.log(fruits);

// to remove the last element from array use this 
fruits.pop();
console.log(fruits);


// to check if it is an array
console.log(Array.isArray(fruits));


// we can get index of any elements 
console.log(fruits.indexOf('pears')); //ANS == 2

// OBJECT LITERALS
const person = {
    firstname:'john',
    lastname:'gadhu',
    age:69,
    hobbies:['music','hockey','gym'],
    address: {
      street:'jacob nagri',
      city:'Dholu',
      state:'Kalyan',
    }
    
}
console.log(person);
console.log(person.age,person.address);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstname, lastname}=person;
const {address:{city}} = person;

console.log(firstname);
console.log(city);

// to add 
person.email = 'johngadhu12@gmail.com';
console.log(person);

const todos=[
  {
    id: 1,
    text: 'Take out trash',
    isCompleted:true

  },
  {
    id: 2,
    text: '6hrs Study Challenge',
    isCompleted:true

  },
  {
    id: 3,
    text: 'Building website',
    isCompleted:false

  },

];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loop for todos
for(let i=0;i<todos.length;i++){
   console.log(todos[i].text);
}
// for loop
for(let i=0;i<10;i++){
  console.log(i);
  console.log(`For loop Number:${i}`);
}

//while loop 
let i=0;
while(i<10){
  console.log(`While loop Number:${i}`);
  i++;
}

for(let todo of todos){
  console.log(todo.id);
  console.log(todo.text)
}

//foreach ,map ,filter
todos.forEach(function(todo){
  console.log(todo.text);
});

const todoText = todos.map(function(todo){
  return todo.text;
});
console.log(todoText);


const todoCompleted = todos.filter(function(todo){
  return todo.isCompleted === true;

});
console.log(todoCompleted);


// returns only text using map in filter
const todosCompleted = todos.filter(function(todo){
  return todo.isCompleted === true;

}).map(function(todo){
  return todo.text ;
});
console.log(todosCompleted);




const xl = 10;

if(xl==10){
 console.log("xl value is 10");
};

// now if we use double equal and use string '10' like this it will still show no error
// so it will print the console.log cause it only matches the data
// In === it matches data as well as datatype ie if '10' is string it will not print 
// the console.log

const kl ='10'
if(kl===10){
  console.log("kl is 10");
};   // it will not print the console.log

const vl=10
if(vl===10){
  console.log("vl is 10");

};  // it will print the console .log


//if-else
const p=20;
if(p===10){
  console.log("p is 10");
}else{
  console.log("p is NOT 10");
};


// if- else-if else
const k=19;
if(k===12){
  console.log("k is 12");
}else if(k>12){
  console.log("k is greater than 12");
}
else{
  console.log("k is smaller than 12");
};

// && (AND)  || (OR)

const h =4;
const l=12;

if(h>3 && l>11){
  console.log("h is greater than 3 and l is greater than 11");
}

if(h>5 || l>11){
  console.log("h is greater than 5 or l is greater than 11");
}


// ternary operator (?)

const b =10;

const color = b >10 ? 'red':'blue';
console.log(color);


//SWITCHES

switch(color){
  case 'red':
    console.log('The color is red');
    break;
  case 'blue':
    console.log("The color is blue");
    break;
  default:
    console.log('The color is NOT red nor blue');
    break;
}

//Functions

function addNums(num1 ,num2){
  console.log(num1+num2);
}

addNums(5,5);

//or
function addlums(nums1=10,nums2=10){
  console.log(nums1+nums2);
}

addlums();

// or mostly used
function gigachad(adonis,jefrey){
  return adonis+jefrey;
}

console.log(gigachad(12,2));


// arrow funtion
const adoniss = (value1=1,value2=1)=>{
    return value1+value2;

}

console.log(adoniss());

/////////// simple way we dont have to use return value in here

const kp =(value3=1,value4=1)=>value3+value4;

console.log(kp(5,5));



//Construtor 
//constructor function
function Person(firstName ,lastName ,dob){
  this.firstName=firstName;
  this.lastName=lastName;
  this.dob=new Date(dob);
  //this.getBirthYear = function(){
   // return this.dob.getFullYear();
 // }//
  this.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
  }

}

// we can also do this way  for line 307 and 310 too
Person.prototype.getBirthYear = function(){
  return this.dob.getFullYear();
}

//Instantiate object
const person1 = new Person('Pranav','Dhangar','11-4-02');

console.log(person1);
console.log(person1.firstName);
console.log(person1.dob);
//console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1.getBirthYear()); // new way line 317

//Class
class Person2{
  constructor(firstNames ,lastNames ,dobs){
    this.firstNames=firstNames;
    this.lastNames=lastNames;
    this.dobs=new Date(dobs);
  }
  getBirthYears(){
    return this.dobs.getFullYear();
   }
  getFullNames(){
    return `${this.firstNames} ${this.lastNames}`;
   }
}
const person2 = new Person2('Jaddu','pandu','12-14-1892');
console.log(person2.getFullNames());
console.log(person2.getBirthYears());

  