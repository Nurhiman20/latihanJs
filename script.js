function getPilihanComputer() {
	const comp = Math.random();

    if( comp < 0.34 ) return 'rock';
    if( comp >= 0.34 && comp < 0.67 ) return 'paper';
    return 'scissors';	
}

function getHasil(comp, player) {
    if( player == comp ) return 'SERI';
    if( player == 'paper' ) return ( comp == 'rock' ) ? 'MENANG' : 'KALAH';
    if( player == 'rock' ) return ( comp == 'paper' ) ? 'KALAH' : 'MENANG';
    if( player == 'scissors' ) return ( comp == 'rock' ) ? 'KALAH' : 'MENANG';
}

function putar() {
	const imgComputer = document.querySelector('.img-computer');
	const gambar = ['rock','paper','scissors'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function() {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if ( i == gambar.length ) i = 0;
	}, 100)
}

let skorP = 0;
let skorC = 0;

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
	pil.addEventListener('click', function() {
		const pilihanCom = getPilihanComputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanCom, pilihanPlayer);

		putar();

		if (hasil === 'MENANG') skorP += 1;
		if (hasil === 'KALAH') skorC += 1 ;

		setTimeout(function() {
			const imgComputer = document.querySelector('.img-computer');
			imgComputer.setAttribute('src', 'img/'+pilihanCom+'.png');

			const info = document.querySelector('.info');
			info.innerHTML = hasil;

			const skorCom = document.querySelector('.score-com');
			skorCom.innerHTML = 'COM : ' + skorC;
			const skorPlayer = document.querySelector('.score-player');
			skorPlayer.innerHTML = 'PLAYER : ' + skorP;
		}, 1000)
	});
});