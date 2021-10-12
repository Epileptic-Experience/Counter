
let count = 0


function incrementPassanger() {
    count += 1
    document.getElementById("count-el").innerText = count
    console.log(count)
}


function reset() {
    count += - count
    document.getElementById("count-el").innerText = count
    console.log(count)
}

let saveEl = document.getElementById("save-el")

function save() {
    let saved = `${count}-`
    saveEl.innerText +=  saved
}




// let username = "per"

// let message = "you have three new notifications"

// function notifications() {
//     console.log(`${username}, ${message}!`)
// }

// let messageToUser = username + ", " + message + "!" 
// function messageUser() {
//     console.log(messageToUser)
// }

// let name = "Chika Chika Slim Shady" 
// let greeting = "hi,myNameIs"
// let mygreeting =( `${greeting}, ${name}` )

// function greetings() {
//     console.log(mygreeting)
// }
