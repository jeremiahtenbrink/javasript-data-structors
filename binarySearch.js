function binarySearch( sortedArray, value ){let left = 0;

  let right = sortedArray.length - 1;
  let middle = Math.floor( ( right + left ) / 2 );
  
  while( middle >= left && middle <= right ){
    
    if( sortedArray[ middle ] === value ){
      return middle;
      
    }else if( sortedArray[ middle ] > value ){
      right = middle - 1;
      middle = Math.floor( (right + left) / 2 );
      
    }else{
      left = middle + 1;
      middle = Math.floor( (right + left ) / 2);
    }
  }
  return -1;
}

console.log( binarySearch( [ 1, 2, 3, 4, 5 ], 2 ) );
console.log( binarySearch( [ 1, 2, 3, 4, 5 ], 5 ) );
console.log( binarySearch( [5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95, 96, 98, 99], 100 ) );
