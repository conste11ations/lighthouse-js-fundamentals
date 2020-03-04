/*
The function should, when given two arrays, concatenate the arrays together.

For example:
code 	output
concat([ 1, 2, 3 ], [ 4, 5, 6 ]); 	[ 1, 2, 3, 4, 5, 6 ]
concat([ 0, 3, 1 ], [ 9, 7, 2 ]); 	[ 0, 3, 1, 9, 7, 2 ]
concat([], [ 9, 7, 2 ]); 	[ 9, 7, 2 ]
concat([ 5, 10 ], []); 	[ 5, 10 ]
*/

function concat(array1, array2) {
  array2.forEach( function(value) {
    array1.push(value);
  });
  return array1;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);