window.onload =
    fetch('/jokes.json')
    .then(response => response.json())
    .then(data => letoltesBefe(data)
    );

var viccek;

function letoltesBefe(d) {
    console.log("Sikeres letöltés");
    console.log(d);
}