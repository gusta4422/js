function contar() {
    var formInicio = window.document.getElementById('txti')
    var formFim = window.document.getElementById('txtf')
    var formPas = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (formInicio.value.length === 0 || formFim.value.length === 0 || formPas.value.length === 0) {
        res.innerHTML = `Impossível realizar a contagem!`
    } else {
        res.innerHTML = 'Contando:<br>'
        var i = Number(formInicio.value)
        var f = Number(formFim.value)
        var p = Number(formPas.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} ` 
            }
        } else { 
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    

}