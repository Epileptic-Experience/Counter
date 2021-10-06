
let passangers = 0

function incrementPassanger(){
    passangers = passangers + 1
    document.getElementById("count-el").innerText = passangers
    console.log(passangers)
}


function reset(){
    let reseted = 0
    document.getElementById("count-el").innerText = reseted
    console.log(reseted)
}


// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }


// let lap1 = 33
// let lap2 = 29
// let lap3 = 30

// function times() {
//     let totaltime = lap1 + lap2 + lap3
//     console.log(
//         totaltime
//     )
// }

// // una variable let dentro de una funcion puede ser llamada solo por la función
// // no existe por fuera de ella


