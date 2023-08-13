let timer = 60;
let score = 0;
let hitrn = 0;

function increaseScore() {
    document.querySelector("#scoreval").textContent = score;
    score += 10;
}
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {

    var clutter = "";

    for (var i = 1; i <= 176; i++) {
        clutter += `<div class="bubble" >${Math.floor(Math.random() * 10)}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer != 0) {

            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1 style="color:white">Game IS Over</h1>`
        }
    }, 1000);
}

document.querySelector("#pbtm")
    .addEventListener("click", function (details) {
        let ClickNumber = (Number(details.target.textContent));
        if (ClickNumber === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit()
        }
    })
getNewHit()
runTimer()
makeBubble();
increaseScore();
