
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(input){
var e =''
for ( x = 0; x < input.length; x++){
var a = input[x][0];
var b = input[x][1];
var c = input[x][2];
var d = input[x][3];

e += 'Nomor ID :  ' + a + '\n' 
+ 'Nama Lengkap :  ' + b + '\n'
+ 'TTL :  ' + c + '\n'
+ 'Hobi :  ' + d + '\n\n'
}
return e  
}

console.log(dataHandling(input))