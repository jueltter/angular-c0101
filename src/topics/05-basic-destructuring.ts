interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;

}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 50,
    songDuration: 182,
    song: "Love Story",
    details: {
        author: "Taylor Swift",
        year: 2019
    }
}

const song = "You Belong With Me";

const { 
    song:anotherSong, 
    songDuration:duration, 
    details
} = audioPlayer;

const { author: auth } = details;

//console.log({ anotherSong, duration, auth });

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [ p1, p2, p3 ] = dbz;

const [ , , , trunks = 'Not Found' ] = dbz;

console.log({ p1, p2, p3, trunks });

export {};