"use strict"

const head = document.querySelector("#head")//Elemento header
const body = document.getElementsByTagName("body")[0]//Elemento header
console.log(body)
const btnAbrirMenu = document.querySelector("#btnAbrirMenu")//button da img de quando clicar vai abrir a janela do menu
const janelaMenu = document.querySelector("#janelaMenu")//Elemento nav que é a janela.

btnAbrirMenu.addEventListener("click",(evt) => {
    janelaMenu.setAttribute("class",("menuHabilitado"))
})
