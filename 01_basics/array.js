// // const array=[1,2,3,5,4]
// // const array1 =new Array('sneha','apeksha')
// // console.log(array)
// // console.log(array1)
// // console.log(array[1])
// // //methods in array
// // array.push(8)
// // console.log(array)
// // console.log(array.pop())
// // console.log(array)
// // console.log(array.includes(9))
// // console.log(array.indexOf(1))
// // const newArray = array.join()
// // console.log(newArray)
// // console.log(typeof(newArray))
// // const array2= array.slice(0,3)
// // console.log(array2)
// // const array3= array.splice(0,3)
// // console.log(array3)
//  const array = ['sneha','apeksha']
//  const array2=['manoj','kavita']
// // array.push(array2)

// // console.log(array)
// // console.log(array[2][0])
// // const family=array.concat(array2)
// // console.log(array)
// // console.log(family)
// const family = [...array,...array2]
// console.log(family)
// const newArray=[1,2,[3,4],5,[6]]
// const otherarray=newArray.flat(1)
// // console.log(otherarray)


// const array=[1,2,3,4];
// console.log(array[1]);

const array2 = new Array(1,2,2,2,2)
array2.push(3); // push any value in the array
console.log(array2);
array2.pop(); // removes the last inserted value does not take parameter
console.log(array2);
array2.unshift(4); //adds elements at the start of the array
console.log(array2);
array2.shift(); // simplily removes the inserted value by the unshift function
console.log(array2);
console.log(array2.includes(9)); // checks whether the element is present in the array or not
console.log(array2.indexOf(9));// returns the index of the element
const myNewArray = array2;
console.log(" a " , array2);
const newArray = myNewArray.slice(1,3) // cuts the array it will include 1 , 2 but not 3;
console.log(newArray);
const splicearray= array2.splice(1,3); // it manipulates the original array and cuts out the portion1-3 3 included from the original array and this portion will be deleted from the original array
console.log(splicearray);
console.log(array2);
// [ 2, 2, 2 ]   output of spliced array
// [ 1, 2 ] output of original array