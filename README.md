# JSFluency-01-Promises

## Estudo de JavaScript Puro: Promises - Uma introdução prática e compreensiva

Uma `promise` é um objeto que representa o sucesso ou a falha de uma operação assíncrona.

E o que isso quer dizer:

A maioria do código JS é executado em uma única thread:

`Thread é um pequeno programa que trabalha como um subsistema, sendo uma forma de um processo se autodividir em duas ou mais tarefas. É o termo em inglês para Linha ou Encadeamento de Execução.`

Isso significa que o código só pode fazer uma única coisa de cada vez. A maioria do código JS que escrevemos é executado de cima para baixo, passo a passo, de forma síncrona.

É esse sincronismo que possibilita que quando invoquemos duas funções sequecialmente, a execução da segunda função só seja realizada depois de finalizada a primeira, independente do tamanho do código dentro dos blocos de cada função.

Então, o código síncrono espera uma ação ser finalizada, antes de partir para a próxima ação.

Mas JS também executa códigos de forma assíncrona.

O setTimeout(() => {}, miliseconds) é um exemplo de função assíncrona
, por exemplo, e só executa a função depois da quantidade de milissegundos que especificarmos nele, mas não trava a execução do código subsequente. (veja o arquivo assincrono.js)

`Uma das píncipais característica do código assíncrono é que ele pode iniciar um processo agora e finalizar posteriormente, sem interromper o fluxo de execussões.`

Um outro exemplo de código assíncrono é uma requisição (`Requests`). Você quer pegar alguns dados, por exemplo, usando uma API do YouTube. Para isso você precisará fazer uma request, que é assíncrono, pois essa operação será passada para uma thread separada, e o código que você escreveu continuará executando as próximas funções que ele tem que executar.

### Mas o JS não é síncrono e executado em uma única thread?

Todo o restante do código continuará sendo executado sincronamente, mas Requests são entregues para uma thread separada que é executada fora da thread do JS.

- Assíncrono:
    - executa a sequência do código | quando encontra um request, envia para uma thread separada fora da mainThread do JS, que buscará os dados | continua executando a sequência do código na mainThread do JS | e quando os dados são obtidos, a função de callback do request é adicionada no final da fila de funções

- Síncrono:
    - executa a sequência do código | quando encontra um request síncrono, aguarda esses dados serem encontrados e a resposta do request ser obtida, bloqueando a sequência do código, que só continuará quando o request for resolvido.

Agora que já sabemos o que é uma operação assíncrono, vamos falar de `PROMISES`, porque uma promisse pode envolver/encapsular operações assíncronas.

As três vantagens que merecem destaque ao usar promises são:

- ganhamos mais controle e legibilidade no fluxo de lógicas assíncronas;
- reduzimos o acoplamento entre funções de callback;
- temos mais previsibilidade e detalhamento no tratamento de erros.

### Como criamos uma promise?

Na maioria da vezes vamos consumir uma promise já criada por alguém ou por uma biblioteca de terceiro. Mas vamos ver no arquivo promise como isso funciona por "debaixo dos panos" (veja o arquivo promises.js).

