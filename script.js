import { PALAVRAS_RUINS} from "./palavrasruins";

 const botaoMostraPalavras = document.querySelector ('#botao-palavrachave');

botaoMostraPalavras.addEventListener ('click' , mostraPalavrasChave);

function mostraPalavrasChave() {
const texto = document.querySelector('entrada-de-texto').value;
const campoResultado =document.querySelector('#resultado-palavrachave');
const palavrasChaves =preocessaTexto(texto);

campoResultado.textContent = palavrasChaves.join(",");
}