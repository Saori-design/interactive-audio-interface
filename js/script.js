let musicContainer = document.getElementById('music-container');

let playBtn = document.getElementById('play');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let audio = document.getElementById('audio');
let titleContainer = document.getElementById('title-container');
let title = document.getElementById('title');
let cover = document.getElementById('cover');

//song titles array
let songs = ['creativeminds', 'dance', 'funday', 'onceagain', 'punky'];

//track of song
let songIndex = 0;

//Load song details into DOM
loadSong(songs[songIndex]);

//Update song details
function loadSong(song) {
	title.innerText = song;
	audio.src = `../audio/${song}.mp3`;
	cover.src = `../img/${song}.jpg`;
	playSong();
}

	
//Play song
function playSong() {
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play');
	playBtn.querySelector('i.fas').classList.add('fa-pause');
	// alert("src=" + playSong);
	audio.play();
}

//Pause song
function pauseSong() {
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.add('fa-play');
	playBtn.querySelector('i.fas').classList.remove('fa-pause');
	// alert("src=" + playSong);
	audio.pause();
}




//Previous song
let prevSong = function (){
	songIndex --;

	if(songIndex < 0) {
		songIndex = songs.length - 1;
	}

	loadSong(songs[songIndex]);

	playSong();
}

//Next Song 
let nextSong = function (){
	songIndex ++;

	if(songIndex > songs.length - 1) {
	songIndex = 0;
	}
	loadSong(songs[songIndex]);

	//playSong();
}

//Event listener
playBtn.addEventListener('click', function() {
	let isPlaying = musicContainer.classList.contains('play');
	
	if(isPlaying) {
	pauseSong();
	} else {
	playSong();
	}
});

//Change song
prevBtn.addEventListener('click',prevSong)
nextBtn.addEventListener('click',nextSong)

//Song end
audio. addEventListener('ended', nextSong)