function verificaChute(chute) {
    // Transforma em numero inteiro
    const numero = +chute

    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return // Retorna e continua a execução da validação
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido: O chute deve ser entre ${menorValor} e ${maiorValor}</div>    
        `
        return // Retorna e continua a execução da validação
    }

    if (numero === numeroSecreto) {
        // Redesenha a tela ou seja reseta a tela
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era <span>${numeroSecreto}</span></h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>
            O número secreto é <span>menor</span>
            <i class="fa-solid fa-arrow-down"></i>
        </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>
            O número secreto é <span>maior</span>
            <i class="fa-solid fa-arrow-up"></i>
        </div>
        `
    }
}

// Verifica se é um valor numerico
function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

// Verifica se o chute é > ou <
function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

// Regarrega a pág assim que clicar no botão
document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})