// Creo lista spesa
const listaSpesa = ["Patate x2", "Riso", "Latte", "Acqua x6", "Hamburger", "Gelato", "Pomodoro"]
// Salvo posizione 
let listaPosition 
// Salvo lunghezza array
const spesaLenght = listaSpesa.length
console.log(spesaLenght)

// Selezione elemento html
const ul = document.querySelector('.lista-spesa')
console.log(ul)

// Creo ciclo FOR
for (i = 0; i <= spesaLenght + 1; i++) {

    listaPosition = listaSpesa[i]

    let li = `
    <li>
        ${listaPosition}            
    </li>`

    ul.append(li)
    console.log(li)
    console.log(ul)
}