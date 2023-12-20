const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do Herói: ', (nameInput) => {
    rl.question('Digite a XP desse Herói: ', (xpInput) => {

        if (xpInput < 1000) {
            let nivel = 'Ferro'
            console.log(`O Herói de nome ${nameInput} está no nível de ${nivel}`)
        } else if (xpInput < 2000) {
            let nivel = 'Bronze'
            console.log(`O Herói de nome ${nameInput} está no nível de ${nivel}`)
        } else if (xpInput < 5000) {
            let nivel = 'Prata'
            console.log(`O Herói de nome ${nameInput} está no nível de ${nivel}`)
        } else if (xpInput < 7000) {
            let nivel = 'Ouro'
            console.log(`O Herói de nome ${nameInput} está no nível de ${nivel}`)
        } else if (xpInput < 8000) {
            let nivel = 'Platina'
            console.log(`O Herói de nome ${nameInput} está no nível de ${nivel}`)
        } else if (xpInput < 9000) {
            let nivel = 'Ascendente'
            console.log(`O Herói de nome ${nameInput} está no nível de ${nivel}`)
        } else if (xpInput < 10000) {
            let nivel = 'Imortal'
            console.log(`O Herói de nome ${nameInput} está no nível de ${nivel}`)
        } else {
            let nivel = 'Radiante'
            console.log(`O Herói de nome ${nameInput} está no nível de ${nivel}`)
        }

        rl.close();
    })
});