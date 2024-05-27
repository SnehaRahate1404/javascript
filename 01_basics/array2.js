const names = ['sneha' , 'manoj ', 'kavita' , 'apeksha']
const surnames = ['rahate' , ' gornar','shinde']
names.push(surnames);
// output [
//     'sneha',
//     'manoj ',
//     'kavita',
//     'apeksha',
//     [ 'rahate', ' gornar', 'shinde' ]
//   ]
console.log(names)
const newarray = names.concat(surnames);
console.log(newarray)
// output [
//     'sneha',
//     'manoj ',
//     'kavita',
//     'apeksha',
//     [ 'rahate', ' gornar', 'shinde' ]
//   ]