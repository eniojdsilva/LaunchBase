const programador = {
    nome: "Enio",
    idade: 27,

    tecnologia: [
        {
          nome: 'C++',
          especialidade: 'Desktop'
        },
        {
          nome: 'Python',
          especialidade: 'Data Science'
        },
        {
          nome: 'Javscript',
          especialidade: 'Web/Mobile'
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia[2].nome} com especialidade em ${programador.tecnologia[2].especialidade}`)