function keyartParallax() {

    window.addEventListener("scroll", function(event) {

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

const minScrollPct = 0.15;
const maxScrollPct = 0.28;

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

const tabs = document.querySelectorAll('.tab');
const switchable = document.querySelectorAll('.switchable');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        switchable.forEach(cb => cb.classList.remove('active'));

        tab.classList.add('active');
        const tabContent = document.getElementById(tab.dataset.tab);
        tabContent.classList.add('active');

        if (tab.dataset.tab === 'css') {
            document.getElementById('css_video').classList.add('active');
            document.getElementById('html_video').classList.remove('active');
        } else {
            document.getElementById('html_video').classList.add('active');
            document.getElementById('css_video').classList.remove('active');
        }
    });
});

document.body.onload = keyartParallax();