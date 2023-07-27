const arijit = [
    {
        name: "Chhod Diya",
        img: "songs/Arijitimg/Chhod Diya.jpg",
        path: "songs/ArijitSong/Chhod Diya (Lyrics).mp3"
    },
    {
        name: "O sudh budh khoyi hai khoyi Maine",
        img: "songs/Arijitimg/O sudh budh khoyi hai khoyi Maine.jpg",
        path: "songs/ArijitSong/O sudh budh khoyi hai khoyi Maine.mp3"
    },
    {
        name: "phir-aur-kya-chahiye",
        img: "songs/Arijitimg/phir-aur-kya-chahiye.jpg",
        path: "songs/ArijitSong/Phir Aur Kya Chahiye.mp3"
    },
    {
        name: "Tera Fitoor Lyrical - Genius",
        img: "songs/Arijitimg/Tera Fitoor Lyrical - Genius.jpg",
        path: "songs/ArijitSong/Tera Fitoor Lyrical - Genius.mp3"
    },
    {
        name: "Tere Hawale (LYRICS)",
        img: "songs/Arijitimg/Tere Hawale (LYRICS).jpg",
        path: "songs/ArijitSong/Tere Hawale (LYRICS).mp3"
    }
];

const Bollywood = [
    {
        name: "Kala Chashma Baar Baar Dekho",
        img: "songs/Bollywood Hits img/Kala Chashma Baar Baar Dekho.jpg",
        path: "songs/Bollywood Hits Song/Kala Chashma  Baar Baar Dekho.mp3"
    },
    {
        name: "Kamariya – Mitron",
        img: "songs/Bollywood Hits img/Kar Gayi Chull - Kapoor & Sons.jpeg",
        path: "songs/Bollywood Hits Song/Kar Gayi Chull - Kapoor & Sons.mp3"
    },
    {
        name: "London Thumakda",
        img: "songs/Bollywood Hits img/London Thumakda.jpg",
        path: "songs/Bollywood Hits Song/London Thumakda.mp3"
    },
    {
        name: "Nashe Si Chadh Gayi",
        img: "songs/Bollywood Hits img/Nashe Si Chadh Gayi.jpg",
        path: "songs/Bollywood Hits Song/Nashe Si Chadh Gayi.mp3"
    },
    {
        name: "Sauda Khara Khara Good Newwz",
        img: "songs/Bollywood Hits img/Sauda Khara Khara Good Newwz.avif",
        path: "songs/Bollywood Hits Song/Sauda Khara Khara Good Newwz.mp3"
    }
];

const mysong = [
    {
        name: "vur yüreğim✘gangsta's paradise",
        img: "songs/vur yüreğim✘gangsta img/vur.jpg",
        path: "songs/vur yüreğim✘gangsta song/vur.mp3"
    },
    {
        name: "INSTASAMKA - Отключаю телефон",
        img: "songs/vur yüreğim✘gangsta img/INSTASAMKA.jpeg",
        path: "songs/vur yüreğim✘gangsta song/INSTASAMKA.mp3"
    },
    {
        name: "Night Lovell - Polozhenie",
        img: "songs/vur yüreğim✘gangsta img/Nightlove.jpg",
        path: "songs/vur yüreğim✘gangsta song/Night Lovell.mp3"
    },
    {
        name: "Xcho - Ты и Я (Tik Tok Remix) ",
        img: "songs/vur yüreğim✘gangsta img/Xcho.jpg",
        path: "songs/vur yüreğim✘gangsta song/Xcho.mp3"
    },
    {
        name: "CVRTOON - İzmir Marş",
        img: "songs/vur yüreğim✘gangsta img/CVRTOON - İzmir Marşı.jpg",
        path: "songs/vur yüreğim✘gangsta song/CVRTOON - İzmir Marşı.mp3"
    }
];

const lofi = [
    {
        name: "Coke Studio Season 14",
        img: "songs/lofi flip img/Coke Studio Season 14.png",
        path: "songs/lofi flip song/Coke Studio  Season 14.mp3"
    },
    {
        name: "LYRICAL - Main Agar Kahoon",
        img: "songs/lofi flip img/LYRICAL - Main Agar Kahoon.jpg",
        path: "songs/lofi flip song/LYRICAL Main Agar Kahoon.mp3"
    },
    {
        name: "PANIYON SA - LoFi Remix - Anik",
        img: "songs/lofi flip img/PANIYON SA - LoFi Remix - Anik8.jpeg",
        path: "songs/lofi flip song/PANIYON SA - LoFi Remix - Anik8.mp3"
    },
    {
        name: "Saibo Lofi Flip VIBIE",
        img: "songs/lofi flip img/Saibo Lofi Flip VIBIE.jpg",
        path: "songs/lofi flip song/Saibo Lofi Flip  VIBIE.mp3"
    },
    {
        name: "Tere Vaaste Zara Hatke Zara Bachke",
        img: "songs/lofi flip img/Tere Vaaste Zara Hatke Zara Bachke.jpg",
        path: "songs/lofi flip song/Tere Vaaste  Zara Hatke Zara Bachke.mp3"
    }
];


let allsong = [];
let j = 0;
for (let i = 0; i < 5; i++) {
    allsong[j++] = arijit[i];
}

for (let i = 0; i < 5; i++) {
    allsong[j++] = Bollywood[i];
}

for (let i = 0; i < 5; i++) {
    allsong[j++] = mysong[i];
}

for (let i = 0; i < 5; i++) {
    allsong[j++] = lofi[i];
}

const music = document.querySelector("audio");
const play = document.getElementById("play");
const backward = document.getElementById("backward");
const forward = document.getElementById("forward");
const img = document.getElementById("img");
const songName = document.getElementById("songName");
let progressBar = document.getElementById("progressBar");
const navmusic = document.getElementById("nav-music");
const songBar = document.getElementById("songBar");
const songbox1 = document.getElementById("songbox1");
const songbox2 = document.getElementById("songbox2");
const songbox3 = document.getElementById("songbox3");

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");

let isPlay = false;
let songIndex = 0;
let songList = allsong;

//! music play and pause
const playSong = () => {
    isPlay = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("rotted");
    navmusic.classList.add("rotted");
};

const pauseSong = () => {
    isPlay = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("rotted");
    navmusic.classList.remove("rotted");
};

play.addEventListener("click", () => {
    isPlay ? pauseSong() : playSong();
});

//! music change

//! forward 

const loadSong = (songIndex) => {
    songName.textContent = songList[songIndex].name;
    music.src = songList[songIndex].path;
    img.src = songList[songIndex].img;
};

const autoPlay = () => {
    songIndex++;
    if (songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadSong(songIndex);
    playSong();
}

// auto Play function

setInterval(() => {
    if (music.currentTime == music.duration) {
        autoPlay();
    }
}, 1000);

forward.addEventListener("click", autoPlay);

// ! backward

backward.addEventListener("click", () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadSong(songIndex);
    playSong();
});

//! update progressBar

music.addEventListener('timeupdate', () => {
    let progress = parseInt((music.currentTime / music.duration) * 100);
    progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
    music.currentTime = (progressBar.value * music.duration) / 100;
    progressBar.value = parseInt((progressBar.value * music.duration) / 100);
});

navmusic.addEventListener("click", () => {
    songBar.classList.toggle("popup");
});

// ! Song boxs

box1.addEventListener("click", () => {
    songList = arijit;
    songIndex = 0;
    loadSong(songIndex);
    playSong()
    songBar.classList.remove("popup");
});

box2.addEventListener("click", () => {
    songList = Bollywood;
    songIndex = 0;
    loadSong(songIndex);
    playSong()
    songBar.classList.remove("popup");
});

box3.addEventListener("click", () => {
    songList = mysong;
    songIndex = 0;
    loadSong(songIndex);
    playSong();
    songBar.classList.remove("popup");
});

box4.addEventListener("click", () => {
    songList = lofi;
    songIndex = 0;
    loadSong(songIndex);
    playSong();
    songBar.classList.remove("popup");
});

box5.addEventListener("click", () => {
    songList = allsong;
    songIndex = 0;
    loadSong(songIndex);
    playSong();
    songBar.classList.remove("popup");
});

// ! add song list in bottom box

let innerHtml1 = "";
let innerHtml2 = "";
let innerHtml3 = "";

for (let i = 0; i < 5; i++) {
    innerHtml1 +=
        `
            <div class="songslistbar">
                <img src="${arijit[i].img}"/>
                <p><a href="#">${arijit[i].name}</a></p>
                <i class="fa-solid fa-play fa-2xs" ></i>
            </div>
        `
}

songbox1.innerHTML = innerHtml1;

for (let i = 0; i < 5; i++) {
    innerHtml2 +=
        `
            <div class="songslistbar">
                <img src="${Bollywood[i].img}"/>
                <p><a href="#">${Bollywood[i].name}</a></p>
                <i class="fa-solid fa-play fa-2xs"></i>
            </div>
        `
}

songbox2.innerHTML = innerHtml2

for (let i = 0; i < 5; i++) {
    innerHtml3 +=
        `
            <div class="songslistbar">
                <img src="${mysong[i].img}"/>
                <p><a href="#">${mysong[i].name}</a></p>
                <i class="fa-solid fa-play fa-2xs"></i>
            </div>
        `
}

songbox3.innerHTML = innerHtml3

// ! song list bar

const songslistbar = document.getElementsByClassName("songslistbar")
let tracks = [];
let isPlays = false;

for (let i = 0; i < songslistbar.length; i++) {

    songslistbar[i].addEventListener("click", () => {
        if (tracks.length > 0) {
            tracks[0].classList.remove("fa-pause");
            tracks[0].classList.add("fa-play");
        }

        if (isPlays && songslistbar[i] == isPlays) {
            pauseSong();
            isPlays = false;
        } else {
            songIndex = i;
            loadSong(songIndex);
            playSong();
            songslistbar[i].lastElementChild.classList.remove("fa-play");
            songslistbar[i].lastElementChild.classList.add("fa-pause");
            tracks[0] = songslistbar[i].lastElementChild;

            console.log(tracks[0]);
            songBar.classList.remove("popup");
            isPlays = songslistbar[i];
            console.log(isPlays);
        }
    });
};