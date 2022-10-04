const elementoChute = document.getElementById('chute')

// Caso for necessario usar implementações futuras e garantir que o projeto continue funcionando 
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

// Instancia necessaria
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

// Exibindo palavra falada
// Pega tudo que está dentro de result
recognition.addEventListener('result', onSpeak)

// Exibe tudo que é falado capturado atraves do 'e'(evento)
function onSpeak(e) {
    // Acessa a propriedade “results”, depois as duas arrays de índice “0” e por fim o “transcript” que é onde fica o conteúdo falado.
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaChute(chute)
}

// Exibe o valor que o usuario disse na tela
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

// Faz com que o reconhecimento de voz continue até o usuario conseguir acertar
recognition.addEventListener('end', () => recognition.start())