// Home status 

let homeCount = 0;
let changeCount = document.getElementById("home--btn");

function plusOne() {
    homeCount += 1;
    changeCount.textContent = homeCount;
}
function plusTwo() {
    homeCount += 2;
    changeCount.textContent = homeCount;
}
function plusThree() {
    homeCount += 3;
    changeCount.textContent = homeCount;
}



// Guest status 
let guestCount = 0;
let guestCountChange = document.getElementById("guest--btn");

function guestPlusOne() {
    guestCount += 1;
    guestCountChange.textContent = guestCount;
}
function guestPlusTwo() {
    guestCount += 2;
    guestCountChange.textContent = guestCount;
}
function guestPlusThree() {
    guestCount += 3;
    guestCountChange.textContent = guestCount;
}



function saveClick() {
    changeCount.textContent = 0;
    homeCount = 0;
    guestCountChange.textContent = 0;
    guestCount = 0;

}