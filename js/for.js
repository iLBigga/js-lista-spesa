// Creo lista spesa
const listaSpesa = ["Patate x2", "Riso", "Latte", "Acqua x6", "Hamburger", "Gelato", "Pomodoro", "Pane", "Nutella x5"]
// Salvo posizione 
let listaPosition = listaSpesa[0]
// Salvo lunghezza array
const spesaLenght = listaSpesa.length

// Selezione elemento html
const ul = document.querySelector('.lista-spesa')
const title = document.querySelector('.title')
title.innerHTML = 'Ciclo For'

// Creo ciclo FOR
for (i = 0; i < spesaLenght; i++) {
    // Indico che i deve essere l'indece all'interno dell'array
    listaPosition = listaSpesa[i]
    // Creo li con all'interno elemento array selezionato
    let li =`
    <li>
        ${listaPosition}            
    </li>
    `
    // Concateno li all'interno di ul
    ul.innerHTML += li
}

