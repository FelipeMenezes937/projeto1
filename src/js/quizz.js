

const perguntas = [
    {
        pergunta:"pergunta numero 1? \n opcao A) \n opcao B) \n opcao C)\n",
        resposta:"A"
    },
    {
        pergunta:"pergunta numero 2? \n opcao A) \n opcao B) \n opcao C)\n",
        resposta:"B"
    },
    {
        pergunta:"pergunta numero 3? \n opcao A) \n opcao B) \n opcao C)\n",
        resposta:"C"
    }
]
let acertos = 0

// repeticao para verificar as perguntas

for(let i = 0; i < perguntas.length; i++){
    const respostaUsuario = prompt(perguntas[i].pergunta);
    if (respostaUsuario.toLowerCase() === perguntas[i].resposta.toLocaleLowerCase()){
        acertos++
    }
}
document.getElementById("msg").innerHTML=(`você acertou ${acertos} de ${perguntas.length}`)