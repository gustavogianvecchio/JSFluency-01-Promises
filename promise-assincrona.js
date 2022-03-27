const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')
/*
- buscamos a referência da imagem no DOM, e;
- console.log(dogImg) - verificamos no console se recebemos a referência do elemento do DOM */

/* o método fetch¹ faz uma requisição(request) http e traz os dados da url que especificamos como argumento */

// console.log(fetch(url))

/* olhando na aba network do browser, e clicando na requisição random, veremos na aba preview, que ela retorna um objeto com as propriedade message e status,
portanto o método fetch retorna uma promise */

/* olhando no console, veremos que a Promise está com o status pendente(pending), que indica que a operação dessa promisse não foi 
concluída com sucesso nem falhou, e é somente seu estado inicial - e olhando dentro do prototype vemos os métodos then e catch */

fetch(url)
    .then(dogData => {
        if(!dogData.ok){ /* o .ok retorna um boolean indicando se o httpStatusCode desta respota obtida está entre 200 e 299.
        - se estiver, significa que a requisição foi bem sucedida;
        - se não estiver, que é o que estamos verificando com a negação dela !dogData.ok, vamos especificar um erro: */
            throw new Error(`HTTP error, status ${dogData.status}`) //throw²
        }
        /* console.log(dogData) - aqui podemos observar no console que a resposta da requisição foi um objeto response. 
        Esse tipo de objeto é obtido como retorno de uma operação que envolve uma API.
        Agora para obtermos as propriedades do Objeto (message e status), precisamos "Parsear"³ o texto do Body desta 
        resposta como JSON, e para fazer isso, dentro do then podemos declarar um return que retornará esse objeto dogData.json()  */
        return dogData.json() /* e como o retorno de um then é uma nova Promisse, podemos encadear outro then, recebendo esse return como 
        parâmetro, e assim sequencialmente se necessário */
    })
    
    .then(({ message }) => { /* desestruturamos essa Promise do then anterior para pegarmos somente a propriedade que queremos, no caso, message */
        /* console.log(message) - então passamos o parâmetro dentro do console log somente para ver se a url da imagem foi realmente obtida. */
        dogImg.setAttribute('src', message) /* então é setar o atributo src e indicar qual parâmento deve receber, no caso, message. */
    })
    .catch(error => {
        alert(error.message)
    }) /* lançando o método catch, que recebe uma função () => {}, que recebe como parâmetro o error (lançado no if do then). Dentro da função especificamos 
    a menssagem do erro.
    Se quisermos verificar o tratamento de erro funcionando, removemos a negação !dogData.ok e podemos observar o erro no alert (HTTP error, status 200) */

    /* OBS.¹:
    O coração do Fetch são as abstrações da Interface do HTTP Request, Response, Headers (en-US), e Body payloads, juntamente com 
    global fetch (en-US) método para iniciar requisições de recursos assíncronos. Como os componentes principais do HTTP são 
    abstraidos como objetos de JavaScript, torna-se fácil APIs fazer uso das funcionalidades.
    Service Workers é um exemplo de uma API que faz um grande uso de Fecth.
    Fetch leva a assincronicidade um passo além. A API é completamente baseada em Promise. */

    /* OBS.²:
    A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai 
    parar (as instruções após o throw não serão executadas), e o controle será passado para o primeiro bloco catch na 
    pilha de chamadas. Se nenhum bloco catch existe entre as funções "chamadoras", o programa vai terminar. */

    /* OBS.³:
    O ato de "parsear" um arquivo, nada mais é do que "tranformar" do tipo A para o tipo B. */
