import React from "react"

export default function Usuario(){
    const imagemPadrao = "assets/img/catanacomics.svg"
    const nomePadrao = "Catana"
    const [nome, setNome] = React.useState(nomePadrao)
    const [imagem, setImagem] = React.useState(imagemPadrao)

    function inserirNome(){
        const nomePrompt = prompt("Qual é seu nome?")
        setNome(nomePrompt)
    }
    
    function inserirImagem(){
        const imagemPrompt = prompt("Qual é o link da imagem?")
        setImagem(imagemPrompt)
    }

    return(
        <div class="usuario">
        <img onClick={inserirImagem} src={imagem} />
        <div class="texto">
          <strong>catanacomics</strong>
          <span>
            {nome}
            <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
          </span>
        </div>
      </div>
    )
}