const audioPlayer = document.getElementById('audioPlayer');

// 播放完毕回到开头
audioPlayer.addEventListener('ended', () => {
    audioPlayer.currentTime = 0;
});