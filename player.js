window.player = {
	
	 cover : document.querySelector('.card-image'),
	 title : document.querySelector('.card-content h5'),
	 artist : document.querySelector('.artist'),
	 audio : document.querySelector('audio'),
	 audioData: audios,
	 currentAudio: {},
	 start(){
	 	this.currentAudio = this.audioData[0];
		this.cover.style.background = `url('${this.currentAudio.cover}') no-repeat center center / cover`;
		this.title.innerHTML = `${this.currentAudio.title}`;
		this.artist.innerText = `${this.currentAudio.artist}`;
		this.audio.src = `${player.currentAudio.audio}`;

		this.audio.addEventListener('ended', ()=>{

		})

	 } 
}




