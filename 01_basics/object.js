//declaring objects

Object.create // constructor method creates singleton

const users ={
    name : 'sneha',
    age : '20',
    location : 'pune',
    email : 'sneharahate@google.com',

} // non singleton object
// accessing of objects 
// method1 
console.log(users.name)
//method 2 
console.log(users["name"])
//merging two objects together we use Object.assign({} , obj1 , obj2) values of obj2 are going in the obj1 and is same for objects more than 2 
//method 2 const obj3 = {...obj1 , ...obj2}