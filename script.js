const cover = document.querySelector('.card-image');
const title = document.querySelector('.card-content h5')
const artist = document.querySelector('.artist')
const audio = document.querySelector('audio')

const data = {
	title:
		'Just a song by someone',
	artist: 'Someone', 
	cover: 'files/jazz.jpg',
	audio: 'files/jazz.mp3'	
}

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerHTML = `<i class="material-icons">user</i>${data.title}`;
artist.innerHTML = `${data.artist}`;
audio.src = `${data.audio}`;