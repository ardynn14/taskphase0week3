function hitungJumlahKata(kalimat) {
    a = '';
    for ( x = 0; x < kalimat.length; x++ ){
      if (kalimat[x] === ' '){
        a += kalimat[x]
      }else{
        ''
      }
    }return a.length + 1
  }
  
  
  console.log(hitungJumlahKata('I have a dream'));
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); 
  console.log(hitungJumlahKata('A song to sing'));
  console.log(hitungJumlahKata('I'));
  console.log(hitungJumlahKata('I believe I can code'));