// Transformation

function myMap(array, func) {
  var result = [];

  array.forEach(function(element) {
    result.push(func(element));  
  });

  return result;
}
