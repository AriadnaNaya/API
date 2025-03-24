import { entradas } from "@/data/entradas.js";
import { rolls } from "@/data/rolls.js";
import { postres } from "@/data/postres.js";
import { sushiCombinado } from "@/data/sushiCombinado.js";
import { soyPaperRolls } from "@/data/soyPaperRolls.js";
import { hotRolls } from "@/data/hotRolls.js";
import { veggies } from "@/data/veggies.js";
import { temakis } from "@/data/temakis.js";
import { geishas } from "@/data/geishas.js";
import { nigiriSashimi } from "@/data/nigiriSashimi.js";
import { makis } from "@/data/maki.js";
import { townKitchen } from "@/data/townKitchen.js";
import { bebidasSinAlcohol } from "@/data/bebidasSinAlcohol.js";
import { cervezas } from "@/data/cervezas.js";
import { sake } from "@/data/sake.js";
import { mocktails } from "@/data/mocktails.js";
import { cocktails } from "@/data/cocktails.js";
import { vinosTintos } from "@/data/vinosTintos.js";
import { vinosBlancos } from "@/data/vinosBlancos.js";
import { vinosEspumantes } from "@/data/vinosEspumantes.js";

// Definir menuData con la estructura correcta
export const menuData = {
    sections: [
        { title: "Entradas", items: entradas },
        { title: "Rolls", items: rolls },
        { title: "Postres", items: postres },
        { title: "Sushi Combinado", items: sushiCombinado },
        { title: "Soy Paper Rolls", items: soyPaperRolls },
        { title: "Hot Rolls", items: hotRolls },
        { title: "Veggie", items: veggies },
        { title: "Temakis", items: temakis },
        { title: "Geishas", items: geishas },
        { title: "Nigiri & Sashimi", items: nigiriSashimi },
        { title: "Makis", items: makis },
        { title: "Town Kitchen", items: townKitchen },
        { title: "Bebidas sin Alcohol", items: bebidasSinAlcohol },
        { title: "Cervezas", items: cervezas },
        { title: "Sake", items: sake },
        { title: "Mocktails", items: mocktails },
        { title: "Cocktails", items: cocktails },
        { title: "Vinos Tintos", items: vinosTintos },
        { title: "Vinos Blancos", items: vinosBlancos },
        { title: "Vinos Espumantes", items: vinosEspumantes },
    ],
    contact: {
        address: "Paraná 3097, Martínez",
        phone: "11 6228 8696",
    },
};
