function imprimirnome() {
    let Nome = document.getElementById("Nome").value;
    let Idade = document.getElementById("Idade").value;
    let Cargo = document.getElementById("Cargo").value;
    let Departamento = document.getElementById("Departamento").value;
    let Acesso_Restrito = document.getElementById("Acesso_Restrito").value;

    console.log("Nome(String): ", Nome);
    console.log("Idade(Number): ", Idade);
    console.log("Cargo(String): ", Cargo);
    console.log("Departamento(String): ", Departamento);
    console.log("Acesso_Restrito(Boolean): ", Acesso_Restrito);


    window.alert(
        "Cadastro finalizado com sucesso! \n\n" +
        "Dados do Crachá: \n\n" +
        "Nome: " + Nome + "\n" +
        "Idade: " + Idade + "\n" +
        "Cargo: " + Cargo + "\n" +
        "Departamento: " + Departamento + "\n" +
        "Acesso Restrito: " + Acesso_Restrito + "\n"
    );
    if (Acesso_Restrito) {/// se verdadeiro
        window.location.href = "pages/gerente.html"
    } else {/// se falso
        window.location.href = "pages/funcionario.html"
    }
}

