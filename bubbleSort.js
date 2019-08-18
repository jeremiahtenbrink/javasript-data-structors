function bubbleSort( arr ){
  let noSwaps = false;
  for( let i = arr.length; i > 0; i-- ){
    noSwaps = true;
    for( let j = 0; j < i - 1; j++ ){
      if( arr[ j ] > arr[ j + 1 ] ){
        let temp = arr[ j ];
        arr[ j ] = arr[ j + 1 ];
        arr[ j + 1 ] = temp;
        noSwaps = false;
      }
    }
    if( noSwaps ){
      break;
    }
  }
  return arr;
}

console.log( bubbleSort( [ 37, 67, 98, 12, 45, 63, 12, 76, 83, 34, 20 ] ) );