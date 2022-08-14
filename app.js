

document.getElementById("btn").addEventListener("click", function () {

    var megtakaritas = document.getElementById("megtakaritas").value;
    idoValaszto = document.getElementById("idoValaszto");
    i = idoValaszto.selectedIndex;
    elteltIdo = Number(idoValaszto.options[i].value);
    kerekpar = document.getElementById("kerekpar");
    telefon = document.getElementById("telefon");
    konzol = document.getElementById("konzol");
    text = document.getElementById("eredmeny");
    forintHULocale = Intl.NumberFormat('hu-HU');
    elegPenz = document.getElementById("elegPenz");
    radio = document.getElementsByName("radio");



    if (megtakaritas <= 0 || megtakaritas % 1 != 0 || idoValaszto.value == 0 || (kerekpar.checked == false && telefon.checked == false && konzol.checked == false)) {
        alert("Nem töltött ki minden mezőt vagy hibás adatot adott meg! Figyeljen arra, hogy a megtakarítás csak egész szám lehet!");

    } else {


        if (elteltIdo == 1) {
            var eredmeny = megtakaritas * 26;
            text.innerHTML = "Az ön megtakarítása: " + forintHULocale.format(eredmeny) + " Forint";

        } else if (elteltIdo == 2) {

            var eredmeny = megtakaritas * 52;
            text.innerHTML = "Az ön megtakarítása: " + forintHULocale.format(eredmeny) + " Forint";


        } else if (elteltIdo == 3) {

            var eredmeny = megtakaritas * 156;
            text.innerHTML = "Az ön megtakarítása: " + forintHULocale.format(eredmeny) + " Forint";
        } else if (elteltIdo == 4) {

            var eredmeny = megtakaritas * 260;
            text.innerHTML = "Az ön megtakarítása: " + forintHULocale.format(eredmeny) + " Forint";
        }

        if ((kerekpar.checked == true && eredmeny >= 100000) || (telefon.checked == true && eredmeny >= 80000) || (konzol.checked == true && eredmeny >= 150000)) {

            elegPenz.innerHTML = "<h3>Van elég pénze a vásárláshoz!</h3>"
        } else if ((kerekpar.checked == true && eredmeny < 100000) || (telefon.checked == true && eredmeny < 80000) || (konzol.checked == true && eredmeny < 150000)) {

            elegPenz.innerHTML = "<h3>Nincs elég pénze a vásárláshoz!</h3>"
        }
    }
})

