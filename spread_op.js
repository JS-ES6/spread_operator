/* Spread Operator / Rest Operator */

// add the elements of an existing array into a new array
var certsToAdd = ['Algorithms and Data Structures', 'Front End Libraries']; 
var certifications = ['Responsive Web Design', ...certsToAdd, 'Data Visualization', 'APIs and Microservices', 'Quality Assurance and Information Security'];
console.log(certifications);

/*
output:

["Responsive Web Design", "Algorithms and Data Structures", "Front End Libraries", "Data Visualization", "APIs and Microservices", "Quality Assurance and Information Security"]

*/


// pass elements of an array as arguments to a function
function addThreeNumbers(x, y, z) { 
	console.log(x+y+z)
}
var args = [0, 1, 2];
addThreeNumbers(...args);

/* Output 	3			*/



// copy arrays
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 
console.log(arr);
console.log(arr2);
/*	Output

[1, 2, 3]
[1, 2, 3, 4]

*/


// concatenate arrays
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
//arr1.concat(arr2);
arr1 = [...arr1, "freeCodeCamp", ...arr2];
console.log(arr1);
/*
Output
[0, 1, 2, "freeCodeCamp", 3, 4, 5]
*/


// REST: condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function(element) {
    return multiplier * element;
  });
}

				//multiply(multiplier, ...theArgs)
var arr = multiply(2, 1, 2, 3); 
console.log(arr)

/*
output 		[2, 4, 6]
2*1
2*2
2*3
*/
