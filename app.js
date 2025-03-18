var focus = document.getElementById("amigo");
var amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    // Verifica se o input não está em branco
    if (nome == "") {
        alert("Por favor, insira um nome.");
        focus.focus();
    } else {
        document.getElementById("amigo").value = "";
        amigos.push(nome);
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = ""; 
        // Loop para exibir as adições no front
        for (let i = 0; i < amigos.length; i++) {
            console.log(amigos[i]);      
            let adicionado = document.createElement("li");
            adicionado.innerHTML = (amigos[i]);
            listaAmigos.appendChild(adicionado);
            focus.focus();
        }
    }
    console.log (amigos);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia.");
        resultado.innerHTML = "";
    } else {
        // Gera um índice aleatório baseado no tamanho do array
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        console.log(indiceSorteado);
        // Sorteia o amigo
        const amigoSorteado = amigos[indiceSorteado];
        console.log (amigoSorteado);
        // Exibe o nome do amigo sorteado na tela
        let resultado = document.getElementById("resultado");           
        let sorteado = document.createElement("li");
        sorteado.innerHTML = (`Amigo(a) sorteado(a): ${amigoSorteado}`);
        resultado.appendChild(sorteado);
        //Elimina o amigo sorteado do array
        amigos.splice(indiceSorteado, 1);
        console.log (amigos);
        listaAmigos.innerHTML = ""; 
        for (let i = 0; i < amigos.length; i++) {
            console.log(amigos[i]);      
            let adicionado = document.createElement("li");
            adicionado.innerHTML = (amigos[i]);
            listaAmigos.appendChild(adicionado);
            focus.focus();
        }
    }

}