/* Promisse é uma função construtora que precisa receber uma função como argumento:

- e essa função vai envolver a operação assíncrona que criarmos;
- quando criamos uma Promisse, a função (() => {}) que passamos como argumento vai receber dois parâmetros (resolve, reject);
- esses parâmetros podem ter outro nome, mas são uma conveção, portanto é recomendado que a sigamos;
- resolve e reject são duas funções que podem ser invocadas dentro dessa função que acabamos de criar; 
- a resolve deve ser invocada quando a operação assíncrona for bem sucedida;
- e a reject quando a operação falhar */

const aPromise = new Promise((resolve, reject) => {
    const aNumber = 37
    // resolve(aNumber)
    /* ambos, resolve e reject, receberão um valor que fornecerão para os métodos then e catch respectivamente, resolve fornecerá um valor como parâmetro na função
    ((valor) => {}) passado para o then, e reject para o catch. */
    reject(aNumber)
})

/* com a Promise criada, em algum outro lugar do código consumiremos ela, então abaixo
vamos envocar o método then, que recebe uma função como argumento (() => {}) e o valor do resolve como parâmetro dessa função:

- o método then é resposável por receber a resposta de sucesso da Promise;
- aPromise.then(valor => {}) */

/* aPromise.then(value => {
    console.log(value) // e vamos printar esse valor no console.
}) */

/* RESUMINDO:
- criamos uma Promise que envolve uma função recebendo como parâmetros as funções resolve e reject;
- configuramos um valor de resposta para quando a resolução da Promise é bem sucedida ou para quando é mal sucedida; e
- através do retorno do resolve passamos o valor para o parâmetro da função do then, ou do retorno do reject para o catch */

aPromise
    .then(value => value)
    .then(value => { // ¹
        console.log(value)
    })
    .catch(rejectValue => { // ²
        console.log({rejectValue}) /* passando dentro de um objeto somente para vermos que o valor não é o recebido pelo then (resolve), mas pelo reject */
    }) 

/* OBS.¹:
- uma característica forte de uma Promise é que ela pode ser encadeada, ou seja podemos compor um outro then no final do then anterior;
- o segundo then recebe uma função (() => {}) como argumento, e essa função vai receber como parâmeto o valor que o then anterior retorna.
- só é possível fazermos esse encadeamento porque o método then sempre retorna uma nova Promise, que por usa vez possui o metódo then disponível
por padrão, ou seja, um then pode ser encadeado no outro quantas vezes forem necessárias */

/* OBS.²:
- o método catch é outro metódo que podemos encadear dentro do then, e que também recebe uma função () => {} como argumento,
onde vamos cuidar do que vai acontecer quando obtivermos uma falha como resposta.

### Portanto o método catch somente será executado em DUAS situações:

PRIMEIRO:
- quando o método reject dentro da criação da Promise é invocado;
SEGUNDO: 
- quando o código dentro de algum then lançar um erro.
*/

/* INFO:
Acabamos de aprender a sintaxe de uma Promisse, como ela é criada e como podemos usá-la, mas o fizemos de forma síncrona.

Então agora faremos uma requisição (assíncrona) para uma API que traz uma imagem aleatória de um cachorro a cada request (veja o arquivo promise-assincrona.js) */
