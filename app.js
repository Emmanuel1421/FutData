
function pesquisar() {

   let section = document.getElementById("resultados-pesquisa");
   
   let campoPesquisa = document.getElementById("campo-pesquisa").value
  if (campoPesquisa == "") {
    section.innerHTML ="<p>O jogador não foi encontrado.Você precisa digitar o nome do atleta.</p>"
    return
  }
  campoPesquisa = campoPesquisa.toLowerCase() ;

  let resultados = "";
  let titulo= "";
  let descricao="";

    for (let dado of dados)  {
    titulo=dado.titulo.toLowerCase()  
    descricao=dado.descricao.toLowerCase()


   
    if (dado.titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa))
       
        {resultados += `
<div class="item-resultado">
 <h2>   
  <a target="_blank" href=${dado.instagram}>${dado.titulo}</a>     
      </h2>
        <p class="descricao-meta">
            ${dado.descricao}
            <a target="_blank"  href=${dado.link}>Clique aqui para saber mais </a>     
            </div>
`;}
if (!resultados ) {
    resultados= "<p>O jogador não foi encontrado.</p>"
    return
}
}
section.innerHTML = resultados
}

