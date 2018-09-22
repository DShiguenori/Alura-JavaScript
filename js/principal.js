    // Alerta mostra uma janela com a mensagem:
    // alert("Olá mundo");	

    // console.log irá mostrar a mensagem apenas no console do desenvolvedor
    console.log("Olá mundo");

    // o document pega todo o documento da página
    console.log(document);

    // o query selector pega a tag e o conteúdo da tag
    console.log(document.querySelector("h1"));

    // declaração de uma variável, que obtém a tag e seu conteúdo
    var teste = document.querySelector("h1");

    // verificando o que temos dentro da variável
    console.log(teste);

    // a textContent pega apenas o conteúdo e ignora a tag
    console.log(teste.textContent);

    // aqui podemos mudar o valor do conteúdo
    teste.textContent = "Titulo Novo";

    // verificando agora o que ficou dentro da variável
    console.log(teste);

    // buscando pelo nome da classe
    console.log(document.querySelector(".titulo"));




    
    // calculando o IMC

    // código para pegar por ID:
    // var paciente = document.querySelectorAll("#primeiro-paciente");

    var pacientes = document.querySelectorAll(".paciente");

    for(var i = 0; i < pacientes.length; i++){

        var paciente = pacientes[i];

        // usando o paciente obtido acima, eu obtenho os dados da linha, usando as classes:
        var peso = (paciente.querySelector(".info-peso")).textContent;

        var altura = (paciente.querySelector(".info-altura")).textContent;

        var tdImc = paciente.querySelector(".info-imc")

        // adicionando verificações/validações
        var pesoValido = true;
        var alturaValida = true;
        
        if ((peso <= 0) || (peso >= 1000)   ){
            pesoValido = false;

            console.log("Peso inválido");

            tdImc.textContent = "Peso inválido";

            // movido para o .css
            //paciente.style.backgroundColor = "red";
            //paciente.style.color = "white";

            // adicionando uma classe para o paciente
            paciente.classList.add("paciente-invalido");            
        }
        if ( altura <= 0 || altura >= 3.00) {
            alturaValida = false;

            console.log("Altura inválida");

            tdImc.textContent = "Altura inválida";

            // movido para o .css
            //paciente.style.backgroundColor = "lightcoral";
            //paciente.style.color = "white";

            // adicionando uma classe para o paciente
            paciente.classList.add("paciente-invalido");
        }

        // calculando, apenas se passou pela validação
        if (pesoValido && alturaValida) {
            
            var imc = peso / (altura * altura) ;
            
            console.log(imc);
    
            // mudando o valor na tabela:        
            tdImc.textContent = imc.toFixed(2);
        }

    };




