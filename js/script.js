let musicContainer = document.getElementById('music-container');
let playBtn = document.getElementById('play');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let audio = document.getElementById('audio');
let titleContainer = document.getElementById('title-container');
let title = document.getElementById('title');
let cover = document.getElementById('cover');

//song titles array
const SONGS = ['creative_minds', 'dance', 'funday', 'once_again', 'punky'];
const LAST_SONG_INDEX = SONGS.length - 1;

// current index of song
let songIndex = 0;

let playSong = function () {
	musicContainer.classList.add('play');
	playBtn.querySelector('span.fas').classList.remove('fa-play');
	playBtn.querySelector('span.fas').classList.add('fa-pause');
	audio.play();
};

let pauseSong = function () {
	musicContainer.classList.remove('play');
	playBtn.querySelector('span.fas').classList.add('fa-play');
	playBtn.querySelector('span.fas').classList.remove('fa-pause');
	audio.pause();
};

let prevSong = function () {
	songIndex--;
	if (songIndex < 0) {
		songIndex = LAST_SONG_INDEX;
	}

	loadSong(SONGS[songIndex]);
	playSong();
};

let nextSong = function () {
	songIndex++;
	if (songIndex > LAST_SONG_INDEX) {
		songIndex = 0;
	}

	loadSong(SONGS[songIndex]);
	playSong();
};

function loadSong(song) {
	title.innerText = song;
	audio.src = `./audio/${song}.mp3`;
	cover.src = `./img/${song}.jpg`;
}

// Click Listeners
playBtn.addEventListener('click', function() {
	let isPlaying = musicContainer.classList.contains('play');
	
	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});

prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);

// Song end
audio.addEventListener('ended', nextSong);

// Load song details into DOM when document loads
loadSong(SONGS[songIndex]);