const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
  "Eu quero, eu posso, eu consigo. Nada está fora do meu alcance, nada é impossível.",
  "Sei que a vida te reserva um futuro lindo!",
  "Você pode tudo, exceto desistir. Força, continue seu caminho!",
  "Nunca duvide porque sua força vem de Deus.",
  "Você está mais perto que imagina! Não perca o fôlego agora!",
  "Nada é impossível para quem tem ambição de vencer.",
  "Cada passo que você dá você fica mais perto do seu objetivo!",
  "Entre você e o seu objetivo só há um obstáculo: você! Confie no seu potencial e conquiste o seu lugar!",
  "Vá em frente! Você sabe que não pode parar agora!",
  "Onde a maioria vê um obstáculo, eu vejo um degrau para a minha ascensão.",
  "Sonhos florescem na vida de quem acredita neles.",
  "Se queres ser feliz amanhã, tenta hoje mesmo.",
  "Pense positivo e aja com decisão.",
  "Pode doer, pode demorar, mas se acreditar, vai conquistar!",
  "Sua luta não termina quando sentir cansaço, mas sim quando atingir o sucesso tão merecido.",
  "Precisamos ser fortes, precisamos ter coragem! Juntos, venceremos!",
  "A verdadeira derrota é nem sequer tentar.",
  "O seu coração irá levar você na direção certa sempre!",
  "Conquiste seus medos e mesmo o maior objetivo parecerá possível!"
]

function fazerPergunta() {
  if (inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  elementoResposta.style.opacity = 1;

  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)

}





