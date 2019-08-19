function selectioinSort( arr ){
  for( let i = 0; i < arr.length; i++ ){
    let lowest = i;
    for( let j = i + 1; j < arr.length; j++ ){
      if( arr[ lowest ] > arr[ j ] ){
        lowest = j;
      }
    }
    if( i !== lowest ){
      let temp = arr[ i ];
      arr[ i ] = arr[ lowest ];
      arr[ lowest ] = temp;
      console.log( arr );
    }
  }
  
  return arr;
}

console.log( selectioinSort( [ 40, 32, 41, 57, 92, 13, 1, 30, 37, 73 ] ) );