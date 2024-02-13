let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

alert( fruits.length ); // 4

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}


arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );






function copySorted(arr) {
    return arr.slice().sort();
  }
  
  arr = ["HTML", "JavaScript", "CSS"];
  
  let sorted = copySorted(arr);
  
  alert( sorted );
  alert( arr );