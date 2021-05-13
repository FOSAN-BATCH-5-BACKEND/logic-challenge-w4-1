/* 
Rama dan Rian sedang bermain di halaman depan Fosan mempeributkan cilok yang tinggal sebungkus,
akhirnya mereka memutuskan untuk membuat function pingsut, yang didalamnya ada 2 parameter yaitu Rama dan Rian,
buatlah fungsi untuk menentukan siapa yang menang dalam pingsut tersebut
*/

// 1. Rama dan Rian adalah pemain dari pingsut
// 2. Aturan permainan pingut : - dalam permainan pemain hanya boleh mmenunjukkan karakter Rock, Paper dan Scissors
// 								- antara Rock dan Paper = Paper (menang) dan Rock (kalah)
// 								- antara Scissors dan Rock = Rock (menang) dan Scissors (kalah)
// 								- antara Paper dan Scissors = Scissors (menang) dan Paper (kalah)
// 								- apabila pemain menunjukan karakter sama (Paper & Paper / Scissors & Scissors / Rock & Rock) = Hasilnya Draw


function pingsut(Rama, Rian) {
	if (Rama == "Rock"){
		if (Rian == "Paper"){
			return `Pemenangnya Rian`
		} else if (Rian == "Scissors"){
			return `Pemenangnya Rama`
		}
	}
	if (Rama == "Paper"){
		if (Rian == "Scissors"){
			return `Pemenangnya Rian`
		} else if (Rian == "Rock"){
			return `Pemenangnya Rama`
		}
	}
	if (Rama == "Scissors"){
		if (Rian == "Rock"){
			return `Pemenangnya Rian`
		} else if (Rian == "Paper"){
			return `Pemenangnya Rama`
		} 
	}
	if (Rama == Rian){
		return `Hasilnya Draw`
	}

}



console.log(pingsut("Rock", "Paper"))  		// "Pemenangnya Rian"
console.log(pingsut("Scissors", "Rock")) 	// "Pemenangnya Rian"
console.log(pingsut("Scissors", "Paper")) 	// "Pemenangnya Rama"
console.log(pingsut("Paper", "Rock")) 		// "Pemenangnya Rama"
console.log(pingsut("Paper", "Paper")) 		// "Hasilnya draw"
console.log(pingsut("Rock", "Rock"))  		// "Hasilnya draw"
// console.log(pingsut("Rock", "Scissors"))  		// "Pemenang Rama"