// Criar um programa que calcula a média
// das turmas de alunos e envia 
// mensagem do cálculo da media.

const alunosDaTurmaA = [
    {
        nome:"Mayk",
        nota: 9.8
    },
    {
        nome:"Diego",
        nota: 10
    },
    {
        nome:"Fulano",
        nota: 2
    },
    {
        nome:"Paulo",
        nota: 8
    }
]

const alunosDaTurmaB = [
    {
        nome: "Enio",
        nota: 10
    },
    {
        nome: "Rodrigo",
        nota: 10
    },
    {
        nome: "Lucas",
        nota: 10
    }
]


function calculaMedia(alunos) {
    let soma = 0;

    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media) {

    // Se a média for maior que 5, parabenizar a turma
    if (media > 5){
        console.log(`A media foi de ${media}. Parabéns`)
    }else{
        console.log(`A média é menor que 5`)
    }

}


enviaMensagem(media1)
enviaMensagem(media2)


