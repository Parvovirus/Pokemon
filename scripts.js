// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon"

// 2. Cambia el color de fondo de la primera generación de Pokimon.

document.querySelector(".infocard-list").style = "background-color: red";


// 3. Imprime por consola la URL de la página.
var URLactual = window.location; //Localiza en la pagina la url
console.log(URLactual);

console.log(document.URL); //localiza y puedes pinchar en el enlace de la consola.


// 4. Imprime por consola el dominio de la página.

console.log(document.domain);

// 5. Imprime todos los nodos de imagen.

console.log(document.querySelectorAll("img"));


// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

 var changeImg = document.querySelectorAll("img");

for (i = 0; i < changeImg.length - 1; i++) {
     changeImg[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}


// Premium. 
//Cambia el fondo de todos los infocard-lg-data text-muted 
//para todos los Pokimon voladores itype flying

var spanA = document.querySelectorAll(".flying"); 
for (i = 0; i < spanA.length - 1; i++) {   
        if (spanA[i].href == "https://pokemondb.net/type/flying") {
            spanA[i].parentNode.parentNode.style = "background-color: blue";
        }   
}



