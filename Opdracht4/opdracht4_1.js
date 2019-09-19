var auto = {
    kleur: "blauw",
    merk: "Ford",
    type: "Mondeo",
    snelheid: 0,

    toeteren: function () {
        console.log("toet!");
    },
    
    gasgeven: function () {
        this.snelheid += 5;
        console.log(this.snelheid)
    }

}

auto.gasgeven();
auto.toeteren();