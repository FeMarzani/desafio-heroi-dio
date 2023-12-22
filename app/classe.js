const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "atacou";
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
};

rl.question('Digite o nome do herói: ', (nome) => {

  rl.question('Digite a idade do herói: ', (idade) => {

    rl.question('Digite o tipo do herói: ', (tipo) => {

      let heroiVerifica = new Heroi(nome,idade,tipo);
      heroiVerifica.atacar();

    })
  })
});

