// const array=[1,2,3,5,4]
// const array1 =new Array('sneha','apeksha')
// console.log(array)
// console.log(array1)
// console.log(array[1])
// //methods in array
// array.push(8)
// console.log(array)
// console.log(array.pop())
// console.log(array)
// console.log(array.includes(9))
// console.log(array.indexOf(1))
// const newArray = array.join()
// console.log(newArray)
// console.log(typeof(newArray))
// const array2= array.slice(0,3)
// console.log(array2)
// const array3= array.splice(0,3)
// console.log(array3)
 const array = ['sneha','apeksha']
 const array2=['manoj','kavita']
// array.push(array2)

// console.log(array)
// console.log(array[2][0])
// const family=array.concat(array2)
// console.log(array)
// console.log(family)
const family = [...array,...array2]
console.log(family)
const newArray=[1,2,[3,4],5,[6]]
const otherarray=newArray.flat(1)
console.log(otherarray)