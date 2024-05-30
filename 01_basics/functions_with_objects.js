function calculatetotalprice(...num1){ // ... is a rest operator
    return num1
}
console.log(calculatetotalprice(200,400,600))
// will return array of arguments passed to the function [ 200, 400, 600 ]
const user = {
    username: "sneha",
    price : 100
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user); //methos 1
handleobject({
    username :"sam",
    price: 100
}) //method 2