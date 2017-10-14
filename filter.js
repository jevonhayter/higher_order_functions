// Selection

function myFilter(array, func) {
  var newArray = [];
  
  array.forEach(function(element) {
    if (func(element)) {
      newArray.push(element);
    } 
  });

  return newArray;
}



