import audios from './data.js';
import {path} from './utils.js';
import elements from './playerElements.js';

export default {
	
	 audioData: audios,
	 currentAudio: {},
	 currentPlaying:0,
	 isPlaying: false,
	 start(){
	 	elements.get.call(this);
	 	elements.action.call(this);

	 	this.update()
		this.audio.onended = ()=> this.next();

	 },
	 play(){
	 	this.isPlaying = true;
	 	this.audio.play()
	 	this.playPause.innerText = 'pause';
	 },
	 pause(){
	 	this.isPlaying = false;
	 	this.audio.pause()
	 	this.playPause.innerText = 'play_arrow';
	 },
	 tooglePlayPause(){
	 	if(this.isPlaying){
	 		this.pause()
	 	}else{
	 		this.play()
	 	}
	 },
	 toogleMute(){
	 	this.audio.muted = !this.audio.muted;
	 	this.vol.innerText = this.audio.muted ? 'volume_down':'volume_up';
	 },
	 next(){
	 	this.currentPlaying++;
	 	if(this.currentPlaying == this.audioData.length){
	 		this.restart()
	 	}
		this.update()
		this.audio.play()
		
	 },
	 update(){
	 	this.currentAudio = this.audioData[this.currentPlaying];
		this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
		this.title.innerHTML = `${this.currentAudio.title}`;
		this.artist.innerText = `${this.currentAudio.artist}`;
		
		elements.createElement.call(this, path(this.currentAudio.audio))

	 },
	 restart(){
	 	this.currentPlaying = 0;
	 	this.update()
	 }

}




