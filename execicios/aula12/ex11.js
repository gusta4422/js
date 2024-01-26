var idade = 37
console.log(`Você tem anos ${idade}.`)
if (idade < 16 || idade > 65) {
    console.log('Não vota')
} else if (idade < 18) {
         console.log('Voto opcional')
    } else{
        console.log('Voto obrigatorio')
    }
