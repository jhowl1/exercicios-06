const exercicio01 = document.querySelector("#ex001")
const exercicio02 = document.querySelector("#ex002")
const exercicio03 = document.querySelector("#ex003")
const exercicio04 = document.querySelector("#ex004")
const exercicio05 = document.querySelector("#ex005")
const exercicio06 = document.querySelector("#ex006")
const exercicio07 = document.querySelector("#ex007")
const exercicio08 = document.querySelector("#ex008")
const exercicio09 = document.querySelector("#ex009")
const exercicio10 = document.querySelector("#ex010")
const exercicio11 = document.querySelector("#ex011")
const exercicio12 = document.querySelector("#ex012")
const exercicio13 = document.querySelector("#ex013")
const exercicio14 = document.querySelector("#ex014")
const exercicio15 = document.querySelector("#ex015")
const res = document.querySelector(".res")

function clearDiv() {
    res.innerHTML = ""
}

exercicio01.addEventListener("click", () => {
    /* Faça um programa que leia 5 números inteiros e exiba-os na ordem inversa em que foram digitados.*/
    clearDiv()
    let numeros = [];

    // Lê 5 números inteiros
    for (let i = 0; i < 5; i++) {
        let num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));

        // Verifica se é um número válido
        if (isNaN(num)) {
            alert("Entrada inválida! Tente novamente.");
            i--; // repete a leitura
        } else {
            numeros.push(num);
        }
    }

    // Exibe os números na ordem inversa
    res.innerHTML += "Números na ordem inversa: " + "<br>";
    for (let i = numeros.length - 1; i >= 0; i--) {
        res.innerHTML += numeros[i] + "<br>";
    }
})


exercicio02.addEventListener("click", () => {
    /* Escreva um programa que leia 10 números inteiros e exiba a soma deles. */
    clearDiv()
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        // Verifica se é um número válido
        if (isNaN(num)) {
            alert("Entrada inválida! Por favor, digite um número inteiro.");
            i--; // repete a leitura
        } else {
            soma += num;
        }
    }

    res.innerHTML += `A soma dos 10 números é: ${soma}`;
})


exercicio03.addEventListener("click", () => {
    /* Crie um programa que leia 7 números inteiros e exiba a média aritmética dos valores lidos. */
    clearDiv()
    let soma = 0;
    const totalNumeros = 7;

    for (let i = 1; i <= totalNumeros; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        if (isNaN(num)) {
            alert("Entrada inválida! Digite um número inteiro.");
            i--;
        } else {
            soma += num;
        }
    }

    let media = soma / totalNumeros;

    res.innerHTML += `A média aritmética dos ${totalNumeros} números é: ${media}`;
})


exercicio04.addEventListener("click", () => {
    /** Faça um programa que leia 5 números inteiros e exiba quantos deles são pares. */
    clearDiv()
    let pares = 0;

    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        if (isNaN(num)) {
            alert("Entrada inválida! Digite um número inteiro.");
            i--;
        } else {
            if (num % 2 === 0) {
                pares++;
            }
        }
    }

    res.innerHTML += `Quantidade de números pares: ${pares}`;
})


exercicio05.addEventListener("click", () => {
    /** Escreva um programa que leia 5 números inteiros e exiba o maior e o menor valor digitado. */
    clearDiv()
    let maior = null;
    let menor = null;

    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        if (isNaN(num)) {
            alert("Entrada inválida! Digite um número inteiro.");
            i--;
        } else {
            if (maior === null || num > maior) {
                maior = num;
            }
            if (menor === null || num < menor) {
                menor = num;
            }
        }
    }

    res.innerHTML += `Maior valor digitado: ${maior}` + "<br>";
    res.innerHTML += `Menor valor digitado: ${menor}`;
})


exercicio06.addEventListener("click", () => {
    /** Crie um programa que leia 10 números inteiros e exiba-os em ordem crescente. */
    clearDiv()
    let numeros = [];

    for (let i = 0; i < 10; i++) {
        numeros.push(parseInt(prompt(`Digite o ${i + 1}º número:`)));
    }

    numeros.sort((a, b) => a - b);

    res.innerHTML += "Números em ordem crescente:" + "<br>";
    for (let n of numeros) {
        res.innerHTML += n + "<br>";
    }
})


exercicio07.addEventListener("click", () => {
    /** Faça um programa que leia 10 números inteiros e exiba quantos deles são positivos. */
    clearDiv()
    let positivos = 0;

    for (let i = 1; i <= 10; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        if (isNaN(num)) {
            alert("Entrada inválida! Digite um número inteiro.");
            i--;
        } else {
            if (num > 0) {
                positivos++;
            }
        }
    }

    res.innerHTML += `Quantidade de números positivos: ${positivos}`;
})


exercicio08.addEventListener("click", () => {
    /** Escreva um programa que leia 5 números inteiros e calcule a média dos valores pares e a média dos valores ímpares. */
    clearDiv()
    let somaPares = 0;
    let somaImpares = 0;
    let qtdPares = 0;
    let qtdImpares = 0;

    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        if (isNaN(num)) {
            alert("Entrada inválida! Digite um número inteiro.");
            i--;
        } else {
            if (num % 2 === 0) {
                somaPares += num;
                qtdPares++;
            } else {
                somaImpares += num;
                qtdImpares++;
            }
        }
    }

    let mediaPares = qtdPares > 0 ? somaPares / qtdPares : 0;
    let mediaImpares = qtdImpares > 0 ? somaImpares / qtdImpares : 0;

    res.innerHTML += `Média dos números pares: ${mediaPares}` + "<br>";
    res.innerHTML += `Média dos números ímpares: ${mediaImpares}`;
})


exercicio09.addEventListener("click", () => {
    /** Crie um programa que leia 10 números inteiros e exiba a quantidade de números positivos e a quantidade de números negativos. */
    clearDiv()
    let positivos = 0;
    let negativos = 0;

    for (let i = 1; i <= 10; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        if (isNaN(num)) {
            alert("Entrada inválida! Digite um número inteiro.");
            i--;
        } else {
            if (num > 0) {
                positivos++;
            } else if (num < 0) {
                negativos++;
            }

        }
    }

    res.innerHTML += `Quantidade de números positivos: ${positivos}` + "<br>";
    res.innerHTML += `Quantidade de números negativos: ${negativos}`;
})


exercicio10.addEventListener("click", () => {
    /** Faça um programa que leia 5 números inteiros e verifique se algum deles é igual a zero. */
    clearDiv()
    let temZero = false;

    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        if (isNaN(num)) {
            alert("Entrada inválida! Digite um número inteiro.");
            i--;
        } else {
            if (num === 0) {
                temZero = true;
            }
        }
    }

    if (temZero) {
        res.innerHTML += "Pelo menos um dos números digitados é igual a zero.";
    } else {
        res.innerHTML += "Nenhum dos números digitados é igual a zero.";
    }
})


exercicio11.addEventListener("click", () => {
    /** Escreva um programa que leia 10 números inteiros e exiba a soma dos valores positivos e a soma dos valores negativos. */
    clearDiv()
    let somaPositivos = 0;
    let somaNegativos = 0;

    for (let i = 1; i <= 10; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        if (isNaN(num)) {
            alert("Entrada inválida! Digite um número inteiro.");
            i--;
        } else {
            if (num > 0) {
                somaPositivos += num;
            } else if (num < 0) {
                somaNegativos += num;
            }

        }
    }

    res.innerHTML += `Soma dos valores positivos: ${somaPositivos}` + "<br>";
    res.innerHTML += `Soma dos valores negativos: ${somaNegativos}`;
})


exercicio12.addEventListener("click", () => {
    /** Crie um programa que leia 5 números inteiros e exiba-os em ordem decrescente. */
    clearDiv()
    let numeros = [];

    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        if (isNaN(num)) {
            alert("Entrada inválida! Digite um número inteiro.");
            i--;
        } else {
            numeros.push(num);
        }
    }

    numeros.sort((a, b) => b - a);

    res.innerHTML += "Números em ordem decrescente: ";
    res.innerHTML += numeros;
})


exercicio13.addEventListener("click", () => {
    /** Faça um programa que leia 10 números inteiros e exiba quantos deles estão no intervalo de 10 a 50. */
    clearDiv()
    let dentroIntervalo = 0;

    for (let i = 1; i <= 10; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        if (isNaN(num)) {
            alert("Entrada inválida! Digite um número inteiro.");
            i--;
        } else {
            if (num >= 10 && num <= 50) {
                dentroIntervalo++;
            }
        }
    }

    res.innerHTML += `Quantidade de números entre 10 e 50: ${dentroIntervalo}`;
})


exercicio14.addEventListener("click", () => {
    /** Escreva um programa que leia 7 números inteiros e exiba apenas os números pares. */
    clearDiv()
    let pares = [];

    for (let i = 1; i <= 7; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número inteiro:`));

        if (isNaN(num)) {
            alert("Entrada inválida! Digite um número inteiro.");
            i--;
        } else {
            if (num % 2 === 0) {
                pares.push(num);
            }
        }
    }

    if (pares.length > 0) {
        res.innerHTML += "Números pares digitados: ";
        res.innerHTML += pares;
    } else {
        res.innerHTML += "Nenhum número par foi digitado. ";
    }
})


exercicio15.addEventListener("click", () => {
    /** Crie um programa que leia 5 nomes e exiba-os em ordem alfabética. */
    clearDiv()
    let nomes = [];

    for (let i = 1; i <= 5; i++) {
        let nome = prompt(`Digite o ${i}º nome:`);

        if (!nome) {
            alert("Nome inválido! Digite novamente.");
            i--; 
        } else {
            nomes.push(nome.trim());
        }
    }

    nomes.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }));

    res.innerHTML += "Nomes em ordem alfabética: " + "<br>";
    res.innerHTML += nomes;
})