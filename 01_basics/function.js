function name_of_function(){
    //body of function
}

name_of_function() // function calling
// function add(number1 , number2){ // number1 number2 are parameters 
//     console.log(number1 + number2)
// } console.log("result" , result) // undefined value
function add (number1 , number2){
    return number1+number2;
}
add(3,4) // 3,4 are arguments
const result = add(3,4);
console.log("result" , result) //whenever the argument is not passed it will return undefined
