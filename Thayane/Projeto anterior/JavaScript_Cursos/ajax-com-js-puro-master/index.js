function buscaCep() { 
    let inputCep = document.querySelector('input\[name=cep\]'); 
    let cep = inputCep.value.replace('-', '');
    let url = 'http://viacep.com.br/ws/' + cep + '/json'; 
    //Usado para recuperar dados de uma determinada URL, 
    //podendo recuperar qualquer tipo de dado e fornece suporte aos protocólos HTTP, FILE e FTP.
    let xhr = new XMLHttpRequest(); 
    //O método open recebe três parâmetros:
    //1- O verbo HTTP a ser utilizado para realizar a requisição, o mesmo deve seguir o padrão REST.
    //2- A URL que pretendemos obter os dados.
    //3- Um argumento booleano informando se a requisição deve ser assíncrona ou síncrona.
    xhr.open('GET', url, true); 

    //A propriedade onreadystatechange é disparada sempre que nossa requisição 
    //sofre alguma alteração durante seu processamento:
    xhr.onreadystatechange = function() { 
        //Para verificar se a função foi finalizada, sendo que
        //o código 4 nos informa que a requisição foi finalizada
        if (xhr.readyState == 4) { 
            //Para verificar se foi realizada com sucesso
            //O código 200 nos informa que a requisição obteve sucesso durante seu processamento
            if (xhr.status = 200) preencheCampos(JSON.parse(xhr.responseText)); 
        } 
    } 
    xhr.send(); 
}

function preencheCampos() { 
    document.querySelector('input[name=endereco]').value = json.logradouro;
    document.querySelector('input[name=bairro]').value = json.bairro; 
    document.querySelector('input[name=complemento]').value = json.complemento;
    document.querySelector('input[name=cidade]').value = json.localidade; 
    document.querySelector('input[name=estado]').value = json.uf; 
}   