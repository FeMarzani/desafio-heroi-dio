const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a quantidade de vitórias do herói: ', (vitoriasInput) => {

    rl.question('Digite a quantidade de derrotas do herói: ', (derrotasInput) => {
        
        function calculadoraRankeada(vitoriasInput, derrotasInput) {

            let saldoVitorias = vitoriasInput - derrotasInput;
            let nivel;

            if (saldoVitorias < 10) {
                nivel = 'Ferro';
            } else if (saldoVitorias < 20) {
                nivel = 'Bronze';
            } else if (saldoVitorias < 50) {
                nivel = 'Prata';
            } else if (saldoVitorias < 80) {
                nivel = 'Ouro';
            } else if (saldoVitorias < 90) {
                nivel = 'Diamante';
            } else if (saldoVitorias < 100) {
                nivel = 'Lendário';
            } else {
                nivel = Imortal;
            }

            return {saldoVitorias, nivel};
        };

        let {saldoVitorias, nivel} = calculadoraRankeada(vitoriasInput, derrotasInput);

        console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);
        
    });
});