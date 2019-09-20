pictures = document.getElementById("pictures");
createPictureHolder();
card();

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
        disneyplaatje.src = "img/disney" + ((i % 9) + 1) + ".jpg";
        disneyplaatje.id = (i + 1);
        pictureHolders[i].addEventListener("click", function () {
            show(disneyplaatje );
        })
        pictureHolders[i].appendChild(disneyplaatje);
    }
}

var ouddisneyplaatje
var ouddisneyplaatje1
function show(disneyplaatje ) {
    if(ouddisneyplaatje && ouddisneyplaatje1) {
        if(ouddisneyplaatje.src !== ouddisneyplaatje1.src) {
            ouddisneyplaatje.style.visibility='hidden'
            ouddisneyplaatje1.style.visibility='hidden'
        }
        ouddisneyplaatje = disneyplaatje
        ouddisneyplaatje1 = undefined;
    } else if(ouddisneyplaatje) {
        ouddisneyplaatje1 = disneyplaatje;
    } else {
        ouddisneyplaatje = disneyplaatje;
    }
    disneyplaatje.style.visibility = 'visible'
}