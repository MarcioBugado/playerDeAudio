import audios from './data.js';
import {path, secondsToMinutes} from './utils.js';
import elements from './playerElements.js';

export default {
	
	 audioData: audios,
	 currentAudio: {},
	 currentPlaying:0,
	 isPlaying: false,
	 start(){
	 	elements.get.call(this)
	 	this.update()
	 	this.setVolume(10)
	 	this.volumeControl.value = 10;
	 	this.seekbar.value = 0;

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
	 setVolume(value){
	 	this.audio.volume = value / 100;
	 },
	 setSeek(value){
	 	this.audio.currentTime = value;
	 },
	 timeUpdate(){
	 	this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
	 	this.seekbar.value = this.audio.currentTime;
	 },
	 update(){
	 	this.currentAudio = this.audioData[this.currentPlaying];
		this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`;
		this.title.innerHTML = `${this.currentAudio.title}`;
		this.artist.innerText = `${this.currentAudio.artist}`;
		elements.createElement.call(this, path(this.currentAudio.audio))

		this.audio.onloadeddata = () => {
			elements.action.call(this);
		}


	 },
	 restart(){
	 	this.currentPlaying = 0;
	 	this.update()
	 }

}




