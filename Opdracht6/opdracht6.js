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
        disneyplaatje = document.createElement("img");
        disneyplaatje.src = "img/disney" + (i + 1) + ".jpg";
        disneyplaatje.style.visibility = 'hidden'; //annoying piece of code
        disneyplaatje.id = (i + 1);
        disneyplaatje.addEventListener("click", show);
        pictureHolders[i].appendChild(disneyplaatje);
    }
}

function show() {
    disneyplaatje.style.visibility = 'visible';
    console.log("mlg 420 360 noscope")
}
