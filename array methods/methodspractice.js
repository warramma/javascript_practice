//7-27-24
////PRACTICE TASKS
//1 - Translate border-left-width to borderLeftWidth
function camelize(str){
    let arr = str.split('');
    let dashIndex = arr.indexOf("-");
    let upperCase = arr[dashIndex + 1].toUpperCase();
    arr.splice(dashIndex, 2, upperCase);
    return arr.join("");
}


console.log(camelize("background-color"));

//#2 - Filter range
//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
function filterRange(arr, a, b){
  let filtered = arr.filter((item)=>{
    return item >= a && item <= b;
  });
  return filtered;
}
let test = [5, 3, 8, 1]
console.log(filterRange(test, 1, 4))
console.log(test);
//#3 - filter in place
function filterRangeInPlace(arr, a, b){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < a || arr[i] > b){
      arr.splice(i, 1);
      //i--;
    }
  }
}
let test1 = [5, 3, 8, 1]; 
filterRangeInPlace(test1, 1, 4);
console.log(test1);


//#4 - sort in decreasing order
let myArr = [5, 2, 1, -10, 8];
myArr.sort((a,b)=>{
  return b-a;
})
console.log(myArr);


//#5 - copy and sorty array
function copySorted(arr){
  let newArr = [];
  newArr = newArr.concat(arr);
  return newArr.sort();
}
let unsortedArr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(unsortedArr);
console.log(sorted);
/////🔽methods below

/**
 * arr.push(...items) – adds items to the end,
 * arr.pop() – extracts an item from the end,
 * arr.shift() – extracts an item from the beginning,
 * arr.unshift(...items) – adds items to the beginning.
 */

//-----arr.splice() -> swiss army knife!
//arr.splice(start[, deleteCount, inserts elem1, ..., elemN])

//practice: from index 1 remove 1 element

let arr = ["I", "study", "JavaScript"];
arr.splice(1,1);
console.log(arr);

//add without replacing
arr.splice(arr.length, 0, "Hello", "World", "lol");
console.log(arr);


//------SLICE------
//arr.slice([start], [end])
//-> creates subarrays

//-----Concat----
//arr.concat(arg1, arg2)
//creates new array that includes values from other arrays

//----------iterate: for each-------
//arr.forEach(function(item, index, array){
//  .... do something
//})

/*
["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });
*/

//-----SEARCHING IN AN ARRAY
//arr.indexOf(item, fromindex)
//-> uses strict equality
//arr.includes(item, fromIndex)

//handling of NaN
const notANumber = [NaN];
//alert( notANumber.indexOf(NaN) ); // -1 (wrong, should be 0)
//alert( notANumber.includes(NaN) );// true (correct)

//----FIND----
//let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
//});


//arr.findIndex()

//----FILTER----------


//------MAP-----
//runs a function on each item and returns array of results



//-----SORT------
//arr.sort() <---sorts alphanumerically tho automatically
//use function a - b to sort fr fr
//also arr.sort(fn)


//-----LOCAL COMPARISON FOR STRINGS
//str.localeCompare(str2)


//----REVERSE
//arr.reverse()

//-----SPLIT AND JOIN
//arr.split('delimiter of choice)
//split('') -> empty string creates an array of letters

//arr.join('seperator/glue')

//-----check if something is an array
