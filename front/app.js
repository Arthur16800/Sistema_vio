// Acessa o objeto "document" que representa a pagina HTML

document
    // Seleciona o elemento com o id indicado do formulário
    .getElementById("formulario-registro")
    
    //Adiciona o ouvinte de evento(submit) para capturar o envio do formulário 
    .addEventListener("submit", function
    (event){
        // Previne o comportamento padrão do formulario, ou seja,impede que ele seja enviado e recarregue a pagina
        event.preventDefault

        // Captura os valores dos campos do formulário
        const name = document.getElementById("nome");
        const cpf = document.getElementById("cpf");
        const email = document.getElementById("email");
        const password = document.getElementById("senha");

        // Requisição HTTP para o endpoint de cadastro de usuario, chamada da rota

        fetch("http://localhost:5000/api/v1/user", {
            // Realiza uma chamada http para o servidor(a rota definida)
            method: "POST",
            headers:{
                // A requisição será em formato json
                "Content-Type":application/json
            },
            // Transforma os dados do formularioo em umsa string json pwara serem enviados no corpo(body) da requisição
            body: JSON.stringify({name, cpf, email, password}),        
        })
    });


    // REQUISIÇÃO DE ALGO ESPECÍFICO, SOLICITANDO UM SERVIÇO DA API
   