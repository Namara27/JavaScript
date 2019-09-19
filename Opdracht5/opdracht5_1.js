pics = document.getElementById("pics");
createPicsHolder();
createDisneyPics()

function createPicsHolder() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }
}

function createDisneyPics() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        fav = document.createElement("div");
        fav.className = "fav";
        fav.id = "fav_" + (i + 1);
        disneyplaatje = document.createElement("img");
        disneyplaatje.src = "img/disney" + (i + 1) + ".jpg";
        disneyplaatje.id = (i + 1);
        disneyplaatje.addEventListener("click", function () {
            addFav(this.id);
        });
        pictureHolders[i].appendChild(fav);
        pictureHolders[i].appendChild(disneyplaatje);
    }
}

function addFav(id) {
    notFav = document.getElementsByClassName("fav");

    for (var i = 0; i < notFav.length; i++) {
        notFav[i].style.backgroundImage = "none";
    }
    fav = document.getElementById("fav_" + id);
    fav.style.backgroundImage = "url('img/fav.jpg')";
}
