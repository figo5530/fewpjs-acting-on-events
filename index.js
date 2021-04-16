// Your code here
let dodger = document.getElementById('dodger')

function moveDodgerLeft() {
    let number = dodger.style.left.replace("px", "")
    let left = parseInt(number, 10)

    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight() {
    let number = dodger.style.left.replace("px", "")
    let left = parseInt(number, 10)

    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}

