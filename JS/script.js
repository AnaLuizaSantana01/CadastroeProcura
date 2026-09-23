// Procura o elemento que possui id "item"
let item = document.getElementById("item");
// Procura o elemento que possui o  id "lista"
let lista = document.getElementById("lista")
// Procura o elemento que possui o  id "busca"
let busca = document.getElementById("busca")
// Procura o elemento que possui o  id "btnAdicionar"
let adicionar = document.getElementById("btnAdicionar")

// Criar uma matriz vazia para guardar os itens / é a casinha
let itens = [];
adicionar.addEventListener("click", BtnAdicionar);

busca.addEventListener("keyup", buscar); //EXECUTA A FUNÇÃO BUSCAR

function BtnAdicionar(){
 //adicionar o valor digitado no arrray / pega a galinha e leva para casa
    itens.push(item.value);
//cria uma nova tag <li>
    let li = document.createElement("li")
 //cria um texto com o vlaor digitdo / epga o nome "galinha" do usuario
    let texto = document.createTextNode(item.value);
//coloca o texto dentro da tag <li>
    li.appendChild(texto)
//coloca o <li> dentro da lista <ul> /Leva a galinha ate o curral com etiqueta
    lista.appendChild(li);
}

function buscar(){
    //Pega o valor digitado e converte para maisculas / A denise falou "Boi"
    let nome = busca.value.toLowerCase();
    //Busca todas as tags <li> da pagina / vai até o curral
    let itensLista = document.getElementsByTagName("li"); 
    //pencorre todos os itens da lista // ele vai percorrer o curral
    for(let i = 0; i< itensLista.length; i++){
    //pega o texto do item atual e converte para maiusculas nesse caso, no curral, as etiquetas ficarão maisculas no momento que o elvis percorrer cada animal
    let texto = itensLista[i].textContent.toLowerCase();
    if(texto.includes(nome)){
        itensLista[i].style.display = "block";
    }else{
        itensLista[i].style.display = "none";
    }
    }
}