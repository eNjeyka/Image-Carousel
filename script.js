let imgs = document.getElementById("imgs");
let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");

let img = imgs.querySelectorAll("img");
let i = 0;
let interval = setInterval(run, 2000);

function run() {
    i++;

    changeImage();
}

function changeImage() {
    if (i > img.length - 1) {
        i = 0;
    } else if (i < 0) {
        i = img.length - 1;
    }

    imgs.style.transform = `translateX(${-i * 500}px)`;
}

function resetInterval () {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

leftBtn.addEventListener("click", () => {
    i--;
    changeImage();
    resetInterval()
});

rightBtn.addEventListener("click", () => {
    i++;
    changeImage();
    resetInterval()
});
