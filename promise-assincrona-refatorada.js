const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')

/* para refatorar o código deixando-o mais limpo e legível vamos desacoplar as funções*/

/* fetch(url)
    .then(dogData => {
        if(!dogData.ok){ 
            throw new Error(`HTTP error, status ${dogData.status}`) 
        }
        return dogData.json() 
    })
    .then(({ message }) => { 
        dogImg.setAttribute('src', message)
    })
    .catch(error => {
        alert(error.message)
    }) */

/* Vamos desacoplar a PRIMEIRA função responsável por validar o status e retornar a mensagem de erro ou obter o response do objeto parseado ... */

const validateHTTPStatus = dogData => {
    if(!dogData.ok){ 
        throw new Error(`HTTP error, status ${dogData.status}`) 
    }
    return dogData.json() 
}

/* ... então vamos desacoplar a SEGUNDA função responsavel por desestruturar as propriedades e pegarmos o que queremos, e atribuirmos à 
DOM passando os parâmetros do atributo que quero modificar e o valor da propriedade que quero inserir neste atributo ('src', message) - a chamaremos de... */

const setDogImage = ({ message: url }) => { /* aqui para deixar mais legível vamos nomear a propriedade como url e 
ajustar o segundo parâmetro do dogImg.setAttribute() abaixo. */
    dogImg.setAttribute('src', url)
}

/* ... e a TERCEIRA função responsável por exibir a mensagem em caso de erro. */

const handleRequestError = error => {
    alert(error.message)
}

fetch(url)
    .then(validateHTTPStatus)
    .then(setDogImage)
    .catch(handleRequestError)
