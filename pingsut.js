/* 
Rama dan Rian sedang bermain di halaman depan Fosan mempeributkan cilok yang tinggal sebungkus,
akhirnya mereka memutuskan untuk membuat function pingsut, yang didalamnya ada 2 parameter yaitu Rama dan Rian,
buatlah fungsi untuk menentukan siapa yang menang dalam pingsut tersebut
*/


function pingsut(Rama, Rian) {
	// console.log(Rama, Rian)
	if(Rama ==Rian){
		return 'Hasilnya Draw'
	}
	// jika Rama memilih Rock dan Rian memilih Paper maka Rian adalah pemenangnya
	else if(Rama == 'Rock' && Rian == 'Paper'){
		return 'Pemenangnya Rian'
	}
	// jika Rama memilih scissors dan Rian memilih Rock maka Rian pemenangnya
	else if(Rama == 'Scissors' && Rian == 'Rock'){
		return 'Pemenangnya Rian'
	}
	// jika Rama memilih scissors dan rian memilih paper maka pemenangnya rama
	else if(Rama == 'Scissors' && Rian == 'Paper'){
		return 'Pemenangnya Rama'
	}
	// jika rama memilih paper dan rian memilih rock maka pemenangnya adalah rama
	else if(Rama == 'Paper' && Rian == 'Rock'){
		return 'Pemenangnya Rama'
	}
	// jika rama memilih paper dan rian memilih paper maka hasilnya draw
	// jika rama memilih rock dan rian memilih rock maka hasilnya draw
}



console.log(pingsut("Rock", "Paper"))  		// "Pemenangnya Rian"
console.log(pingsut("Scissors", "Rock")) 	// "Pemenangnya Rian"
console.log(pingsut("Scissors", "Paper")) 	// "Pemenangnya Rama"
console.log(pingsut("Paper", "Rock")) 		// "Pemenangnya Rama"
console.log(pingsut("Paper", "Paper")) 		// "Hasilnya draw"
console.log(pingsut("Rock", "Rock"))  		// "Hasilnya draw"