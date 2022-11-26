import Player from "@vimeo/player";
import throttle from "lodash.throttle";


    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    // videoplayer-current-time

    // const onPlay = function(data) {
    // };

//     player.on('play', onPlay);
    
// videoplayer - current - time: timeupdate;
localStorage.setItem('current-time', JSON.stringify({ currentTime }));
console.log(localStorage);