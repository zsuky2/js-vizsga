document.getElementById("btn").addEventListener("click", function () {

    var megtakaritas = document.getElementById("megtakaritas").value;
    megtakaritasInput = document.getElementById("megtakaritas");
    idoValaszto = document.getElementById("idoValaszto");
    i = idoValaszto.selectedIndex;
    elteltIdo = Number(idoValaszto.options[i].value);
    kerekpar = document.getElementById("kerekpar");
    telefon = document.getElementById("telefon");
    konzol = document.getElementById("konzol");
    forintHULocale = Intl.NumberFormat('hu-HU');
    text = document.getElementById("eredmeny");
    elegPenz = document.getElementById("elegPenz");
    radio = document.getElementsByName("radio");


    if ((megtakaritas <= 0 || megtakaritas % 1 != 0 ) && idoValaszto.value == 0) {

        alert("Nem töltött ki minden mezőt vagy hibás adatot adott meg! Figyeljen arra, hogy a megtakarítás csak pozitív egész szám lehet!");
        megtakaritasInput.classList.remove("border-danger");
        idoValaszto.classList.remove("border-danger");
        megtakaritasInput.classList.add("border-danger");
        idoValaszto.classList.add("border-danger");
        
    } else if (megtakaritas <= 0 || megtakaritas % 1 != 0) {

        megtakaritasInput.classList.add("border-danger");
        idoValaszto.classList.remove("border-danger");
        alert("Hibás adatot adott meg! Figyeljen arra, hogy a megtakarítás csak pozitív egész szám lehet!");
    } else if (idoValaszto.value == 0) {

        idoValaszto.classList.add("border-danger");
        megtakaritasInput.classList.remove("border-danger");
        alert("Nem választotta ki, hogy mennyi ideig spórolt!");
    } else {

        if (elteltIdo == 1) {

            var eredmeny = megtakaritas * 26;

        } else if (elteltIdo == 2) {

            var eredmeny = megtakaritas * 52;

        } else if (elteltIdo == 3) {

            var eredmeny = megtakaritas * 156;

        } else if (elteltIdo == 4) {

            var eredmeny = megtakaritas * 260;

        }

        if ((kerekpar.checked == true && eredmeny >= 100000) || (telefon.checked == true && eredmeny >= 80000) || (konzol.checked == true && eredmeny >= 150000)) {

            megtakaritasInput.classList.remove("border-danger");
            idoValaszto.classList.remove("border-danger");
            elegPenz.classList.remove("text-danger");

            text.innerHTML = "Az ön megtakarítása: " + forintHULocale.format(eredmeny) + " Forint";
            elegPenz.innerHTML = "<h3>Van elég pénze a vásárláshoz!</h3>"

        } else if ((kerekpar.checked == true && eredmeny < 100000) || (telefon.checked == true && eredmeny < 80000) || (konzol.checked == true && eredmeny < 150000)) {

            megtakaritasInput.classList.remove("border-danger");
            idoValaszto.classList.remove("border-danger");

            text.innerHTML = "Az ön megtakarítása: " + forintHULocale.format(eredmeny) + " Forint";
            elegPenz.innerHTML = "<h3>Nincs elég pénze a vásárláshoz!</h3>"
            elegPenz.classList.add("text-danger");
        }
    }
})

