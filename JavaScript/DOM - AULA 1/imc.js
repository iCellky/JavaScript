const nome = document.querySelector('#nome')

const altura = document.querySelector('#altura')

const peso = document.querySelector('#peso')

const calcular = document.querySelector('#calcular')

const result = document.querySelector('#resultado')

function imc(){
    if(nome.value !== ''){
        const valorimc = (peso.value / (altura.value**2))
        
         if(valorimc <= 18){
            resultado.textContent = `${nome.value}, Você possui ${valorimc} de IMC. Você esta abaixo do peso`
         }else if(valorimc > 18 && valorimc <= 25){
            resultado.textContent = `${nome.value}, Você possui ${valorimc} de IMC, Você esta no peso ideal`
         }else{
            resultado.textContent = `${nome.value}, Você possui ${valorimc} de IMC, Você esta acima do peso`
         }

    }else{
        alert('preencha o campo vazio')
    }
}

calcular.addEventListener('click', imc)