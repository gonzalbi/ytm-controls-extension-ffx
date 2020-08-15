document.addEventListener('keydown', controlPlayer);

function controlPlayer(e){
	switch(e.code){
		case 'MediaTrackNext':
			document.querySelector(".next-button").click();
			break;
		case 'MediaTrackPrevious':
			document.querySelector(".previous-button").click();
			break;
		case 'MediaPlayPause':
			document.querySelector(".play-pause-button").click();
			break;
	}
}