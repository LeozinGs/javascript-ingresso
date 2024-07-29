//Exercício 1
function mudarParaInteiro() {

    let element = document.getElementById('exercicio-1');
    let numero = element.querySelector('.campo');
    let texto = element.querySelector('.resposta');

    if(numero == '') {
        alert('Digite algum número no input.');
    }else {
        texto.innerHTML = `O número digitado aparecerá aqui: ${parseInt(numero.value)}<br>No console terá os dois valores: string(cor normal) e número inteiro(<span class="colorido" style="color: #9980ff;">colorido</span>)`;
        console.log(numero.value); 
        console.log(parseInt(numero.value)); 
        numero.value = '';
    }

}

//Exercício 2
function somar() {

    let element = document.getElementById('exercicio-2');
    let n1 = parseInt(element.querySelector('.campo1').value);
    let n2 = parseInt(element.querySelector('.campo2').value);
    let resposta = element.querySelector('.resposta');

    if(isNaN(n1) || isNaN(n2)){

        alert('Digite um número válido nos campos.');

    }else {

        resposta.innerHTML = `O resultado aparecerá aqui: <br>A soma dos números ${n1} + ${n2} é igual à: ${n1 + n2}`;
        element.querySelector('.campo1').value = '';
        element.querySelector('.campo2').value = '';

    }

}

function subtrair() {

    let element = document.getElementById('exercicio-2');
    let n1 = parseInt(element.querySelector('.campo1').value);
    let n2 = parseInt(element.querySelector('.campo2').value);
    let resposta = element.querySelector('.resposta');

    if(isNaN(n1) || isNaN(n2)){

        alert('Digite um número válido nos campos.');

    }else {

        resposta.innerHTML = `O resultado aparecerá aqui: <br>A subtração dos números ${n1} - ${n2} é igual à: ${n1 - n2}`;
        element.querySelector('.campo1').value = '';
        element.querySelector('.campo2').value = '';

    }

}

function multiplicar() {

    let element = document.getElementById('exercicio-2');
    let n1 = parseInt(element.querySelector('.campo1').value);
    let n2 = parseInt(element.querySelector('.campo2').value);
    let resposta = element.querySelector('.resposta');

    if(isNaN(n1) || isNaN(n2)){

        alert('Digite um número válido nos campos.');

    }else {

        resposta.innerHTML = `O resultado aparecerá aqui: <br>A multiplicação dos números ${n1} por ${n2} é igual à: ${n1 * n2}`;
        element.querySelector('.campo1').value = '';
        element.querySelector('.campo2').value = '';

    }

}

function dividir() {

    let element = document.getElementById('exercicio-2');
    let n1 = parseInt(element.querySelector('.campo1').value);
    let n2 = parseInt(element.querySelector('.campo2').value);
    let resposta = element.querySelector('.resposta');

    if(isNaN(n1) || isNaN(n2)){

        alert('Digite um número válido nos campos.');

    }else {

        resposta.innerHTML = `O resultado aparecerá aqui: <br>A divisão dos números ${n1} por ${n2} é igual à: ${n1 / n2}`;
        element.querySelector('.campo1').value = '';
        element.querySelector('.campo2').value = '';

    }

}

//Exercício 3
function verificarParImpar() {
    
    let element = document.getElementById('exercicio-3');
    let numero = parseInt(element.querySelector('.campo').value);
    let resposta = element.querySelector('.resposta');

    if(isNaN(numero)) {
        alert('Digite um número válido para ser verificado.');
    }else {
        numero % 2 == 0? resposta.innerHTML = `O número ${numero} é: par` : resposta.innerHTML = `O número ${numero} é: ímpar`;
        element.querySelector('.campo').value = '';

    }

}

//Exercício 4
function converterTemperatura() {

    let element = document.getElementById('exercicio-4');
    let escala = element.querySelector('.escala').value;
    let temperatura = element.querySelector('.campo').value;
    let temperaturaConvertida = 0;

    escala == 'celsius'? temperaturaConvertida = (temperatura * (9/5) + 32) : temperaturaConvertida = ((temperatura - 32) * 5 / 9);

    if(isNaN(temperatura)) {
        alert('Digite uma temperatura válida');
    }else if(escala == 'celsius') {
        element.querySelector('.resposta').textContent = `A temperatura de: ${temperatura}º ${escala.charAt(0).toUpperCase() + escala.slice(1)} em Fahrenheit é: ${temperaturaConvertida}`;
        element.querySelector('.campo').value = '';
    }else {
        element.querySelector('.resposta').textContent = `A temperatura de: ${temperatura}º ${escala.charAt(0).toUpperCase() + escala.slice(1)} em Celsius é: ${temperaturaConvertida}`;
        element.querySelector('.campo').value = '';
    }

}
