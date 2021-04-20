// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..
let auto = {
znacka: "Ford",
barva: "černá",
rokVyroby: "2010",
spz: "1B7 K83"
};



// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)
auto.majitel={};
auto.majitel.jmeno="Markéta"
auto.majitel.prijmeni="Musilovár"



// Přepiš značku na Škoda

auto["znacka"]= "Škoda";


// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
const majitelka= auto.majitel.jmeno + " " + auto.majitel.prijmeni;
document.querySelector("#majitelka").innerHTML=majitelka;

const auto = auto.znacka;
document.querySelector("#znacka").innnerHTML=znacka;

const spz = auto.spz;
document.querySelector("#spz").innerHTML=spz;