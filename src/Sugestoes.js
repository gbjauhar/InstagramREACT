function Sugestao(props) {
    return (
      <li class="sugestao">
        <div class="usuario">
          <img src={props.imagem} />
          <div class="nome">{props.nome}</div>
          <div class="razao">{props.razao}</div>
        </div>
      </li>
    )
  }
  export default function Sugestoes() {
    const listaSugestoes = [
      { imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
      { imagem: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
      { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
      { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
      { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" },
    ]
    return (
      <ul class="sugestoes">
        <Titulo />
        {listaSugestoes.map((s) => <Sugestao nome={s.nome} imagem={s.imagem} razao={s.razao} />)}
        <div class="seguir">Seguir</div>
      </ul>
    )
  }
  
  function Titulo() {
    return (
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
    )
  }