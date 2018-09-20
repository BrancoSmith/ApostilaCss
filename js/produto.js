var inputTamanho = document.querySelector('[name=tamanho]')
var outputTamanho = document.querySelector('[name=valortamanho]')

inputTamanho.oniput = function (){
    outputTamanho.value = inputTamanho.value
    outputTamanho.textContent = event.target.value
}

inputTamanho.oniput = mostraTamanho