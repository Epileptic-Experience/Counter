
let passangers = 0

function incrementPassanger() {
    passangers = passangers + 1
    document.getElementById("count-el").innerText = passangers
    console.log(passangers)
}


function reset() {
    passangers = passangers - passangers
    document.getElementById("count-el").innerText = passangers
    console.log(passangers)
}


function save() {
    console.log(passangers)
}