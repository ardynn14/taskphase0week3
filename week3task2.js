function balikString(word){
    var a = '';
    for ( x = word.length - 1; x >= 0; x--){
      a += word[x]
    }return a
  }
  
  console.log(balikString('hello World!'))