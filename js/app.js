function comprar() {

    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    let qtdIngresso = document.getElementById('qtd-' + tipoIngresso);
    let campo = document.getElementById('qtd');

    if(quantidade > qtdIngresso.textContent) {

        alert(`Não temos essa quantidade de ingressos do tipo ${tipoIngresso} para compra.`);
        campo.value = '';

    }else if (isNaN(quantidade) || quantidade < 0){

        alert('Digite um número válido no campo "Qtde." por favor.');
        campo.value = '';

    }else {

        alert(`Sua compra de ${quantidade} ingressos para ${tipoIngresso} foi realizada com sucesso!`);
        qtdIngresso.textContent = qtdIngresso.textContent - quantidade;
        campo.value = '';

    }

}