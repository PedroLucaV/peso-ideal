function calc(){
    let msg = document.getElementById("res")
    let alt1 = document.getElementById("alt")

    if (alt1.value.length == 0 || alt1.value > 2.20 || alt1.value < 0.60){
        window.alert("[ERRO!]-NÃO FOI POSSIVEL CALCULAR OS VALORES RECEBIDOS -\nDigite uma altura entre 2.20 e 0.60!")
    }else{
        let fsex = document.getElementsByName('sex')
        let alt = Number(alt1.value)
        let peso = 0
        let genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            peso = 22 * (Math.pow(alt, 2))
            peso = peso.toFixed(2)
        }else if (fsex[1].checked){
            genero = 'Mulher'
            peso = 21 * (Math.pow(alt, 2))
            peso = peso.toFixed(2)
        }
        msg.innerHTML = `Seu peso ideal sendo ${genero} com altura de ${alt.toFixed(2)}m é de: ${peso}kg!`
    }
}
