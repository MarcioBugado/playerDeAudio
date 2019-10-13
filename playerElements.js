import {secondsToMinutes} from './utils.js';


export default {
	get(){
		this.cover  = document.querySelector('.card-image');
	 	this.title  = document.querySelector('.card-content h5');
	 	this.artist =  document.querySelector('.artist');
	 	this.audio  = document.querySelector('audio');
	 	this.playPause = document.querySelector('#play-pause');
		this.vol = document.querySelector('#vol');
		this.volumeControl = document.querySelector('#vol-control');
		this.seekbar = document.querySelector('#seekbar');
		this.currentDuration = document.querySelector('#current-duration')
		this.totalDuration = document.querySelector('#total-duration')
	},
	createElement(audio){
		this.audio = new Audio(audio);
	},
	action(){
		this.audio.onended = ()=> this.next();
		this.audio.ontimeupdate = () => this.timeUpdate()
		this.playPause.onclick = () => this.tooglePlayPause()
		this.vol.onclick = () => this.toogleMute()
		this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value)
		this.volumeControl.onchange = () => this.setVolume(this.volumeControl.value)		
		this.seekbar.oninput = () => this.setSeek(this.seekbar.value)
		this.seekbar.onchange = () => this.setSeek(this.seekbar.value)	
		this.seekbar.max = this.audio.duration;	
		this.totalDuration.innerText = secondsToMinutes(this.audio.duration);
	}
}