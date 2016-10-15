function lavoz() {
    function a() {
        return Math.floor(6 * Math.random()) + 0
    }
    var b = document.createElement("audio"),
        c = a();
    0 == c ? b.src = "sounds/acertarme_negocio.ogg" : 2 == c ? b.src = "sounds/puta_sola_mierda.ogg" : 1 == c ? b.src = "sounds/plata_ou_plomo.ogg" : 3 == c ? b.src = "sounds/tranquilo.ogg" : 5 == c ? b.src = "sounds/um_dia_presidente.ogg" : 6 == c ? b.src = "sounds/yo_soy_pablo.ogg" : b.src = "sounds/coma_mierda.ogg", b.play()
    window.open("la_bala.html");
}

function getRandomInt() {
    return Math.floor(Math.random() * (max - min)) + min
}
var copyButton = document.getElementById("copy"),
    copyTextareaBtn = document.querySelector(".copy");
copyTextareaBtn.addEventListener("click", function(a) {
        document.getElementById("outputText").disabled = !1;
        var b = document.querySelector(".clone");
        b.select(), document.getElementById("outputText").disabled = !0;
        try {
            var c = (document.execCommand("copy"), copyButton.innerHTML);
            copyButton.innerHTML = "CTRL + V", setTimeout(function() {
                copyButton.innerHTML = c
            }, 2e3)
        } catch (a) {}
    }),
    function() {
        var a = ["PABLO EMILIO ESCOBAR GAVIRIA", "EL MAYOR TRAFICANTE DE DROGAS", "EL HOMBRE MÁS RICO DEL MUNDO", "TODOS"],
            b = 0;
        setInterval(function() {
            $("#changingword").fadeOut(function() {
                $(this).html(a[b = (b + 1) % a.length]).fadeIn()
            })
        }, 5e3)
    }();
var phraseStart = ["Ustedes pueden aceptar mi negocio o aceptar las consequências. ", "¿Plata o plomo? ", "Compremos una lavadora más grande, pues. ", "POR UNA RAZÓN EL REALISMO MÁGICO NACIÓN EN COLOMBIA. ", "Así que teníamos que triangular las señales usando recursos en tierra. ", "Me entregué a la que el punk ... el viceministro de justicia. Pero ya que no hay justicia en este país , que es el viceministro de nada. ", "Yo ayudaré porque vengo de orígenes pobres. ", "Porque Dios no ha hecho nada que ver con it.It fue que, Nick. Es necessario su intervención que tiene esas personas muertas . Eres tan culpable como yo. "],
    phraseMedium = ["Los políticos se espantan fácil. Una pistola y ya. ", " La cárcel em Estados Unidos es peor que la muerte. ", "Las mentiras son necesarias cuando la verdade es muy difícil de creer. ", "Y cuando tenías cobertura,no sabías a quién oías. ", "Y este es el coronel Carrillo, el líder del Bloque de Búsqueda. ", "No eres mi rehén. Eres mi invitado. ", "Te voy a dar un millón de dólares. ", "Yo no quiero ser bueno. Voy a ser grande. No soy una persona rica. Soy pobre persona con dinero. "],
    phraseHing = ["El propósito de la guerra es la paz. ", "Ya no queda nadie que se nos enfrente. ¿Y sabes por qué, Fabito? Porque nadie tiene los huevos como nosotros. ", "Hay momentos para pelear y hay momentos para ser astutos. ", "Tengo a Poison desde 400 a 1700 MHz, caballeros. ", "La gente lo olvida, pero 47 millones de estadounidenses votaron por Nixon. ", "Liberar a Columbia . ", "Alguien en mi organización a la que dio el valor en la calle de mi cocaína. De lo contrario , ¿cómo saber ?. ", "Bueno ... en mi opinión, una cárcel en Estados Unidos es peor que la muerte. "],
    min = 0,
    max = phraseStart.length;
button = document.getElementById("gerar"), button.addEventListener("click", function() {
    var a = document.getElementById("numberPharagraphs").value;
    if (a > 100) document.getElementById("outputText").innerHTML = "O número de paragráfos precisa pode ser até 100, CABRON!", setTimeout(function() {
        document.getElementById("outputText").innerHTML = ""
    }, 4e3);
    else if (a <= 0) document.getElementById("outputText").innerHTML = "Tu queres escrever paragráfos negativos? Imbecil!", setTimeout(function() {
        document.getElementById("outputText").innerHTML = ""
    }, 4e3);
    else {
        console.log(a);
        for (var b = "", c = 0; a > c; c++) {
            var d = getRandomInt();
            b += phraseStart[d], d = getRandomInt(), b += phraseMedium[d], d = getRandomInt(), b += phraseHing[d] + "\r\n\r\n"
        }
        document.getElementById("outputText").innerHTML = b
    }
}), $(document).ready(function() {
    $("a").on("click", function(a) {
        if (content = $("#arrowhref").get(0), console.log(content), "" !== this.hash) {
            $(content).hide(), a.preventDefault();
            var b = this.hash;
            $("html, body").animate({
                scrollTop: $(b).offset().top
            }, 1500, function() {
                window.location.hash = b, $(content).show()
            })
        }
    })
});