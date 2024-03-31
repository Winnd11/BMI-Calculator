function calcular() {
    const peso = document.getElementById("peso").value
    const altura = document.getElementById("altura").value
    conta = peso / (altura * altura);
    const final = conta.toFixed(2) 
    document.getElementById('resultado').innerText = final
}
