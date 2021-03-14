
exports.min = function min (array) {

  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  } else {
    array.sort(function(a, b) { 
      return a - b;
    })
    return array[0]
  }
}

exports.max = function max (array) {
  if (array === undefined) {
    return 0;
  }
  if (array.length === 0) {
    return 0;
  } else {
    array.sort(function(a, b) { 
      return a - b;
    })
    return array[array.length - 1]
  }
}

exports.avg = function avg (array) {
  if (array === undefined) {
    return 0;
  }
  let sum = 0;
  if (array.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    let avg = sum / array.length;
    return avg
  }
}
