/*
quando clicar no pokémon da listagem temos que esconder o cartao aberto e mostrar o cartao escondido correspondente ao selecionado.

trabalhar com dois elementos:
listagem;
cartão do pokémon.

criar duas variáveis JS para trabalhar com os elementos da tela.

trabalhar com um evento de clique feito pelo usuário na listagem de pokémons.

remover a classe abrir só do cartao que está aberto;
ao clicar em pokémon da lista pegamos o id do pokémon pra saber qual cartao mostrar;
remover a class active que marca o pokémon selecionado;
add a class active no item selecionado da lista.
*/

//criar duas variáveis no JS para trabalhar com os elementos de tela
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemoncartao = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
  
  pokemon.addEventListener('click', () => {
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    const idPokemonSelecionado = pokemon.attributes.id.value

    const idCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
    const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir)
    cartaoPokemonParaAbrir.classList.add('aberto')

    
    const pokemonAtivoNaLista = document.querySelector('.ativo')
    pokemonAtivoNaLista.classList.remove('ativo')

    const pokemonSelecionadoNaLista = document.getElementById(idPokemonSelecionado)
    pokemonSelecionadoNaLista.classList.add("ativo")
  })
})