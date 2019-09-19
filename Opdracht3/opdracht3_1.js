var pictures = document.getElementsByTagName("img");
var random = 0;
var randomNumbers = [];

while (randomNumbers.length < 9) {
    random = Math.floor(Math.random() * 9 + 1);
    if (randomNumbers.lastIndexOf(random) == -1) {
        randomNumbers.push(random);
    }

}
random = 0;
for (var picture in pictures) {
    pictures[picture].src = "img/disney" + randomNumbers[random] + ".jpg";
    random++
}