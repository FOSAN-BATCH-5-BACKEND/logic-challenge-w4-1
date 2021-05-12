/* 
INSTRUKSI
=========
buatlah tabel perkalian 1-10 berdasarkan angka yang di minta
misalkan yang di minta adalah 5, maka jawabannya:
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50

*/


function tabelPerkalian(angka) {
  // let penampungIndex = 0
  let penampungAngka = 0
  for(let i = 1; i < 11; i++){
    // hasil = i * angka
    // penampungIndex += i
    // penampungAngka += angka
    // let hasil = i * angka
    penampungAngka += i +" "+ "*" + " " +angka + " " + "="+ " " + i * angka + "\n"
    // console.log(i '*' angka = i * angka)
    // return `${i} * ${angka} = ${i * angka}`
    // console.log(i)
    // return `${i} * ${angka} = ${hasil}`
    // let hasil = i * angka
    // kali = angka[i] * angka
  }
  return penampungAngka
  // let hasil = penampungIndex * penampungAngka
  // return `${penampungIndex} * ${penampungAngka} = ${hasil}`
  // return penampungIndex
  // return `${i} * ${angka} = hasil`
  // return `${i} * ${angka} = ${hasil}`
  // return kali
}

console.log(tabelPerkalian(5))
/* 
1 * 5 = 5
2 * 5 = 10
3 * 5 = 15
4 * 5 = 20
5 * 5 = 25
6 * 5 = 30
7 * 5 = 35
8 * 5 = 40
9 * 5 = 45
10 * 5 = 50
*/

console.log(tabelPerkalian(7))
/*
1 * 7 = 7
2 * 7 = 14
3 * 7 = 21
4 * 7 = 28
5 * 7 = 35
6 * 7 = 42
7 * 7 = 49
8 * 7 = 56
9 * 7 = 63
10 * 7 = 70
*/

console.log(tabelPerkalian(13))
/*
1 * 13 = 13
2 * 13 = 26
3 * 13 = 39
4 * 13 = 52
5 * 13 = 65
6 * 13 = 78
7 * 13 = 91
8 * 13 = 104
9 * 13 = 117
10 * 13 = 130
*/