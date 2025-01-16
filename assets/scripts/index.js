function keyartParallax() {
   
    window.addEventListener("scroll", function(event){

        var top = this.pageYOffset;
        var layers = document.getElementsByClassName("parallax");
        var layer, speed, yPos;

        for (var i = 0; i < layers.length; i++) {
            layer = layers[i];
            speed = layer.getAttribute('data-speed');
            var yPos = -(top * speed / 100);
            layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
        }

    });
}

const video = document.getElementById('scroll_video');

//if (window.innerWidth <= 1000) {
    //const minScrollPct = 0.48;
   // const maxScrollPct = 0.60;
//} else {
    const minScrollPct = 0.22;
    const maxScrollPct = 0.35;
//}

document.addEventListener("scroll", () => {

    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = scrollY / scrollHeight;

    if (pct >= minScrollPct && pct <= maxScrollPct) {
        if (video.readyState >= 1) {

        const playbackPct = (pct - minScrollPct) / (maxScrollPct - minScrollPct);
        video.currentTime = video.duration * playbackPct;
    }
    } else if (pct < minScrollPct) {
        video.currentTime = 0;

    } else if (pct > maxScrollPct) {
        video.currentTime = video.duration;
    }
});


document.body.onload = keyartParallax();