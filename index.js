var btnLatir = document.getElementById('latir')
var btnComer = document.getElementById('comer')
var btnObjeto = document.getElementById('objeto')

var cachorro = {
    nome: '',
    dataNascimento: '',
    latir: function () {
        alert('O cachorro latiu')
    },
    comer: function () {
        alert('O cachorro comeu')
    },
}

cachorro.nome = prompt('Qual o nome do seu cachorro?')
cachorro.dataNascimento = prompt('Quando é o aniversário do seu cachorro?')


btnLatir.addEventListener('click', cachorro.latir);
btnComer.addEventListener('click', cachorro.comer);
btnObjeto.addEventListener('click', console.log(cachorro));
