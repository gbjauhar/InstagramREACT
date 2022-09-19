import React from "react"

export default function Posts(){
    const listaPosts = [
        {imagem: "assets/img/barked.svg", nome: "barked", conteudo: "assets/img/gato-telefone.svg", fotoCurtida: "assets/img/respondeai.svg", usuario: "respondeai", curtidas:"665.152"},
        {imagem: "assets/img/meowed.svg", nome: "meowed", conteudo: "assets/img/dog.svg", fotoCurtida: "assets/img/adorable_animals.svg", usuario: "adorable_animals", curtidas:"99.845"}
    ]
    return(
        <ul class="posts">
          {listaPosts.map ((s) => <Post imagem={s.imagem} nome={s.nome} conteudo={s.conteudo} curtidas={s.curtidas} usuario={s.usuario}/>)}
        </ul>
    )
}

function Post(props){

  let [curtirIcon, setLike] = React.useState('heart-outline')
    let [curtirClass, setCurtirClass] = React.useState('')
    let [curtidas, setCurtidas] = React.useState(props.curtidas)
    function curtirPost(){
        curtidas = curtidas.toString().replace(".", "")
        curtidas = parseInt(curtidas)
        if(curtirIcon === 'heart-outline'){
            setLike('heart')
            curtidas++
            setCurtirClass('vermelho')
            setCurtidas(curtidas)
            
        }else{
            setLike('heart-outline')
            curtidas--
            setCurtidas(curtidas)
            setCurtirClass('')
            
        }
    }

    let [salvarIcon, setIcon] = React.useState('bookmark-outline')
    function salvarPost(){
        if(salvarIcon === 'bookmark-outline'){
            setIcon('bookmark')
        }else{
            setIcon('bookmark-outline')
        }
    }

    return(
        <li class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imagem} />
                {props.nome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.conteudo} onClick={curtirPost}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name={curtirIcon} onClick={curtirPost} class={curtirClass}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={salvarIcon} onClick={salvarPost}></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.fotoCurtida}/>
                <div class="texto">
                  Curtido por <strong>{props.usuario}</strong> e <strong>outras {curtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </li>
    )
}
