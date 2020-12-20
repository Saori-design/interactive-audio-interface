let musicContainer = document.getElementById('music-container');
let playBtn = document.getElementById('play');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let audio = document.getElementById('audio');
let titleContainer = document.getElementById('title-container');
let title = document.getElementById('title');
let cover = document.getElementById('cover');

//song titles array
const SONG_LIST = [
	{'file':'creative-minds','title':'Creative Minds'},
	{'file':'dance', 'title':'Dance'},
	{'file':'funday', 'title':'Funday'},
	{'file':'once-again', 'title':'Once Again'},
	{'file':'punky', 'title':'Punky'}
];
const LAST_SONG_INDEX = SONG_LIST.length - 1;

// current index of song
let currentSongIndex = 0;

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
	currentSongIndex--;
	if (currentSongIndex < 0) {
		currentSongIndex = LAST_SONG_INDEX;
	}

	loadSong(currentSongIndex, true);
};

let nextSong = function () {
	currentSongIndex++;
	if (currentSongIndex > LAST_SONG_INDEX) {
		currentSongIndex = 0;
	}

	loadSong(currentSongIndex, true);
};

function loadSong(index, autoplay) {
	title.innerText = SONG_LIST[index].title;
	audio.src = `./audio/${SONG_LIST[index].file}.mp3`;
	cover.src = `./img/${SONG_LIST[index].file}.jpg`;

	if (autoplay) {
		playSong();
	}
}

function createPlaylist() {
	let playlist = document.getElementById('playlist');

	let i;
	for (i = 0; i <= LAST_SONG_INDEX; i++) {
		let div = document.createElement('div');
		let text = document.createTextNode("⏯ " + SONG_LIST[i].title);
		let index = i;
		div.addEventListener('click', () => {
			currentSongIndex = index;
			loadSong(index, true);
		});
		div.appendChild(text);
		playlist.appendChild(div);
	}
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

createPlaylist();
// Load song details into DOM when document loads
loadSong(0, false);