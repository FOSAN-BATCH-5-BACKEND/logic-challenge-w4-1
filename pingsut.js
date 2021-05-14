/* 
Rama dan Rian sedang bermain di halaman depan Fosan mempeributkan cilok yang tinggal sebungkus,
akhirnya mereka memutuskan untuk membuat function pingsut, yang didalamnya ada 2 parameter yaitu Rama dan Rian,
buatlah fungsi untuk menentukan siapa yang menang dalam pingsut tersebut
*/


function pingsut(Rama, Rian) {
	if(Rama == "Rock" && Rian == "Paper"){
		return "Pemenangnya Rian"
	}else if(Rama == "Scissors" && Rian == "Rock"){
		return "Pemenangnya Rian"
	}else if(Rama == "Scissors" && Rian == "Paper"){
		return "Pemenangnya Rama"
	}else if(Rama == "Paper" && Rian == "Rock"){
		return "Pemenangnya Rama"
	}else if(Rama == Rian){
		return "Hasilnya Draw"
	}
}


console.log(pingsut("Rock", "Paper"))  		// "Pemenangnya Rian"
console.log(pingsut("Scissors", "Rock")) 	// "Pemenangnya Rian"
console.log(pingsut("Scissors", "Paper")) 	// "Pemenangnya Rama"
console.log(pingsut("Paper", "Rock")) 		// "Pemenangnya Rama"
console.log(pingsut("Paper", "Paper")) 		// "Hasilnya draw"
console.log(pingsut("Rock", "Rock"))  		// "Hasilnya draw"