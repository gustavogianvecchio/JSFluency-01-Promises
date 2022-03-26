/* Promisse é uma função construtora que precisa receber uma função como argumento:
- e essa função vai envolver a operação assíncrona que criarmos;
- quando criamos uma Promisse essa função () => {} que passamos como argumento
vai receber dois parâmetros (resolve, reject);
- esses parâmetros podem ter outro nome, mas são uma conveção, portanto é recomendado que a sigamos;
- resolve e reject são duas funções que podem ser invocadas dentro dessa função que acabamos
de criar; 
- a resolve deve ser invocada quando a operação assíncrona for bem sucesida;
- e a reject quando a operação falhar */
const aPromise = new Promise((resolve, reject) => {
    const aNumber = 37
    /* ³ vamos comentar o resolve e invocar o reject 
    - que também receberá um valor, e esse valor também é recebido como parâmetro na função
    () => {} passada para o catch, vejamos */
    reject(aNumber) // resolve(aNumber)
    /* por exemplo, se especificarmos um valor como argumento da invocação do
    resolve, esse valor será recebido como parâmetro da função que passamos para a invocação do
    then¹ */
})

/* com a Promise criada, em algum outro lugar do código consumiremos ela, então abaixo: */

/* vamos envocar o método then, que também recebe uma função como argumento () => {}:
- o método then é resposável por receber a resposta de sucesso da promise;
- ¹ aPromise.then(valor recebido do resolve) */
/* aPromise.then(value => {
    console.log(value) // e vamos printar esse value no console.
}) */

/* RESUMINDO:
- criamos uma Promise que envolve uma função
- configurou a resposta para quando a resolução da promisse é bem sucedida; e
- através do resolve passou um valor para o parâmetro da função do then */

/* OBS.1:
- uma característica forte de uma promise é que ela pode ser encadeada, ou seja
podemos compor um outro then no final do then anterior;
- o segundo then recebe uma função () => {}, e essa função vai receber como 
parâmeto o valor que o then anterior retorna */

aPromise
    .then(value => value)
    .then(value => {
        console.log(value)
    })
    .catch(rejectValue => {
        console.log({rejectValue}) /* passando dentro de um objeto somente para vermos
        que o valor não é o recebido pelo then, e portanto pelo resolve */
    }) // ²

/* OBS.2:
- só é possível fazermos esse encadeamento porque o método then sempre retorna uma nova Promise, que por usa vez possui o metódo then disponível por padrão ou seja, um then pode ser encadeado no outro quantas vezes forem necessárias */

/* ² o método catch é outro metódo que podemos encadear dentro do then, e que também recebe uma função () => {} como argumento, onde vamos cuidar do que vai acontecer quando obtivermos uma falha como resposta.

Portanto o método catch somente será executado em DUAS situações:
PRIMEIRO:
- quando o método reject dentro da criação da promise é invocado;
SEGUNDO: 
- quando o código dentro de algum then lançar um erro.

Então vamos simular isso lá na Promise³ */

/* INFO:
Acabamos de aprender a sintaxe de uma promisse, como ela é criada e como podemos usá-la, mas o fizemos de forma síncrona.

Então agora faremos uma requisição para uma API que traz uma imagem aleatória de um cachorro a cada request (veja o arquivo promise-assincrona.js) */