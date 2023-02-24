// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

const takeOffButton = document.getElementById("takeoff");
const landingButton = document.getElementById("landing");
const abortButton = document.getElementById("missionAbort");
const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const shuttleHeight = document.getElementById("spaceShuttleHeight");
const rocket = document.getElementById("rocket");
let launched = false;


rocket.style.position = "absolute";
rocket.style.bottom = "0px";
rocket.style.left = "200px";

takeOffButton.addEventListener("click", function() {
    let clearedForLaunch = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (clearedForLaunch) {
        launched = true;
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.textContent = "Shuttle in flight.";
        let shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "blue";

        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.textContent = "10000"
        rocket.style.bottom = "10px"
    }
});

landingButton.addEventListener("click", function(){
    if (launched = true) {
        let land = window.alert("The shuttle is landing. Landing gear engaged.");
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.textContent = "The shuttle has landed.";
        let shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "green";
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.textContent = "0";
        rocket.style.bottom = "0px"
        launched = false;
    }
});

abortButton.addEventListener("click", function(){
    if (launched = true) {
        let abortMission = window.confirm("Confirm that you want to abort the mission.");
        if (abortMission) {
            let flightStatus = document.getElementById("flightStatus");
            flightStatus.textContent = "Mission aborted";
            let shuttleBackground = document.getElementById("shuttleBackground");
            shuttleBackground.style.backgroundColor = "green";
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            shuttleHeight.textContent = "0"
            rocket.style.bottom = "0px"
        }
        launched = false;
    }
})
//while (document.getElementById("spaceShuttleHeight") != "0") {
//     leftButton.addEventListener("click", function(){
//         let rocket = document.getElementById("rocket");
//         rocket.style.position = "-10px"
//     })
// }
leftButton.addEventListener("click", function(){
    if (launched = true) {
        if (parseInt(rocket.style.left) != 0) {
            let movement = parseInt(rocket.style.left) - 10 + 'px';
            rocket.style.left = movement
        }
    }
});

rightButton.addEventListener("click", function(){
    if (launched = true) {
        if (parseInt(rocket.style.left) != 400) {
            let movement = parseInt(rocket.style.left) + 10 + 'px';
            rocket.style.left = movement
        }
    }
});

upButton.addEventListener("click", function(){
    if (launched = true) {
        if (shuttleHeight.innerHTML != "250000") {
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            let currentPosition = Number(shuttleHeight.textContent);
            currentPosition += 10000
            shuttleHeight.textContent = String(currentPosition);
            let movement = parseInt(rocket.style.bottom) + 10 + 'px';
            rocket.style.bottom = movement
        }
    }
});

downButton.addEventListener("click", function(){
    if (launched = true) {
        if (shuttleHeight.innerHTML != "0") {
            let shuttleHeight = document.getElementById("spaceShuttleHeight");
            let currentPosition = Number(shuttleHeight.textContent);
            currentPosition -= 10000
            shuttleHeight.textContent = String(currentPosition);
            let movement = parseInt(rocket.style.bottom) - 10 + 'px';
            rocket.style.bottom = movement
        };
    };
});

});