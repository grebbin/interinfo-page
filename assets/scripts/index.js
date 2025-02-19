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
    });
});

function updateIframe() {
    let css_code = document.getElementById("css_code").value;
    let iframe = document.getElementById("code_output");

    let html_code = `
    <body>

    <header></header>
                           
    <div id="back">
        <img src="assets/images/elements/anhinga.jpg" width="50%">
    </div>

    <div id="front">
        <img src="assets/images/elements/owltercation.jpg" width="200%">
    </div>
                           
    <footer></footer>
                           
    </body>
    `

    let combinedCode = `
    <html lang="en">
    <head>
        <style>${css_code}</style>
    </head>
    ${html_code}
    </html>
    `;

    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(combinedCode);
    iframe.contentWindow.document.close();

}

document.body.onload = keyartParallax();
document.body.onload = updateIframe();