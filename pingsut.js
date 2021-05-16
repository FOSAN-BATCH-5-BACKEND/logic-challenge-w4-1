/* 
Rama dan Rian sedang bermain di halaman depan Fosan mempeributkan cilok yang tinggal sebungkus,
akhirnya mereka memutuskan untuk membuat function pingsut, yang didalamnya ada 2 parameter yaitu Rama dan Rian,
buatlah fungsi untuk menentukan siapa yang menang dalam pingsut tersebut
*/

function pingsut(Rama, Rian) {
  //buat kodemu disini
  if (
    (Rama == "Rock" && Rian == "Paper") ||
    (Rama == "Scissors" && Rian == "Rock") ||
    (Rama == "Rock" && Rian == "Scissors") ||
    (Rama == "Paper" && Rian == "Scissors")
  ) {
    return `Pemenangnya Rian`;
  } else if (
    (Rian == "Rock" && Rama == "Paper") ||
    (Rian == "Scissors" && Rama == "Rock") ||
    (Rian == "Rock" && Rama == "Scissors") ||
    (Rian == "Paper" && Rama == "Scissors")
  ) {
    return `Pemenangnya Rama`;
  } else {
    return `Hasilnya draw`;
  }
}

console.log(pingsut("Rock", "Paper")); // "Pemenangnya Rian"
console.log(pingsut("Scissors", "Rock")); // "Pemenangnya Rian"
console.log(pingsut("Scissors", "Paper")); // "Pemenangnya Rama"
console.log(pingsut("Paper", "Rock")); // "Pemenangnya Rama"
console.log(pingsut("Paper", "Paper")); // "Hasilnya draw"
console.log(pingsut("Rock", "Rock")); // "Hasilnya draw"
