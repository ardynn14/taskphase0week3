function cariMean(arr) {
    var a = 0;
    for ( x = 0; x < arr.length; x++){
      a += arr[x]  
      console.log(a)
    }
     return Math.round(a / arr.length)
   }
   
   console.log(cariMean([1, 2, 3, 4, 5]));
   console.log(cariMean([3, 5, 7, 5, 3]));
   console.log(cariMean([6, 5, 4, 7, 3]));
   console.log(cariMean([1, 3, 3]));
   console.log(cariMean([7, 7, 7, 7, 7]));