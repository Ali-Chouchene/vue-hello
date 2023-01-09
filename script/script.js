/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

// console.log("VUE OK", vue);

const app = Vue.createApp({
    data() {
        return {
            message: "Primo messaggio scritto utilizzando VUE-JS",
            pic: "img/pic.png",
        };
    }

});

app.mount("#root");