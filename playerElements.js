export default {
	get(){
		this.cover  = document.querySelector('.card-image');
	 	this.title  = document.querySelector('.card-content h5');
	 	this.artist =  document.querySelector('.artist');
	 	this.audio  = document.querySelector('audio');
	 	this.playPause = document.querySelector('#play-pause');
		this.vol = document.querySelector('#vol');
	
	},
	createElement(audio){
		this.audio = new Audio(audio);
	},
	action(){
		this.playPause.onclick = () => this.tooglePlayPause()
		this.vol.onclick = () => this.toogleMute()
	}
}