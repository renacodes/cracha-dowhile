
//função: agrupa comandos para serem chamados em uma linha só
//funções têm que ser seguidas de () e os comandos estão dentro das {}
//funções precisam ser chamadas para serem executadas
//não é necessário usar let e const para definir uma variável como parâmetro de função

//não se usa = para definir valor dentro do objeto, se usa :, pois o objeto já é uma variável
const socialLinks = {
    github: "renacodes",
    instagram: "lunarilustracao",
    twitter: "Funeralprime",
    facebook: "phantom.antlers"
};

function replaceSocialLinks() {
    //for: loop que continua até encontrar uma instrução para parar
    // li of social.children: encontra todos os elementos li filhos do elemento com a id 'social'
    //e repete o loop para cada um dos filhos
    //valor da const muda a cada iteração do for
    for (let li of social.children) {
        //guarda a classe de cada <li> numa variável
        const socialMedia = li.getAttribute("class");
        //li.children = elementos filhos de <li>;
        //[0] = pensa em <li> como uma matriz. [0] pega o primeiro filho
        //.href: pega o conteúdo de .href do primeiro filho de cada <li>
        li.children[0].href = `https://${socialMedia}.com/${socialLinks[socialMedia]}`;
        //colchetes mostramm que é a posição em um objeto
        //pesquisar template string; ` mostra que no meio da string tem uma variável
        //ou outro dado

    }
}

replaceSocialLinks();
//função nova para usar a api do github
function fetchGitHubInfo() {
    const url = `https://api.github.com/users/${socialLinks.github}`
    //função fetch pega um valor de alguma propriedade do JSON da api
    fetch(url)
    .then(response => response.json())
    .then(data => {
        username.textContent = data.name
        userBio.textContent = data.bio
        avatar.src = data.avatar_url
        githubProfile.href = data.html_url
        userLogin.textContent = "@"+ data.login
     })
    //promise: caso a função funcione, executa then e armazena outra informação no then
    //then: similar ao faca do portugol
    // fetch não sabe que os dados da api são json. precisa converter a resposta em um json
}
fetchGitHubInfo();




//////////////////////////////////////////////////////
//=> Arrow Function
//Forma de contrair/resumir uma função
//e colocar uma função dentro de uma função anônima como argumento
//exemplo:
//function nomeDaFuncao(argumentos){} se torna:
// argumento => {} (função anônima, pois só tem argumento. por isso não pode ser chamada pelo nome da função depois)
//(argumento1, argumento2) => {} para dois argumentos
//função vazia: ()=>{}