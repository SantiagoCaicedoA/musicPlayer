const songs = [ 
    "bensound-actionable.mp3",
    "bensound-anewbeginning.mp3",
    "bensound-beyondtheline.mp3",
    "bensound-goinghigher.mp3",
    "bensound-punky.mp3",
    "bensound-rumble.mp3",
];


function createSongList(){
    const list = document.createElement("ol");
    for(let i = 0; i<songs.length; i++){
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list;
}


const songList = document.getElementById("songList");
songList.appendChild(createSongList());

const links = document.querySelectorAll('li');
for (const link of links){
    link.addEventListener('click', setSong)
}

 function setSong (e) {
    document.getElementById('headphones').classList.remove("pulse");
    const source = document.getElementById("source");
    source.src = "songs/" + e.target.innerText;

    var player = document.getElementById('player');
    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`;

    player.load();
    player.play();
    document.getElementById('headphones').classList.add("pulse");
};

function playAudio(){
    if(player.readyState){
        player.play();
    }
}

function pauseAudio(){
    player.pause();  
}

const slider = document.getElementById('volumeSlider');
slider.oninput = function (e) {
    var volume = e.target.value;
    player.volume = volume;
}

function updateProgress(){
    if (player.currentTime > 0){
        var progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration) * 100; 
    }
    
}


