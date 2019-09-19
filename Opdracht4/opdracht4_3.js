var picHead = [1, 2, 3, 4];
var teller = 0;

//Head
var headholder = document.getElementById("headholder");
headholder.style.backgroundImage = "url('img/head2.png')";

headholder.addEventListener("click", function () {
    headholder.style.backgroundImage = "url('img/head" + getNextPicture() + ".png')";
});

//Nose
var noseholder = document.getElementById("noseholder");
noseholder.style.backgroundImage = "url('img/nose1.png')";

noseholder.addEventListener("click", function () {
    noseholder.style.backgroundImage = "url('img/nose" + getNextPicture() + ".png')";
});

//Mouth
var mouthholder = document.getElementById("mouthholder");
mouthholder.style.backgroundImage = "url('img/mouth3.png')";

mouthholder.addEventListener("click", function () {
    mouthholder.style.backgroundImage = "url('img/mouth" + getNextPicture() + ".png')";
});

//Teller
function getNextPicture() {
    if (teller >= picHead.length) {
        teller = 1;
    } else {
        teller++;
    }
    return teller;
}