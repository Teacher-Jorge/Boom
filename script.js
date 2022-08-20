let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')
let btn10 = document.getElementById('btn10')
let btn11 = document.getElementById('btn11')
let btn12 = document.getElementById('btn12')
let btn13 = document.getElementById('btn13')
let btn14 = document.getElementById('btn14')

let slot1 = document.getElementById('slot1')
let slot2 = document.getElementById('slot2')
let slot3 = document.getElementById('slot3')
let slot4 = document.getElementById('slot4')
let slot5 = document.getElementById('slot5')
let slot6 = document.getElementById('slot6')
let slot7 = document.getElementById('slot7')
let slot8 = document.getElementById('slot8')
let slot9 = document.getElementById('slot9')
let slot10 = document.getElementById('slot10')
let slot11 = document.getElementById('slot11')
let slot12 = document.getElementById('slot12')
let slot13 = document.getElementById('slot13')
let slot14 = document.getElementById('slot14')

let btnI = document.getElementById('btnI')
let btnAm = document.getElementById('btnAm')
let btnHappy = document.getElementById('btnHappy')

let score = document.getElementById('score-number')
let value = 0


btnI.addEventListener('click', function() {
    let audio = document.getElementById('congrats').play()
    let I = document.getElementById('I').innerHTML ='I'
    value++
    document.getElementById('score-number').innerHTML = value
    if (value >= 0) {
        score.style.color = 'lime'
    } else {
        score.style.color = 'red'
    }
    btnI.disabled = true
})

btnAm.addEventListener('click', function() {
    let audio = document.getElementById('congrats').play()
    let am = document.getElementById('am').innerHTML ='am'
    value++
    document.getElementById('score-number').innerHTML = value
    if (value >= 0) {
        score.style.color = 'lime'
    } else {
        score.style.color = 'red'
    }
    btnAm.disabled = true
})

btnHappy.addEventListener('click', function() {
    let audio = document.getElementById('congrats').play()
    let happy = document.getElementById('happy').innerHTML ='happy.'
    value++
    document.getElementById('score-number').innerHTML = value
    if (value >= 0) {
        score.style.color = 'lime'
    } else {
        score.style.color = 'red'
    }
    btnHappy.disabled = true
})

btn1.addEventListener('click', function() {
    this.remove()
    slot1.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
    
})

btn2.addEventListener('click', function() {
    this.remove()
    slot2.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }

})

btn3.addEventListener('click', function() {
    this.remove()
    slot3.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
})

btn4.addEventListener('click', function() {
    this.remove()
    slot4.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
})

btn5.addEventListener('click', function() {
    this.remove()
    slot5.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
})

btn6.addEventListener('click', function() {
    this.remove()
    slot6.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
})

btn7.addEventListener('click', function() {
    this.remove()
    slot7.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
})

btn8.addEventListener('click', function() {
    this.remove()
    slot8.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
})

btn9.addEventListener('click', function() {
    this.remove()
    slot9.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
})

btn10.addEventListener('click', function() {
    this.remove()
    slot10.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
})

btn11.addEventListener('click', function() {
    this.remove()
    slot11.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
})

btn12.addEventListener('click', function() {
    this.remove()
    slot12.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
})

btn13.addEventListener('click', function() {
    this.remove()
    slot13.classList.add('explosion')
    let audio = document.getElementById('blast').play()
    value--
    document.getElementById('score-number').innerHTML = value
    if (value <= 0) {
        score.style.color = 'red'
    } else {
        score.style.color = 'lime'
    }
})

