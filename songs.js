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

export {arijit, Bollywood, mysong, lofi, allsong};