import { entradas } from "./entradas.js";
import { rolls } from "./rolls.js";
import { postres } from "./postres.js";
import { sushiCombinado } from "./sushiCombinado.js";
import { soyPaperRolls } from "./soyPaperRolls.js";
import { hotRolls } from "./hotRolls.js";
import { veggies } from "./veggies.js";
import { temakis } from "./temakis.js";
import { geishas } from "./geishas.js";
import { nigiriSashimi } from "./nigiriSashimi.js";
import { makis } from "./maki.js";
import { townKitchen } from "./townKitchen.js";
import { bebidasSinAlcohol } from "./bebidasSinAlcohol.js";
import { cervezas } from "./cervezas.js";
import { sake } from "./sake.js";
import { mocktails } from "./mocktails.js";
import { cocktails } from "./cocktails.js";
import { vinosTintos } from "./vinosTintos.js";
import { vinosBlancos } from "./vinosBlancos.js";
import { vinosEspumantes } from "./vinosEspumantes.js";
import { vinosPorCopa } from "./vinosPorCopas.js";

export const menuData = {
    contact: {
        direccion: "Paraná 3097, Martínez",
        telefono: "11 6228 8696 / 5291 8671",
        aclaracion:
            "Estamos comprometidos con tu bienestar. Si tienes alguna alergia, avísanos ya que no todos los ingredientes están listados. El valor del cubierto es de $2.800 e incluye nuestro servicio de mesa y el agua con y sin gas.",
    },
    sections: [
        { nombre: "Entradas", items: entradas },
        { nombre: "Postres", items: postres },
        { nombre: "Sushi Combinado", items: sushiCombinado },
        { nombre: "Rolls", items: rolls },
        { nombre: "SoyPaper Rolls", items: soyPaperRolls },
        { nombre: "Hot Rolls", items: hotRolls },
        { nombre: "Veggie", items: veggies },
        { nombre: "Temakis", items: temakis },
        { nombre: "Geishas", items: geishas },
        { nombre: "Nigiri & Sashimi", items: nigiriSashimi },
        { nombre: "Makis", items: makis },
        { nombre: "Town Kitchen", items: townKitchen },
        { nombre: "Bebidas sin Alcohol", items: bebidasSinAlcohol },
        { nombre: "Cervezas", items: cervezas },
        { nombre: "Sake", items: sake },
        { nombre: "Mocktails", items: mocktails },
        { nombre: "Cocktails", items: cocktails },
        { nombre: "Vinos Tintos", items: vinosTintos },
        { nombre: "Vinos Blancos", items: vinosBlancos },
        { nombre: "Vinos Espumantes", items: vinosEspumantes },
        { nombre: "Vinos por Copa", items: vinosPorCopa },
    ],
};
