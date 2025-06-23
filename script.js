// DOM Elements
const welcomeScreen = document.getElementById('welcomeScreen');
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

// Welcome screen elements
const enterAppBtn = document.getElementById('enterAppBtn');

// Navigation elements
const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn');
const bodyElement = document.body;

// Header elements
const settingsBtn = document.getElementById('settingsBtn');
const searchInput = document.getElementById('searchInput');

// Video background elements
const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Song detail page elements
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn');

// Player elements
const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');
const toggleLyricsBtn = document.getElementById('toggleLyricsBtn');

// Progress elements
const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

// Control elements
const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider');
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay');

// App State
let currentSongIndex = 0;
let isPlaying = false;
let isShuffled = false;
let repeatMode = 'none'; // 'none', 'one', 'all'
let filteredSongs = [];
let isLyricsVisible = true;

// Settings State
let settings = {
    theme: 'default',
    audioEffects: {
        reverb: 0,
        bass: 0,
        treble: 50
    },
    visualEffects: {
        particles: false,
        waveform: false,
        blur: true
    },
    playback: {
        autoplay: true,
        crossfade: false,
        lyricsAuto: true
    }
};

// Audio Context for Effects
let audioContext;
let audioSource;
let audioDestination;
let reverbNode;
let bassNode;
let trebleNode;

// Particle System
let particles = [];
let particleInterval;

// Waveform
let waveformCanvas;
let waveformCtx;
let analyser;
let dataArray;

let songs = [
    {
        id: 1,
        title: "Bandida",
        artist: "C.R.O",
        album: "Bardero",
        albumArtUrl: "https://i.ytimg.com/vi/8bOr7b_oBTA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD3LboNMSr3d-ChLKIEPCnCggVpDg",
        audioSrc: "audio/Mala Vida.mp3",
        videoBgSrc: "videos/Mala Vida.mp4",
        lyrics: [
            { time: 32.0, text: "Bandida, bandida" },
            { time: 38.0, text: "No me odies porque llevo mala vida, hey vida" },
            { time: 44.0, text: "Estoy llegando al final de mi partida, partida" },
            { time: 50.0, text: "Déjame irte a buscar" },
            { time: 56.0, text: "Déjame ir a algún bar" },
            { time: 62.0, text: "Déjame dispararles" },
            { time: 68.0, text: "Bandida, bandida" },
            { time: 74.0, text: "No me odies porque llevo mala vida, hey vida" },
            { time: 80.0, text: "Estoy llegando al final de mi partida, partida" },
            { time: 86.0, text: "Déjame irte a buscar" },
            { time: 92.0, text: "Déjame ir a algún bar" },
            { time: 98.0, text: "Déjame dispararles" },
            { time: 104.0, text: "Tengo vitamina y con eso me basta" },
            { time: 110.0, text: "Y un así en la manga por si no me alcanza" },
            { time: 116.0, text: "Ya no juego si primero no veo plata" },
            { time: 122.0, text: "Como zorro viejo no pierdo las mañas" },
            { time: 128.0, text: "Siempre me mantuve fino en las jugadas nunca me quebré yo domino mi parla" },
            { time: 134.0, text: "Mi polvo en la mesa blanco como perla" },
            { time: 140.0, text: "Si te gusta puta tenes que pagarla" },
            { time: 146.0, text: "Ya no pierdo el tiempo con toda esa mierda" },
            { time: 152.0, text: "No me juegues mal que mis wachos se encargan" },
            { time: 158.0, text: "Hace tiempo que me sigue esa bandida" },
            { time: 164.0, text: "Por lo menos ahora vivo pa' contarla" },
            { time: 170.0, text: "Éramos amigos pero nos peleamos" },
            { time: 176.0, text: "Porque dos bandidos saben de ese mambo" },
            { time: 182.0, text: "Ahora es más bandida y ya domina el rango" },
            { time: 188.0, text: "Sabe bien que volveremos a encontrarnos" },
            { time: 194.0, text: "Bandida, bandida" },
            { time: 200.0, text: "No me odies porque llevo mala vida, hey vida" },
            { time: 206.0, text: "Estoy llegando al final de mi partida, partida" },
            { time: 212.0, text: "Déjame irte a buscar" },
            { time: 218.0, text: "Déjame ir a algún bar" },
            { time: 224.0, text: "Déjame dispararles" },
            { time: 230.0, text: "Bandida, bandida" },
            { time: 236.0, text: "No me odies porque llevo mala vida, hey vida" },
            { time: 242.0, text: "Estoy llegando al final de mi partida, partida" },
            { time: 248.0, text: "Déjame irte a buscar" },
            { time: 254.0, text: "Déjame ir a algún bar" },
            { time: 260.0, text: "Déjame dispararles" },
            { time: 266.0, text: "Ella es una bandida, bandida" },
            { time: 272.0, text: "Es mía, otro no la puede tener" },
            { time: 278.0, text: "No la puede tener" },
            { time: 284.0, text: "No, no, no" },
            { time: 290.0, text: "Y me mira, y me mira" },
            { time: 296.0, text: "Te juro que siempre voy a caer" },
            { time: 302.0, text: "Y voy a volver, y voy a tenerte" },
            { time: 308.0, text: "Bandida, bandida" },
            { time: 314.0, text: "Decime cuando te volveré a ver" },
            { time: 320.0, text: "(Cuando te volveré a ver)" },
            { time: 326.0, text: "Nau, nau, nau" },
            { time: 332.0, text: "Y transpira, transpira" },
            { time: 338.0, text: "Cuando estoy en mi cama dándole" },
            { time: 344.0, text: "Esta matándome" },
            { time: 350.0, text: "No, no, no" },
            { time: 356.0, text: "Bandida, bandida" },
            { time: 362.0, text: "No me odies porque llevo mala vida, hey vida" },
            { time: 368.0, text: "Estoy llegando al final de mi partida, partida" },
            { time: 374.0, text: "Déjame irte a buscar" },
            { time: 380.0, text: "Déjame ir a algún bar" },
            { time: 386.0, text: "Déjame dispararles" },
            { time: 392.0, text: "Bandida, bandida" },
            { time: 398.0, text: "No me odies porque llevo mala vida, hey vida" },
            { time: 404.0, text: "Estoy llegando al final de mi partida, partida" },
            { time: 410.0, text: "Déjame irte a buscar" },
            { time: 416.0, text: "Déjame ir a algún bar" },
            { time: 422.0, text: "Déjame dispararles" }
        ]
    },
    {
        id: 2,
        title: "Hotel",
        artist: "Montel Fish",
        album: "Her Love Still Haunts Me Like a Ghost",
        albumArtUrl: "https://www.riaa.com/wp-content/uploads/2023/12/hotel-MONTELL-FISH.jpg",
        audioSrc: "audio/hotel.mp3",
        videoBgSrc: "videos/hotel.mp4",
        lyrics: [
            { time: 0, text: "I'm a slave to her, slave to her love" },
            { time: 3.5, text: "I'm a slave to her, slave to her love" },
            { time: 7, text: "I'm a slave to her, slave to her love" },
            { time: 10.5, text: "I'm a slave to your love, it's who you are that I-" },
            { time: 14, text: "When I met you in that hotel room" },
            { time: 17.5, text: "I could tell that you were so bad news" },
            { time: 21, text: "But I keep messin' with ya, messin' with ya" },
            { time: 24.5, text: "And now you're messin' with me, messin' with me" },
            { time: 28, text: "I keep goin' back to this hotel room" },
            { time: 31.5, text: "I just don't know what the hell to just tell you" },
            { time: 35, text: "But I love messin' with ya, messin' with you" },
            { time: 38.5, text: "Girl, are you messin' with me, messin' with me?" },
            { time: 42, text: "This hotel room" },
            { time: 45.5, text: "You put me in, my love" },
            { time: 49, text: "Ohh, I, I love you" },
            { time: 52.5, text: "You know me, girl" },
            { time: 56, text: "Better than I know myself, my love" },
            { time: 59.5, text: "Hotel hell" },
            { time: 63, text: "Ooh, you" },
            { time: 66.5, text: "When I met you in that hotel room" },
            { time: 70, text: "I could tell that you were so bad news" },
            { time: 73.5, text: "But I keep messin' with ya, messin' with ya" },
            { time: 77, text: "And now you're messin' with me, messin' with me" },
            { time: 80.5, text: "I keep goin' back to this hotel room" },
            { time: 84, text: "I just don't know what the hell to just tell you" },
            { time: 87.5, text: "But I love messin' with ya, messin' with you" },
            { time: 91, text: "Girl, are you messin' with me, messin' with me?" }
        ]
    },    
    {
        id: 3,
        title: "One of the Girls",
        artist: "The Weeknd",
        album: "The Highlights",
        albumArtUrl: "https://i1.sndcdn.com/artworks-qYLhelNefzJe-0-t500x500.jpg",
        audioSrc: "audio/One of the girl.mp3",
        videoBgSrc: "videos/One of the girl.mp4",
        lyrics: [
            { time: 12.0, text: "Lock me up and throw away the key" },
            { time: 15.0, text: "He knows how to get the best out of me" },
            { time: 16.0, text: "I'm no force for the world to see" },
            { time: 19.0, text: "Trade my whole life just to be" },
            { time: 25.0, text: "Tell nobody I control you" },
            { time: 31.0, text: "I broke you just to own you" },
            { time: 37.0, text: "They can't tell that I love you" },
            { time: 43.0, text: "'Cause you're loyal, baby" },
            { time: 49.0, text: "I love when you're submissive" },
            { time: 55.0, text: "Love it when I break skin" },
            { time: 61.0, text: "You feel pain without flinchin'" },
            { time: 67.0, text: "So say it" },
            { time: 73.0, text: "Give me tough love" },
            { time: 79.0, text: "Leave me with nothin' when I come down" },
            { time: 85.0, text: "My kinda love" },
            { time: 91.0, text: "Push me and choke me 'til I pass out" },
            { time: 97.0, text: "We don't gotta be in love, no" },
            { time: 103.0, text: "I don't gotta be the one, no" },
            { time: 109.0, text: "I just wanna be one of your girls" },
            { time: 115.0, text: "Tonight (tonight)" },
            { time: 121.0, text: "We don't gotta be in love, no" },
            { time: 127.0, text: "I don't gotta be the one, no" },
            { time: 133.0, text: "I just wanna be one of your girls" },
            { time: 139.0, text: "Tonight (tonight), oh" },
            { time: 145.0, text: "Push me down, hold me down" },
            { time: 151.0, text: "Spit in my mouth while you turn me on" },
            { time: 157.0, text: "I wanna take your light inside" },
            { time: 163.0, text: "Dim me down, snuff me out" },
            { time: 169.0, text: "Hands on my neck while you push it out" },
            { time: 175.0, text: "And I'm screamin' out" },
            { time: 181.0, text: "Give me tough love" },
            { time: 187.0, text: "Leave me with nothin' when I come down" },
            { time: 193.0, text: "My kinda love" },
            { time: 199.0, text: "Force me and choke me 'til I pass out" },
            { time: 205.0, text: "We don't gotta be in love, no" },
            { time: 211.0, text: "I don't gotta be the one, no" },
            { time: 217.0, text: "I just wanna be one of your girls" },
            { time: 223.0, text: "Tonight (tonight)" },
            { time: 229.0, text: "We don't gotta be in love, no" },
            { time: 235.0, text: "I don't gotta be the one, no (oh)" },
            { time: 241.0, text: "I just wanna be one of your girls" },
            { time: 247.0, text: "Tonight, oh" },
            { time: 253.0, text: "Lock me up and throw away the key" },
            { time: 259.0, text: "He knows how to get the best out of me" },
            { time: 265.0, text: "I'm no force for the world to see" },
            { time: 271.0, text: "Trade my whole life just to be" },
            { time: 277.0, text: "Top of the world but I'm still not free" },
            { time: 283.0, text: "It's such a secret that I keep" },
            { time: 289.0, text: "Until it's gone, I can never find peace" },
            { time: 295.0, text: "Brace my whole life just to be" },
            { time: 301.0, text: "We don't gotta be in love, no" },
            { time: 307.0, text: "I don't gotta be the one, no" },
            { time: 313.0, text: "I just wanna be one of your girls" },
            { time: 319.0, text: "Tonight (tonight)" },
            { time: 325.0, text: "We don't gotta be in love, no" },
            { time: 331.0, text: "I don't gotta be the one, no (oh)" },
            { time: 337.0, text: "I just wanna be one of your girls" },
            { time: 343.0, text: "Tonight (ooh), oh" }
        ]
    },
    {
        id: 4,
        title: "SleepMode",
        artist: "Bones",
        album: "TSoftwareUpdate1.0",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273934b7b825f3f11c69b7a0ec0",
        audioSrc: "audio/SleepMode.mp3",
        videoBgSrc: "videos/SleepMode.mp4",
        lyrics: [
            { time: 5.0, text: "Some days better than others, yeah I agree" },
            { time: 12.0, text: "Other days I forget I'm lucky I can breathe" },
            { time: 19.0, text: "Weird how it works how the wheels they turn" },
            { time: 26.0, text: "Me to roadkill when I'm hopping off the curb" },
            { time: 33.0, text: "Misplace words with a distinct verb" },
            { time: 40.0, text: "Now you feel like you do something for the world" },
            { time: 47.0, text: "Sorry to say, but we blew that chance" },
            { time: 54.0, text: "The last of the grains gone, no more sand" },
            { time: 61.0, text: "Now we stand as the trap door opens" },
            { time: 68.0, text: "Slowly we fall where eternity closes" },
            { time: 75.0, text: "We just wanna find a direction to point a finger" },
            { time: 82.0, text: "And say \"it's not mine, it's yours\"" },
            { time: 89.0, text: "Permanent cycle is branded within" },
            { time: 96.0, text: "From a seed to a tree always know what you is" },
            { time: 103.0, text: "Support what supports you it's up to you" },
            { time: 110.0, text: "Do what you want to do" },
            { time: 117.0, text: "Hopefully, you give back to the roots" },
            { time: 124.0, text: "Give back to the roots" },
            { time: 131.0, text: "Oh, no, no, no, no, no" },
            { time: 138.0, text: "Oh, no, no, no, no, no" },
            { time: 145.0, text: "I'll never know, no, no" },
            { time: 152.0, text: "I'll never know, no, no" },
            { time: 159.0, text: "I'll never know, no, no" },
            { time: 166.0, text: "I'll never know, no, no" },
            { time: 173.0, text: "I'll never know, no, no" },
            { time: 180.0, text: "I'll never know, no, no" },
            { time: 187.0, text: "I'll never know, no, no" },
            { time: 194.0, text: "I'll never know, no, no" },
            { time: 201.0, text: "I'll never know, no, no" },
            { time: 208.0, text: "I'll never know, no, no" },
            { time: 215.0, text: "I'll never know, no, no" },
            { time: 222.0, text: "Oh, no, no, no, no, no" },
            { time: 229.0, text: "SESH" }
        ]
    },
    {
        id: 5,
        title: "Let Go",
        artist: "Ark Patrol",
        album: "Soundcloud EPs",
        albumArtUrl: "https://images.unsplash.com/photo-1473328849468-949cd295c278?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGV0dGluZyUyMGdvfGVufDB8fDB8fHww",
        audioSrc: "audio/letgo.mp3",
        videoBgSrc: "videos/letgo.mp4",
        lyrics: [
            { time: 5.0, text: "Tumble out of bed" },
            { time: 12.0, text: "Dizzy in the head" },
            { time: 19.0, text: "Saying what you said" },
            { time: 26.0, text: "When you came home alone" },
            { time: 33.0, text: "Mumble a reply" },
            { time: 40.0, text: "Followed by a lie" },
            { time: 47.0, text: "You've been wondering why" },
            { time: 54.0, text: "As if I've never known" },
            { time: 61.0, text: "Partial to the groove" },
            { time: 68.0, text: "But still you never move" },
            { time: 75.0, text: "Stubborn through and through" },
            { time: 82.0, text: "You're just an animal" },
            { time: 89.0, text: "Stuck inside your clutch" },
            { time: 96.0, text: "It's chilling to the touch" },
            { time: 103.0, text: "Never liked it much" },
            { time: 110.0, text: "And now you won't let go" },
            { time: 117.0, text: "Admit that I was right" },
            { time: 124.0, text: "But still, you try to fight" },
            { time: 131.0, text: "You leave me in the night" },
            { time: 138.0, text: "When you refuse to lose" },
            { time: 145.0, text: "Step out of the car" },
            { time: 152.0, text: "Head into the bar" },
            { time: 159.0, text: "It's nothing new as far" },
            { time: 166.0, text: "As you're concerned" },
            { time: 173.0, text: "Wonder who to blame" },
            { time: 180.0, text: "Your father was the same" },
            { time: 187.0, text: "Always playing games" },
            { time: 194.0, text: "And never backing down" },
            { time: 201.0, text: "You stare at her face" },
            { time: 208.0, text: "Wondering how to phrase" },
            { time: 215.0, text: "Your invitation home" },
            { time: 222.0, text: "You're just a little boy" },
            { time: 229.0, text: "Tumble out of bed" },
            { time: 236.0, text: "Dizzy in the head" },
            { time: 243.0, text: "Saying what you said" },
            { time: 250.0, text: "When you came home alone" },
            { time: 257.0, text: "Mumble a reply" },
            { time: 264.0, text: "Followed by a lie" },
            { time: 271.0, text: "You've been wondering why" },
            { time: 278.0, text: "As if I've never known" },
            { time: 285.0, text: "Partial to the groove" },
            { time: 292.0, text: "But still you never move" },
            { time: 299.0, text: "Stubborn through and through" },
            { time: 306.0, text: "You're just an animal" },
            { time: 313.0, text: "Stuck inside your clutch" },
            { time: 320.0, text: "It's chilling to the touch" },
            { time: 327.0, text: "Never liked it much" },
            { time: 334.0, text: "And now you won't let go" }
        ]
    },
    {
        id: 6,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
        audioSrc: "audio/I Wanna Be Yours.mp3",
        videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
        lyrics: [
            { time: 5.0, text: "I wanna be your vacuum cleaner" },
            { time: 12.0, text: "Breathing in your dust" },
            { time: 19.0, text: "I wanna be your Ford Cortina" },
            { time: 26.0, text: "I will never rust" },
            { time: 33.0, text: "If you like your coffee hot" },
            { time: 40.0, text: "Let me be your coffee pot" },
            { time: 47.0, text: "You call the shots, babe" },
            { time: 54.0, text: "I just wanna be yours" },
            { time: 61.0, text: "Secrets I have held in my heart" },
            { time: 68.0, text: "Are harder to hide than I thought" },
            { time: 75.0, text: "Maybe I just wanna be yours" },
            { time: 82.0, text: "I wanna be yours, I wanna be yours" },
            { time: 89.0, text: "Wanna be yours" },
            { time: 96.0, text: "Wanna be yours" },
            { time: 103.0, text: "Wanna be yours" },
            { time: 110.0, text: "Let me be your leccy meter" },
            { time: 117.0, text: "And I'll never run out" },
            { time: 124.0, text: "Let me be the portable heater" },
            { time: 131.0, text: "That you'll get cold without" },
            { time: 138.0, text: "I wanna be your setting lotion (wanna be)" },
            { time: 145.0, text: "Hold your hair in deep devotion (How deep?)" },
            { time: 152.0, text: "At least as deep as the Pacific Ocean" },
            { time: 159.0, text: "Now I wanna be yours" },
            { time: 166.0, text: "Secrets I have held in my heart" },
            { time: 173.0, text: "Are harder to hide than I thought" },
            { time: 180.0, text: "Maybe I just wanna be yours" },
            { time: 187.0, text: "I wanna be yours, I wanna be yours" },
            { time: 194.0, text: "Wanna be yours" },
            { time: 201.0, text: "Wanna be yours" },
            { time: 208.0, text: "Wanna be yours" },
            { time: 215.0, text: "Wanna be yours" },
            { time: 222.0, text: "Wanna be yours" },
            { time: 229.0, text: "Wanna be yours" },
            { time: 236.0, text: "Wanna be yours" },
            { time: 243.0, text: "(Wanna be yours)" },
            { time: 250.0, text: "I wanna be your vacuum cleaner (wanna be yours)" },
            { time: 257.0, text: "Breathing in your dust (wanna be yours)" },
            { time: 264.0, text: "I wanna be your Ford Cortina (wanna be yours)" },
            { time: 271.0, text: "I will never rust (wanna be yours)" },
            { time: 278.0, text: "I just wanna be yours (wanna be yours)" },
            { time: 285.0, text: "I just wanna be yours (wanna be yours)" },
            { time: 292.0, text: "I just wanna be yours (wanna be yours)" }
        ]
    },
    {
        id: 7,
        title: "Coffee for Your Head",
        artist: "Powfu feat. beabadoobee",
        album: "poems of the past",
        albumArtUrl: "https://media.discordapp.net/attachments/1199096079707295836/1386537697023099010/WhatsApp_Image_2025-06-23_at_04.39.58.jpeg?ex=685a115b&is=6858bfdb&hm=4d9b6ef200a9e4f7859adf2c2824493b3703e531a0783b9c741707bade41f54e&=&format=webp&width=736&height=584",
        audioSrc: "audio/deathbed.mp3",
        videoBgSrc: "videos/deathbed.mp4",
        lyrics: [
            { time: 0.5, text: "Don't stay awake for too long" },
            { time: 3.2, text: "Don't go to bed" },
            { time: 5.8, text: "I'll make a cup of coffee for your head" },
            { time: 8.5, text: "I'll get you up and going out of bed" },
            { time: 11.2, text: "Yeah, I don't wanna fall asleep" },
            { time: 14.0, text: "I don't wanna pass away" },
            { time: 16.8, text: "I've been thinking of our future" },
            { time: 19.5, text: "'Cause I'll never see those days" },
            { time: 22.3, text: "I don't know why this has happened" },
            { time: 25.0, text: "But I probably deserve it" },
            { time: 27.8, text: "I tried to do my best" },
            { time: 30.5, text: "But you know that I'm not perfect" },
            { time: 33.3, text: "I've been praying for forgiveness" },
            { time: 36.0, text: "You've been praying for my health" },
            { time: 38.8, text: "When I leave this earth" },
            { time: 41.5, text: "Hoping you'll find someone else" },
            { time: 44.3, text: "'Cause, yeah, we're still young" },
            { time: 47.0, text: "There's so much we haven't done" },
            { time: 49.8, text: "Getting married, start a family" },
            { time: 52.5, text: "Watch your husband with his son" },
            { time: 55.3, text: "I wish it could be me" },
            { time: 58.0, text: "But I won't make it off this bed" },
            { time: 60.8, text: "I hope I go to heaven" },
            { time: 63.5, text: "So I see you once again" },
            { time: 66.3, text: "My life was kinda short" },
            { time: 69.0, text: "But I got so many blessings" },
            { time: 71.8, text: "Happy you were mine" },
            { time: 74.5, text: "It sucks that it's all ending" },
            { time: 77.3, text: "Don't stay awake for too long" },
            { time: 80.0, text: "Don't go to bed" },
            { time: 82.8, text: "I'll make a cup of coffee for your head" },
            { time: 85.5, text: "I'll get you up and going out of bed, yeah" },
            { time: 88.3, text: "And I, don't stay awake for too long" },
            { time: 91.0, text: "Don't go to bed" },
            { time: 93.8, text: "I'll make a cup of coffee for your head" },
            { time: 96.5, text: "I'll get you up and going out of bed" },
            { time: 99.3, text: "Yeah, I'm happy that you're here with me" },
            { time: 102.0, text: "I'm sorry if I tear up" },
            { time: 104.8, text: "When me and you were younger" },
            { time: 107.5, text: "You would always make me cheer up" },
            { time: 110.3, text: "Taking goofy videos while walking through the park" },
            { time: 113.0, text: "You would jump into my arms every time you heard a bark" },
            { time: 115.8, text: "Cuddle in your sheets, sang me sound asleep" },
            { time: 118.5, text: "And sneak out through your kitchen at exactly 1:03" },
            { time: 121.3, text: "Sundays went to church, on Mondays watched a movie" },
            { time: 124.0, text: "Soon you'll be alone, sorry that you have to lose me" },
            { time: 126.8, text: "Don't stay awake for too long" },
            { time: 129.5, text: "Don't go to bed" },
            { time: 132.3, text: "I'll make a cup of coffee for your head" },
            { time: 135.0, text: "I'll get you up and going out of bed" },
            { time: 137.8, text: "And I, don't stay awake for too long" },
            { time: 140.5, text: "Don't go to bed" },
            { time: 143.3, text: "I'll make a cup of coffee for your head" },
            { time: 146.0, text: "I'll get you up and going out of bed" },
            { time: 148.8, text: "Don't stay awake for too long" },
            { time: 151.5, text: "Don't go to bed" },
            { time: 154.3, text: "I'll make a cup of coffee for your head" },
            { time: 157.0, text: "I'll get you up and going out of bed" },
            { time: 159.8, text: "And I, don't stay awake for too long" },
            { time: 162.5, text: "Don't go to bed" },
            { time: 165.3, text: "I'll make a cup of coffee for your head" },
            { time: 168.0, text: "I'll get you up and going out of bed" },
            { time: 170.8, text: "And I, don't stay awake for too long" },
            { time: 173.5, text: "Don't go to bed" },
            { time: 176.3, text: "I'll make a cup of coffee for your head" },
            { time: 179.0, text: "I'll get you up and going out of bed" }
        ]
    },

    {
        id: 8,
        title: "Ginseng Strip 2002",
        artist: "Yung Lean",
        album: "Unknown Death 2002",
        albumArtUrl: "https://cdn.discordapp.com/attachments/1199096079707295836/1386514199273930823/ChatGPT_Image_Jun_23_2025_03_12_22_AM.png?ex=6859fb79&is=6858a9f9&hm=4265630e967f30f667e3d8255f33e3ea39d57a0f13d187c75705ca33fc3056f8&",
        audioSrc: "audio/Ginseng Strip.mp3",
        videoBgSrc: "videos/Ginseng Strip.mp4",
        lyrics: [
            { time: 0.2, text: "2003" },
            { time: 3.0, text: "Arizona Iced Out Boys" },
            { time: 6.0, text: "Yung Leandoer, shawty" },
            { time: 9.0, text: "Emotional boys, 2001" },
            { time: 12.0, text: "Emotional shawties in this bitch" },
            { time: 15.0, text: "Makaveli" },
            { time: 18.0, text: "Bitches come and go, brah" },
            { time: 21.0, text: "But you know I stay" },
            { time: 24.0, text: "Bitches come and go, brah" },
            { time: 27.0, text: "But you know I stay" },
            { time: 30.0, text: "Got my balls licked" },
            { time: 33.0, text: "By a Zooey Deschanel look-alike cocaine addict" },
            { time: 36.0, text: "Razor blade to your head" },
            { time: 39.0, text: "Conflict, I'm a contradicted shit" },
            { time: 42.0, text: "Peeing on old people's houses is an inflict" },
            { time: 45.0, text: "2003 shit" },
            { time: 48.0, text: "This ain't no splitting bills shit" },
            { time: 51.0, text: "I'ma peel banana skids" },
            { time: 54.0, text: "While listenin' to R. Kelly's greatest hits" },
            { time: 57.0, text: "Yung Lean in the club" },
            { time: 60.0, text: "For some morphine (morphine)" },
            { time: 63.0, text: "Yung Lean up in the club" },
            { time: 66.0, text: "For some morphine (morphine)" },
            { time: 69.0, text: "Poppin' pills like zits" },
            { time: 72.0, text: "While someone vomits on your mosquito tits" },
            { time: 75.0, text: "Slitting wrists while dark evil spirits like Slytherin" },
            { time: 78.0, text: "Slither in with tricks, I'm sick" },
            { time: 81.0, text: "Acid trip makes my spitting sick" },
            { time: 84.0, text: "And makes me start hitting chicks" },
            { time: 87.0, text: "Knitting thick, shitting quick, fitting dick" },
            { time: 90.0, text: "Like transmitting shit with an AIDS stick" },
            { time: 93.0, text: "Think you're gay as fuck like a fish stick" },
            { time: 96.0, text: "Tequila shots and salt licks" },
            { time: 99.0, text: "Getting balls in your face like a free kick" },
            { time: 102.0, text: "Yung Lean stays motherfuckin' freaky (bitch)" },
            { time: 105.0, text: "Yung Lean in the club" },
            { time: 108.0, text: "For some morphine (morphine)" },
            { time: 111.0, text: "Yung Lean up in the club" },
            { time: 114.0, text: "For some morphine (morphine)" },
            { time: 117.0, text: "Rotten teeth like Gargamel" },
            { time: 120.0, text: "Cast a spell, you keep on tryin' to yell" },
            { time: 123.0, text: "Bet your dead body stinks worse than my S'well" },
            { time: 126.0, text: "Well, Lean expels" },
            { time: 129.0, text: "Diagrams as if they were made in Excel" },
            { time: 132.0, text: "Fuck fat hoes like Adele" },
            { time: 135.0, text: "Get my dick stuck inside a lampshell" },
            { time: 138.0, text: "Get it out with sperm cells and hair gel" },
            { time: 141.0, text: "Swim in Mexico, mademoiselle" },
            { time: 144.0, text: "Point and laugh while he fell" },
            { time: 147.0, text: "Who's laughing now, now that I'm explosive like Alfred Nobel?" },
            { time: 150.0, text: "Yung Lean only attracts an older clientele" },
            { time: 153.0, text: "Very well (bitch)" }
        ]
    }
];

// Initialize filtered songs
filteredSongs = [...songs];

// ===== WELCOME SCREEN FUNCTIONS =====
function showWelcomeScreen() {
    welcomeScreen.classList.add('active');
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.remove('active');
}

function hideWelcomeScreen() {
    welcomeScreen.classList.remove('active');
    showHomePage();
}

// ===== PAGE NAVIGATION FUNCTIONS =====
function showHomePage() {
    homePage.classList.add('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.remove('active');
    bodyElement.className = '';
    
    // Show default background video for home page
    backgroundVideo.src = 'videos/letgo.mp4';
    backgroundVideoContainer.classList.add('active');
    
    // Stop and reset audio when returning home
    if (isPlaying) {
        pauseTrack();
    }
    audioPlayer.currentTime = 0;

    // Reset search
    if (searchInput) {
        searchInput.value = '';
    }
    filteredSongs = [...songs];
    renderSongList();
}

function showSongDetailPage(song) {
    songDetailPage.classList.add('active');
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    bodyElement.className = 'detail-active-bg';

    // Update detail page content
    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album;
    
    // Set video background
    if (song.videoBgSrc) {
        backgroundVideo.src = song.videoBgSrc;
        backgroundVideoContainer.classList.add('active');
    }
}

function showPlayerPage() {
    playerPage.classList.add('active');
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    bodyElement.className = 'player-active-bg';

    // Set video background for current song
    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideoContainer.classList.add('active');
    }
}

// ===== SONG LIST FUNCTIONS =====
function renderSongList() {
    if (filteredSongs.length === 0) {
        songListElement.innerHTML = `
            <li class="no-results">
                <div class="no-results-content">
                    <i class="fas fa-search"></i>
                    <span>No songs found</span>
                </div>
            </li>
        `;
        return;
    }

    songListElement.innerHTML = filteredSongs.map(song => `
        <li class="song-item" data-song-id="${song.id}" data-video-src="${song.videoBgSrc || ''}">
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist} • ${song.album}</p>
            </div>
            <div class="song-actions">
                <button class="play-song-btn" onclick="playSongFromList(${song.id})">
                    <i class="fas fa-play"></i>
                </button>
            </div>
        </li>
    `).join('');

    // Add hover events for video preview
    const songItems = document.querySelectorAll('.song-item');
    songItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const videoSrc = this.getAttribute('data-video-src');
            if (videoSrc && homePage.classList.contains('active')) {
                backgroundVideo.src = videoSrc;
                backgroundVideoContainer.classList.add('active');
            }
        });

        item.addEventListener('mouseleave', function() {
            if (homePage.classList.contains('active')) {
                // Restore default background when not hovering
                backgroundVideo.src = 'videos/letgo.mp4';
                backgroundVideoContainer.classList.add('active');
            }
        });
    });
}

// ===== SEARCH FUNCTIONALITY =====
function filterSongs(searchTerm) {
    if (!searchTerm.trim()) {
        filteredSongs = [...songs];
    } else {
        const term = searchTerm.toLowerCase();
        filteredSongs = songs.filter(song => 
            song.title.toLowerCase().includes(term) ||
            song.artist.toLowerCase().includes(term) ||
            song.album.toLowerCase().includes(term)
        );
    }
    renderSongList();
}

// ===== SONG PLAYBACK FUNCTIONS =====
function playSongFromList(songId) {
    const songIndex = songs.findIndex(song => song.id === songId);
    if (songIndex !== -1) {
        currentSongIndex = songIndex;
        loadSong(songs[currentSongIndex]);
        showPlayerPage();
        playTrack();
    }
}

function loadSong(song) {
    audioPlayer.src = song.audioSrc;
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    // Set video background
    if (song.videoBgSrc) {
        backgroundVideo.src = song.videoBgSrc;
        backgroundVideoContainer.classList.add('active');
    }
    
    // Render lyrics
    renderLyrics(song.lyrics);
    
    // Update detail page if it's open
    if (songDetailPage.classList.contains('active')) {
        detailAlbumArt.src = song.albumArtUrl;
        detailTrackTitle.textContent = song.title;
        detailTrackArtist.textContent = song.artist;
        detailAlbumName.textContent = song.album;
    }
}

function renderLyrics(lyrics) {
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = '<p class="lyrics-placeholder">No lyrics available</p>';
        return;
    }

    lyricsContainer.innerHTML = lyrics.map(lyric => 
        `<div class="lyric-line" data-time="${lyric.time}">${lyric.text}</div>`
    ).join('');
}

function playTrack() {
    audioPlayer.play();
    isPlaying = true;
    updatePlayPauseIcon();
}

function pauseTrack() {
    audioPlayer.pause();
    isPlaying = false;
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    const icon = playerPlayPauseBtn.querySelector('i');
    if (isPlaying) {
        icon.className = 'fas fa-pause';
    } else {
        icon.className = 'fas fa-play';
    }
}

function prevTrack() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = songs.length - 1;
    }
    loadSong(songs[currentSongIndex]);
    if (isPlaying) {
    playTrack();
    }
}

function nextTrack() {
    if (isShuffled) {
        playRandomTrack();
    } else {
        if (currentSongIndex < songs.length - 1) {
        currentSongIndex++;
        } else {
            if (repeatMode === 'all') {
                currentSongIndex = 0;
            } else {
                return; // Stop at end if not repeating
            }
        }
        loadSong(songs[currentSongIndex]);
        if (isPlaying) {
        playTrack();
    }
    }
}

function playRandomTrack() {
    const randomIndex = Math.floor(Math.random() * songs.length);
        currentSongIndex = randomIndex;
    loadSong(songs[currentSongIndex]);
    if (isPlaying) {
    playTrack();
    }
}

// ===== UTILITY FUNCTIONS =====
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateRepeatButtonUI() {
    const icon = playerRepeatBtn.querySelector('i');
    playerRepeatBtn.classList.remove('active-feature');
    
    switch (repeatMode) {
        case 'none':
            icon.className = 'fas fa-repeat';
            break;
        case 'one':
            icon.className = 'fas fa-repeat';
            playerRepeatBtn.classList.add('active-feature');
            break;
        case 'all':
            icon.className = 'fas fa-repeat';
            playerRepeatBtn.classList.add('active-feature');
            break;
    }
}

function toggleLyricsVisibility() {
    console.log('Toggle lyrics clicked, current state:', isLyricsVisible);
    
    isLyricsVisible = !isLyricsVisible;
    const lyricsContainer = document.getElementById('lyricsContainer');
    const icon = toggleLyricsBtn.querySelector('i');
    
    console.log('New state:', isLyricsVisible);
    console.log('Lyrics container found:', lyricsContainer);
    
    if (isLyricsVisible) {
        lyricsContainer.style.display = 'block';
        lyricsContainer.style.visibility = 'visible';
        icon.className = 'fas fa-eye';
        console.log('Lyrics shown');
            } else {
        lyricsContainer.style.display = 'none';
        lyricsContainer.style.visibility = 'hidden';
        icon.className = 'fas fa-eye-slash';
        console.log('Lyrics hidden');
    }
}

// ===== EVENT LISTENERS =====
function init() {
    // Welcome screen
    enterAppBtn.addEventListener('click', hideWelcomeScreen);
    
    // Navigation
    backToHomeFromDetailBtn.addEventListener('click', showHomePage);
    backToHomeBtn.addEventListener('click', showHomePage);
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', (e) => filterSongs(e.target.value));
    }
    
    // Settings button
    if (settingsBtn) {
        settingsBtn.addEventListener('click', openSettingsModal);
    }
    
    // Settings modal
    const closeSettingsBtn = document.getElementById('closeSettingsBtn');
    const resetSettingsBtn = document.getElementById('resetSettingsBtn');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    
    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener('click', closeSettingsModal);
    }
    
    if (resetSettingsBtn) {
        resetSettingsBtn.addEventListener('click', resetSettings);
    }
    
    if (saveSettingsBtn) {
        saveSettingsBtn.addEventListener('click', () => {
            closeSettingsModal();
            showNotification('Settings saved successfully!', 'success');
        });
    }
    
    // Theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            applyTheme(theme);
        });
    });
    
    // Audio effects sliders
    const reverbSlider = document.getElementById('reverbSlider');
    const bassSlider = document.getElementById('bassSlider');
    const trebleSlider = document.getElementById('trebleSlider');
    
    if (reverbSlider) {
        reverbSlider.addEventListener('input', (e) => {
            settings.audioEffects.reverb = parseInt(e.target.value);
            document.getElementById('reverbValue').textContent = e.target.value + '%';
            // Only initialize audio context if effects are being used
            if (settings.audioEffects.reverb > 0 || settings.audioEffects.bass > 0 || settings.audioEffects.treble !== 50) {
                if (!audioContext) {
                    initAudioContext();
                }
                applyAudioEffects();
            }
        });
    }
    
    if (bassSlider) {
        bassSlider.addEventListener('input', (e) => {
            settings.audioEffects.bass = parseInt(e.target.value);
            document.getElementById('bassValue').textContent = e.target.value + '%';
            // Only initialize audio context if effects are being used
            if (settings.audioEffects.reverb > 0 || settings.audioEffects.bass > 0 || settings.audioEffects.treble !== 50) {
                if (!audioContext) {
                    initAudioContext();
                }
                applyAudioEffects();
            }
        });
    }
    
    if (trebleSlider) {
        trebleSlider.addEventListener('input', (e) => {
            settings.audioEffects.treble = parseInt(e.target.value);
            document.getElementById('trebleValue').textContent = e.target.value + '%';
            // Only initialize audio context if effects are being used
            if (settings.audioEffects.reverb > 0 || settings.audioEffects.bass > 0 || settings.audioEffects.treble !== 50) {
                if (!audioContext) {
                    initAudioContext();
                }
                applyAudioEffects();
            }
        });
    }
    
    // Visual effects toggles
    const particlesToggle = document.getElementById('particlesToggle');
    const waveformToggle = document.getElementById('waveformToggle');
    const blurToggle = document.getElementById('blurToggle');
    
    if (particlesToggle) {
        particlesToggle.addEventListener('change', (e) => {
            settings.visualEffects.particles = e.target.checked;
            applyVisualEffects();
        });
    }
    
    if (waveformToggle) {
        waveformToggle.addEventListener('change', (e) => {
            settings.visualEffects.waveform = e.target.checked;
            applyVisualEffects();
        });
    }
    
    if (blurToggle) {
        blurToggle.addEventListener('change', (e) => {
            settings.visualEffects.blur = e.target.checked;
            applyVisualEffects();
        });
    }
    
    // Playback settings toggles
    const autoplayToggle = document.getElementById('autoplayToggle');
    const crossfadeToggle = document.getElementById('crossfadeToggle');
    const lyricsAutoToggle = document.getElementById('lyricsAutoToggle');
    
    if (autoplayToggle) {
        autoplayToggle.addEventListener('change', (e) => {
            settings.playback.autoplay = e.target.checked;
        });
    }
    
    if (crossfadeToggle) {
        crossfadeToggle.addEventListener('change', (e) => {
            settings.playback.crossfade = e.target.checked;
        });
    }
    
    if (lyricsAutoToggle) {
        lyricsAutoToggle.addEventListener('change', (e) => {
            settings.playback.lyricsAuto = e.target.checked;
        });
    }
    
    // Close modal when clicking outside
    const settingsModal = document.getElementById('settingsModal');
    if (settingsModal) {
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                closeSettingsModal();
            }
        });
    }
    
    // Song detail page
    playFromDetailBtn.addEventListener('click', () => {
        showPlayerPage();
        playTrack();
    });
    
    // Player controls
playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
    
playerPrevBtn.addEventListener('click', prevTrack);
    playerNextBtn.addEventListener('click', nextTrack);
    
    playerRepeatBtn.addEventListener('click', () => {
        switch (repeatMode) {
            case 'none':
                repeatMode = 'one';
                break;
            case 'one':
                repeatMode = 'all';
                break;
            case 'all':
                repeatMode = 'none';
                break;
        }
        updateRepeatButtonUI();
    });
    
    playerShuffleBtn.addEventListener('click', () => {
        isShuffled = !isShuffled;
        playerShuffleBtn.classList.toggle('active-feature', isShuffled);
    });
    
    // Volume and speed controls
    playerVolumeSlider.addEventListener('input', (e) => {
        audioPlayer.volume = e.target.value;
    });
    
    playerSpeedSlider.addEventListener('input', (e) => {
        audioPlayer.playbackRate = e.target.value;
        currentSpeedDisplay.textContent = `${e.target.value}x`;
    });
    
    // Progress bar
    playerProgressBarContainer.addEventListener('click', (e) => {
        const rect = playerProgressBarContainer.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const percentage = clickX / width;
        audioPlayer.currentTime = percentage * audioPlayer.duration;
    });
    
    // Audio events
    audioPlayer.addEventListener('loadedmetadata', () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    });
    
    audioPlayer.addEventListener('timeupdate', () => {
        const currentTime = audioPlayer.currentTime;
        const duration = audioPlayer.duration;
        
        playerCurrentTime.textContent = formatTime(currentTime);
        
        if (duration) {
            const progress = (currentTime / duration) * 100;
            playerProgressBar.style.width = `${progress}%`;
        }
        
        // Update lyrics highlighting
        const currentSong = songs[currentSongIndex];
        if (currentSong && currentSong.lyrics && currentSong.lyrics.length > 0) {
            const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
            let currentLyricIndex = -1;

            // Find the index of the last lyric that should be active
            for (let i = 0; i < currentSong.lyrics.length; i++) {
                if (currentTime >= currentSong.lyrics[i].time) {
                    currentLyricIndex = i;
                } else {
                    break;
                }
            }
            
            // Highlight the correct line and scroll if necessary
            if (currentLyricIndex !== -1) {
                lyricLines.forEach((line, index) => {
                    if (index === currentLyricIndex) {
                        if (!line.classList.contains('highlight')) {
                            line.classList.add('highlight');
                            // Smooth scroll to the highlighted line
                            if (settings.playback.lyricsAuto) {
                                line.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                        }
                    } else {
                        line.classList.remove('highlight');
                    }
                });
            }
        }
    });

audioPlayer.addEventListener('ended', () => {
        if (repeatMode === 'one') {
            audioPlayer.currentTime = 0;
            playTrack();
    } else {
        nextTrack();
    }
});

    // Lyrics toggle
    if (toggleLyricsBtn) {
        console.log('Toggle lyrics button found:', toggleLyricsBtn);
        toggleLyricsBtn.addEventListener('click', toggleLyricsVisibility);
        
        // Set initial state
        isLyricsVisible = true;
        const lyricsContainer = document.getElementById('lyricsContainer');
        if (lyricsContainer) {
            lyricsContainer.style.display = 'block';
            lyricsContainer.style.visibility = 'visible';
        }
    } else {
        console.error('Toggle lyrics button not found!');
    }
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
    
    // Initialize the app
    renderSongList();
    updateRepeatButtonUI();
    
    // Load and apply saved settings
    loadSettings();
    applySettings();
    
    // Show welcome screen on first load
    showWelcomeScreen();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// ===== SETTINGS MODAL FUNCTIONS =====
function openSettingsModal() {
    const modal = document.getElementById('settingsModal');
    modal.classList.add('active');
    loadSettings();
}

function closeSettingsModal() {
    const modal = document.getElementById('settingsModal');
    modal.classList.remove('active');
    saveSettings();
}

function loadSettings() {
    // Load saved settings from localStorage
    const savedSettings = localStorage.getItem('musicPlayerSettings');
    if (savedSettings) {
        settings = { ...settings, ...JSON.parse(savedSettings) };
    }
    
    // Apply settings to UI
    applyTheme(settings.theme);
    updateAudioEffectsUI();
    updateVisualEffectsUI();
    updatePlaybackSettingsUI();
}

function saveSettings() {
    localStorage.setItem('musicPlayerSettings', JSON.stringify(settings));
    applySettings();
}

function applySettings() {
    applyTheme(settings.theme);
    applyAudioEffects();
    applyVisualEffects();
    applyPlaybackSettings();
}

function applyTheme(theme) {
    document.body.className = `theme-${theme}`;
    settings.theme = theme;
    
    // Update theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-theme="${theme}"]`).classList.add('active');
}

function updateAudioEffectsUI() {
    document.getElementById('reverbSlider').value = settings.audioEffects.reverb;
    document.getElementById('reverbValue').textContent = settings.audioEffects.reverb + '%';
    
    document.getElementById('bassSlider').value = settings.audioEffects.bass;
    document.getElementById('bassValue').textContent = settings.audioEffects.bass + '%';
    
    document.getElementById('trebleSlider').value = settings.audioEffects.treble;
    document.getElementById('trebleValue').textContent = settings.audioEffects.treble + '%';
}

function updateVisualEffectsUI() {
    document.getElementById('particlesToggle').checked = settings.visualEffects.particles;
    document.getElementById('waveformToggle').checked = settings.visualEffects.waveform;
    document.getElementById('blurToggle').checked = settings.visualEffects.blur;
}

function updatePlaybackSettingsUI() {
    document.getElementById('autoplayToggle').checked = settings.playback.autoplay;
    document.getElementById('crossfadeToggle').checked = settings.playback.crossfade;
    document.getElementById('lyricsAutoToggle').checked = settings.playback.lyricsAuto;
}

function applyAudioEffects() {
    // Only apply effects if audio context is available and effects are enabled
    if (!audioContext || !reverbNode || !bassNode || !trebleNode) {
        return;
    }
    
    try {
        // Apply reverb
        reverbNode.gain.value = settings.audioEffects.reverb / 100;
        
        // Apply bass boost
        bassNode.frequency.value = 100 + (settings.audioEffects.bass * 2);
        bassNode.gain.value = settings.audioEffects.bass / 100;
        
        // Apply treble
        trebleNode.frequency.value = 2000 + (settings.audioEffects.treble * 20);
        trebleNode.gain.value = (settings.audioEffects.treble - 50) / 100;
        
    } catch (error) {
        console.log('Error applying audio effects:', error);
    }
}

function initAudioContext() {
    try {
        // Only initialize if not already created
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume();
            return;
        }
        
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        // Only create nodes if they don't exist
        if (!reverbNode) {
            reverbNode = audioContext.createGain();
        }
        if (!bassNode) {
            bassNode = audioContext.createBiquadFilter();
        }
        if (!trebleNode) {
            trebleNode = audioContext.createBiquadFilter();
        }
        
        // Configure nodes
        bassNode.type = 'lowshelf';
        trebleNode.type = 'highshelf';
        
        // Connect nodes
        reverbNode.connect(audioContext.destination);
        bassNode.connect(reverbNode);
        trebleNode.connect(bassNode);
        
        // Only create audio source if it doesn't exist
        if (!audioSource) {
            audioSource = audioContext.createMediaElementSource(audioPlayer);
            audioSource.connect(trebleNode);
        }
        
    } catch (error) {
        console.log('Audio effects not supported:', error);
        // Disable audio effects if not supported
        settings.audioEffects.reverb = 0;
        settings.audioEffects.bass = 0;
        settings.audioEffects.treble = 50;
    }
}

function applyVisualEffects() {
    if (settings.visualEffects.particles) {
        startParticleSystem();
    } else {
        stopParticleSystem();
    }
    
    if (settings.visualEffects.waveform) {
        startWaveform();
    } else {
        stopWaveform();
    }
    
    if (settings.visualEffects.blur) {
        document.body.style.backdropFilter = 'blur(10px)';
    } else {
        document.body.style.backdropFilter = 'none';
    }
}

function applyPlaybackSettings() {
    // Auto-scroll lyrics
    if (!settings.playback.lyricsAuto) {
        // Disable auto-scroll
    }
}

function startParticleSystem() {
    const container = document.getElementById('particlesContainer');
    container.style.display = 'block';
    
    particleInterval = setInterval(() => {
        createParticle();
    }, 200);
}

function stopParticleSystem() {
    const container = document.getElementById('particlesContainer');
    container.style.display = 'none';
    container.innerHTML = '';
    particles = [];
    
    if (particleInterval) {
        clearInterval(particleInterval);
    }
}

function createParticle() {
    const container = document.getElementById('particlesContainer');
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const x = Math.random() * window.innerWidth;
    const size = Math.random() * 6 + 2;
    const duration = Math.random() * 4 + 4;
    
    particle.style.left = x + 'px';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animationDuration = duration + 's';
    particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    
    container.appendChild(particle);
    particles.push(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
        particles = particles.filter(p => p !== particle);
    }, duration * 1000);
}

function startWaveform() {
    const container = document.getElementById('waveformContainer');
    container.style.display = 'block';
    
    waveformCanvas = document.getElementById('waveformCanvas');
    waveformCtx = waveformCanvas.getContext('2d');
    
    // Set canvas size
    waveformCanvas.width = container.offsetWidth;
    waveformCanvas.height = container.offsetHeight;
    
    if (audioContext && !analyser) {
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        
        // Connect analyser to audio chain
        if (trebleNode) {
            trebleNode.connect(analyser);
        }
    }
    
    drawWaveform();
}

function stopWaveform() {
    const container = document.getElementById('waveformContainer');
    container.style.display = 'none';
}

function drawWaveform() {
    if (!analyser || !waveformCtx) return;
    
    analyser.getByteFrequencyData(dataArray);
    
    waveformCtx.clearRect(0, 0, waveformCanvas.width, waveformCanvas.height);
    waveformCtx.fillStyle = '#e94560';
    
    const barWidth = waveformCanvas.width / dataArray.length;
    const barHeight = waveformCanvas.height / 2;
    
    for (let i = 0; i < dataArray.length; i++) {
        const height = (dataArray[i] / 255) * barHeight;
        const x = i * barWidth;
        const y = barHeight - height;
        
        waveformCtx.fillRect(x, y, barWidth - 1, height);
    }
    
    if (settings.visualEffects.waveform) {
        requestAnimationFrame(drawWaveform);
    }
}

// ===== KEYBOARD SHORTCUTS =====
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Don't trigger shortcuts when typing in input fields
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        switch (e.code) {
            case 'Space':
                e.preventDefault();
                if (isPlaying) {
                    pauseTrack();
                } else {
                    playTrack();
                }
                break;
            case 'ArrowLeft':
                e.preventDefault();
                prevTrack();
                break;
            case 'ArrowRight':
                e.preventDefault();
                nextTrack();
                break;
            case 'ArrowUp':
                e.preventDefault();
                const newVolumeUp = Math.min(1, audioPlayer.volume + 0.1);
                audioPlayer.volume = newVolumeUp;
                playerVolumeSlider.value = newVolumeUp;
                break;
            case 'ArrowDown':
                e.preventDefault();
                const newVolumeDown = Math.max(0, audioPlayer.volume - 0.1);
                audioPlayer.volume = newVolumeDown;
                playerVolumeSlider.value = newVolumeDown;
                break;
            case 'KeyL':
                e.preventDefault();
                toggleLyricsVisibility();
                break;
            case 'KeyM':
                e.preventDefault();
                audioPlayer.muted = !audioPlayer.muted;
                break;
        }
    });
}

// ===== RESET SETTINGS =====
function resetSettings() {
    settings = {
        theme: 'default',
        audioEffects: {
            reverb: 0,
            bass: 0,
            treble: 50
        },
        visualEffects: {
            particles: false,
            waveform: false,
            blur: true
        },
        playback: {
            autoplay: true,
            crossfade: false,
            lyricsAuto: true
        }
    };
    
    updateAudioEffectsUI();
    updateVisualEffectsUI();
    updatePlaybackSettingsUI();
    applySettings();
    
    // Show confirmation
    showNotification('Settings reset to default!', 'success');
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}