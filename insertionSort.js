function insertionSort( array ){
  for(let i = 0; i < array.length; i++){
    let currentValue = array[i];
    let j = 0;
    for(j = i - 1; j >= 0 && array[j] > currentValue; j--){
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  
  return array;
}

console.log(insertionSort([22, 76, 92, 11, 0, 35, 85, 73]));