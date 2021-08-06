function charCount(myChar,str){
  var count = 0
   for(var i=0; i < str.length;i++){
    if( myChar==str.charAt(i)){
        count ++;
    }
    
   }
   return count;
}
console.log(charCount("s","sss"));