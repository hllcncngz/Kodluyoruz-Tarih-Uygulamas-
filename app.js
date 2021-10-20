let baslık = document.querySelector("#header")
const hours = document.querySelector("#h")
const minutes = document.querySelector("#m")
const seconds = document.querySelector("#s")
const days = document.querySelector("#g")
let name = prompt("Lütfen İsminizi Giriniz")

if(name== ''){
    alert("Lütfen Bir isim Giriniz")
    screen.style = "display:none"
}

function clock() {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    let day = date.getDay()
        if (day === 0) {
            day = 'Pazar'
        }
        else if (day === 1) {
            day = 'Pazartesi'
        }
        else if (day === 2) {
            day = 'Salı'
        }
        else if (day === 3) {
            day = 'Çarşamba'
        }
        else if (day === 4) {
            day = 'Perşembe'
        }
        else if (day === 5) {
            day = 'Cuma'
        }
        else if (day === 6) {
            day = 'Cumartesi'
        }

    hours.innerHTML = hour
    minutes.innerHTML = minute
    seconds.innerHTML = second
    days.innerHTML = day

}
let invertal = setInterval(clock, 1000);


baslık.innerHTML = `Merhaba, ${name}! Hoş Geldin!`

