import Animale from "./animale.js"

export default class Fattoria {
    constructor() {
     console.log("ciao");
        if (document.getElementById("btGa") != null) {
            document.getElementById("btGa").addEventListener('click', this.cGallo);
        }

        if (document.getElementById("btMa") != null) {
            document.getElementById("btMa").addEventListener('click', this.cMaiale);
        }

        if (document.getElementById("btMu") != null) {
            document.getElementById("btMu").addEventListener('click', this.cMucca);
        }
    }

    cGallo() {

        var gallo = new Animale("Gallo", "Andalusa", "2 zampe", "gallina.jpg")
        document.getElementById("idImg").src = gallo.img_url;
        document.getElementById("idTipo").innerHTML = gallo.tipo;
        document.getElementById("idRazza").innerHTML = gallo.razza;
        document.getElementById("idZampe").innerHTML = gallo.nzampe;
    }
    cMaiale() {

        var maiale = new Animale("Maiale", "Andalusa", "4 zampe", "maiale.jpg")
        document.getElementById("idImg").src = maiale.img_url;
        document.getElementById("idTipo").innerHTML = maiale.tipo;
        document.getElementById("idRazza").innerHTML = maiale.razza;
        document.getElementById("idZampe").innerHTML = maiale.nzampe;
    }
    cMucca() {

        var mucca = new Animale("Mucca", "Andalusa", "4 zampe", "mucca.jpg")
        document.getElementById("idTipo").innerHTML = mucca.tipo;
        document.getElementById("idRazza").innerHTML = mucca.razza;
        document.getElementById("idZampe").innerHTML = mucca.nzampe;
    }
}