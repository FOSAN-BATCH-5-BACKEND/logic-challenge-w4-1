/* 
Rama dan Rian sedang bermain di halaman depan Fosan mempeributkan cilok yang tinggal sebungkus,
akhirnya mereka memutuskan untuk membuat function pingsut, yang didalamnya ada 2 parameter yaitu Rama dan Rian,
buatlah fungsi untuk menentukan siapa yang menang dalam pingsut tersebut
*/


function pingsut(Rama, Rian) {
	let batu = 'Rock';
	let kertas = 'Paper';
	let gunting = 'Scissors';
	let penampung = '';
	if  ( Rama == Rian ) {	
		penampung = 'Hasilnya draw';
	}
	else if ( Rama == batu ) {
		penampung = (Rian == kertas) ? 'Pemenangnya Rian' : 'Pemenangnya Rama';
	}
	else if (Rama == gunting ){
		penampung = (Rian == batu) ? 'Pemenangnya Rian' : 'Pemenangnya Rama';
	}
	else if ( Rama == gunting ) {
		penampung =(Rian == kertas) ? 'Pemenangnya Rama' : 'Pemenangnya Rian';
	}
	else if (Rama == kertas  ) {
		penampung = (Rian == batu) ? 'Pemenangnya Rama' : 'Pemenangnya Rian';
	}
	else {
		penampung = 'Rama atau Rian belum siap';
	}
	return penampung;
}



console.log(pingsut("Rock", "Paper"))  		// "Pemenangnya Rian"
console.log(pingsut("Scissors", "Rock")) 	// "Pemenangnya Rian" 
console.log(pingsut("Scissors", "Paper")) 	// "Pemenangnya Rama"
console.log(pingsut("Paper", "Rock")) 		// "Pemenangnya Rama"
console.log(pingsut("Paper", "Paper")) 		// "Hasilnya draw"
console.log(pingsut("Rock", "Rock"))  		// "Hasilnya draw"