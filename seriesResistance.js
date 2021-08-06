function seriesResistance(arr) {
  var RT = 0;
  for (var i = 0; i < arr.length; i++) {
    RT += arr[i];
  }
  if(RT > 1){
    return `${RT} ohms`;
 }

else{
    return `${RT} ohm`;
 }
  
}

console.log(seriesResistance([0.2, 0.3]));
