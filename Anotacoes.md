## **Criando arquivos direto no terminal bash**

`touch index.html style.scss` -> cria o arquivo html e o scss

#

## **Atalho para criar base do css**

`!` -> cria a base do html

#

## **Reset css**

- Pesquisar no navegador 'reset css cdn'
- https://cdnjs.com/libraries/meyer-reset
- Copiar o link em laranja 'Copy Link Tag'

#

## **Atalho para Linkar arquivo css**

`link:css`

#

## **Criando div com id e class**

`#chute.mensagem`

#

## **Linkando font awesome**

- Pesquisar no navegador 'font awesome cdn'
- https://cdnjs.com/libraries/font-awesome
- Copiar o link em laranja 'Copy Link Tag'

#

## **Gerando numero aleatorio**

Atráves da função `Math.random()`

<code>

    parseInt(Math.random() * maiorValor + 1)
</code>

#

## **Capturando valor com o WEB SPEECH API**

https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API

**Como funciona a Web Speech API**

A `Web Speech API` foi lançada no final de 2012, e possibilita que as pessoas desenvolvedoras da Web forneçam recursos de entrada de fala e saída de texto para fala em um navegador da Web. Normalmente, esses recursos não estão disponíveis ao usar o software padrão de reconhecimento de fala ou leitor de tela.

Esta API cuida da privacidade dos usuários. Então, antes de permitir que o site acesse a voz via microfone, o usuário deve conceder permissão declaradamente. O curioso é que a solicitação de permissão é a mesma da `API getUserMedia`, embora não precise da webcam. Se a página que executa essa API usa o `protocolo HTTPS`, o navegador solicita a permissão apenas uma vez, caso contrário, sempre vai solicitar quando um novo processo é iniciado.

Outro recurso interessante da Web Speech API é que ela permite especificar um objeto gramatical. Você pode pensar nisso como um conjunto de regras para definir um idioma. A vantagem de usar uma gramática é que ela geralmente leva a melhores resultados devido à restrição das possibilidades da linguagem.

A Web Speech API define uma interface complexa, chamada SpeechRecognition e [você poder ler mais sobre ela aqui](https://wicg.github.io/speech-api/#speechreco-section).

Também recomendo a leitura [desse artigo](https://www.sitepoint.com/introducing-web-speech-api/) para se aprofundar mais ainda no assunto.

#

Caso for necessario usar implementações futuras e garantir que o projeto continue funcionando usamos:

<code>

    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
</code>

Mais antes é necessario implementa a instancia necessaria para começar a funcionar:

<code>

    const recognition = new SpeechRecognition();
</code>

Para que seja reconhecido o seu idioma devemos informar:

<code>

    recognition.lang = 'pt-Br'
</code>

E para iniciar o reconhecimento aplicamos:

<code>

    recognition.start()
</code>

Depois de implementado dessa linhas de código o navegador já vai começar a reconhecer a voz do usuario

#

Fazer com que o reconhecimento de voz continue até o usuario conseguir acertar

<code>

    recognition.addEventListener('end', () => recognition.start())
</code>

#

## **Recarregar a página**

<code>

    document.body.addEventListener('click', e => {
        if (e.target.id == 'jogar-novamente') {
            window.location.reload()
        }
    })
</code>

Valida se o botão clicado(`e.target.id`) é referente ao id(`'jogar-novamente'`) e recarrega a página(`window.location.reload()`)

`window.location.reload` em JS, `window` representa a janela aberta no navegador. Já `location`, nessa linguagem, contém informações sobre a URL atual.Por último, `reload()` é usado para recarregar a página.