pictures = document.getElementById("pictures");
createPictureHolder();
card();

var player = 'yes';
var player1 = 0;
var player2 = 0;

function createPictureHolder() {
    for (var i = 0; i < 18; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pictures.appendChild(pictureHolder);
    }
}

function card() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        let disneyplaatje = document.createElement("img");
        disneyplaatje.style.visibility = 'hidden';
        disneyplaatje.src = "img/disney" + (i % 9 + 1) + ".jpg";
        console.log(disneyplaatje.src)
        pictureHolders[i].addEventListener("click", function () {
            show(disneyplaatje);
        })
        pictureHolders[i].appendChild(disneyplaatje);
    }
}

function showScore() {
    document.getElementById('scoreboard1').innerText = 'Score player 1: ' + player1;
    document.getElementById('scoreboard2').innerText = 'Score player 2: ' + player2;
}

var ouddisneyplaatje
var ouddisneyplaatje1

function show(disneyplaatje) {
    if (ouddisneyplaatje && ouddisneyplaatje1) {
        if (ouddisneyplaatje.src !== ouddisneyplaatje1.src) {
            ouddisneyplaatje.style.visibility = 'hidden'
            ouddisneyplaatje1.style.visibility = 'hidden'
        }
        ouddisneyplaatje = disneyplaatje
        ouddisneyplaatje1 = undefined;
    } else if (ouddisneyplaatje) {
        ouddisneyplaatje1 = disneyplaatje;
    } else {
        ouddisneyplaatje = disneyplaatje;
    }
    disneyplaatje.style.visibility = 'visible'

    if (ouddisneyplaatje && ouddisneyplaatje1) {
        if (ouddisneyplaatje.src !== ouddisneyplaatje1.src) {
            if (player === 'yes') {
                player = 'no';
            } else {
                player = 'yes';
            }
        } else {
            if (player === 'yes') {
                player1 = player1 + 1;
            } else {
                player2 = player2 + 1;
            }
            showScore()
        }
    }
}
