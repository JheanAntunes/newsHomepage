"use strict"

const btnAbrirMenu = document.querySelector("#btnAbrirMenu")//button da img de quando clicar vai abrir a janela do menu
const janelaMenu = document.querySelector("#janelaMenu")//Elemento nav que é a janela.
const btnFechar = document.querySelector("#btnFechar")//button que contém o icone da img de fechar

let larguraTela = window.screen.width
let larguraTelaResize = 0;

console.log(larguraTela)

 if(larguraTela >= 768){//excluindo a id no seletor nav que contém display none
    janelaMenu.removeAttribute("id")
    btnAbrirMenu.remove()
    btnFechar.remove()
 }

 window.addEventListener("resize",(evt) => {
    larguraTelaResize = body.offsetWidth
    console.log(larguraTelaResize)
    if(larguraTelaResize >= 768){//excluindo a id no seletor nav que contém display none
        janelaMenu.removeAttribute("id")
       btnAbrirMenu.remove()
        btnFechar.remove()
     }else{
        janelaMenu.setAttribute("id","janelaMenu")//atribuindo o display none.
     }
 })

const body = document.getElementsByTagName("body")[0]//Selecionando o body

const filhosBody = [...body.children]//pegando os elemento dentro do body dentro de uma coleção array

btnAbrirMenu.addEventListener("click",(evt) => {
    janelaMenu.removeAttribute("id")
    janelaMenu.setAttribute("class","menuHabilitado")//atribuindo a class
    const div = document.createElement("div")//criando a div
    div.setAttribute("class","sombra")//atribuindo a class
   body.insertBefore(div,filhosBody[0])//anexando a div em firstChildren
})

//evento de quando o usuario clicar na imagem de fechar
btnFechar.addEventListener("click",(evt) => {
    janelaMenu.setAttribute("id","janelaMenu")//atribuindo o display none.
    janelaMenu.removeAttribute("class")//removendo a class
    document.querySelector(".sombra").remove()
})
