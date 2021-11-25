function map(sArray, callback){
  const r = [];
    for (let i = 0; i < sArray.length; i++){
      const newSrc = sArray[i];
      r.push(callback(newSrc));
    }
    return r;
}

function reduce(sArray, callback, startingPoint){
  let total;
  if (startingPoint){
    total = startingPoint;
    for (let i = 0; i < sArray.length; i++){
      total = callback(sArray[i], total);
    }
    return total;
  } else {
    total = sArray[0];
    for (let i = 1; i < sArray.length; i++){
      total = callback(sArray[i], total);
    }
    return total;
  }
}