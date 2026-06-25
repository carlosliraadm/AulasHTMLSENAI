function salvarnome() {
    // 1. Pegando os valores corretos usando .value
    let nome = document.getElementById("texto-inserido").value;
    let horas = document.getElementById("horas-funcionario").value;
    let cargo = document.getElementById("cargo-funcionario").value;

    // 2. Criando o objeto com as variáveis que realmente existem
    let objetonome = {
        nome: nome,
       horas: horas,
       cargo: cargo
    };

    // 3. Convertendo para string JSON
    let textoJSON = JSON.stringify(objetonome);
    
    // 4. Salvando no localStorage
    localStorage.setItem("dadonome", textoJSON);
    
    // 5. Exibindo o nome salvo na tela usando a variável correta
    document.getElementById("nome-salvo").innerText = nome;
}