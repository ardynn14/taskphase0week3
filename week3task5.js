function palindrome(kata) {
    var a ='';
    for ( x = kata.length-1; x >= 0; x--){
      a += kata[x]
    }if ( a === kata){
      e = true
    }else{
      e = false
    }return e
   }
   
   
   console.log(palindrome('katak'));
   console.log(palindrome('blanket'));
   console.log(palindrome('civic'));
   console.log(palindrome('kasur rusak'));
   console.log(palindrome('mister')); 