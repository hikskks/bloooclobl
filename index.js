function pergunta(pergunta){
    var nome = (prompt (pergunta));

    var elementoNome = document.getElementById("nome")
    elementoNome.innerText = nome
}

function mudarCor(cor){
    var box = document.getElementById("box")
    var nome = document.getElementById("nome")
    var texto = document.getElementById("texto")

    box.style.backgroundColor = cor
    nome.style.color = cor
    texto.style.color = cor
}

function mudarTextoPassa(){
    var passa = 'clica no bloco'
    document.getElementById("texto").innerHTML = passa
}

function mudarTextoFora(){
    var fora = 'passe o mouse em cima do bloco'
    document.getElementById("texto").innerHTML = fora
}

function mudarTextoClique(){
    var clique = 'clique duas vezes'
    document.getElementById("texto").innerHTML = clique
}

function mudarTextoDoisCliques(){
    var doiscliques = 'olá'
    document.getElementById("texto").innerHTML = doiscliques
}
