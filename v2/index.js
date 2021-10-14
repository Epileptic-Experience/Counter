
let count = 0


function incrementPassanger() {
    count += 1
    document.getElementById("count-el").innerText = count
    console.log(count)
}



let saveEl = document.getElementById("save-el")

function save() {
    let saved = count + " + "
    saveEl.textContent +=  saved
    count += - count
    // document.getElementById("count-el").innerText = count
    console.log(count)
}


