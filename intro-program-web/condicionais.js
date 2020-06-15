const aluno01 = 'Enio'
const notaAluno01 = 5.8

const aluno02 = 'Silva'
const notaAluno02 = 3

const aluno03 = 'Rodrigo'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3


// Se a média for maior que 5, parabenizar a turma.
if (media > 6) {
    console.log(`A média foi de ${media}. Parabéns`)
} else {
    console.log(`A média foi de ${media} e foi menor que 6`)
}