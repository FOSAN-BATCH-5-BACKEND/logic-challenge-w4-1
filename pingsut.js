/* 
Rama dan Rian sedang bermain di halaman depan Fosan mempeributkan cilok yang tinggal sebungkus,
akhirnya mereka memutuskan untuk membuat function pingsut, yang didalamnya ada 2 parameter yaitu Rama dan Rian,
buatlah fungsi untuk menentukan siapa yang menang dalam pingsut tersebut
*/


function pingsut(Rama, Rian) {
	let penampung = ''
	if (Rama == Rian){
		penampung = 'Hasilnya draw'
	}
	else if (Rama == 'Rock'){
		penampung = (Rian == 'Paper') ? 'Pemenangnya Rian' : 'Pemenangnya Rama';
	}
	else if (Rama == 'Scissors'){
		penampung = (Rian == 'Rock') ? 'Pemenangnya Rian' : 'Pemenangnya Rama';
	}
	else if (Rama == "Paper"){
		penampung = (Rian == 'Rock') ? 'Pemenangnya Rama' : 'Pemenangnya Rian'
	}
	else{
		penampung = 'Rama atau Rian memasukan pilihan yang salah';
	}

return penampung
}



console.log(pingsut("Rock", "Paper"))  		// "Pemenangnya Rian"
console.log(pingsut("Scissors", "Rock")) 	// "Pemenangnya Rian"
console.log(pingsut("Scissors", "Paper")) 	// "Pemenangnya Rama"
console.log(pingsut("Paper", "Rock")) 		// "Pemenangnya Rama"
console.log(pingsut("Paper", "Paper")) 		// "Hasilnya draw"
console.log(pingsut("Rock", "Rock"))  		// "Hasilnya draw"