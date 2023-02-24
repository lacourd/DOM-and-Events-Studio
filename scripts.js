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

takeOffButton.addEventListener("click", function() {
    let clearedForLaunch = window.confirm("Confirm that the shuttle is ready for takeoff.");
    if (clearedForLaunch) {
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.textContent = "Shuttle in flight.";
        let shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "blue";
        let rocket = document.getElementById("rocket");
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.textContent = "10000"
    }
});

landingButton.addEventListener("click", function(){
    let land = window.alert("The shuttle is landing. Landing gear engaged.");
    let flightStatus = document.getElementById("flightStatus");
    flightStatus.textContent = "The shuttle has landed.";
    let shuttleBackground = document.getElementById("shuttleBackground");
    shuttleBackground.style.backgroundColor = "green";
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    shuttleHeight.textContent = "0"

});

abortButton.addEventListener("click", function(){
    let abortMission = window.confirm("Confirm that you want to abort the mission.");
    if (abortMission) {
        let flightStatus = document.getElementById("flightStatus");
        flightStatus.textContent = "Mission aborted";
        let shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "green";
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.textContent = "0"
    }
})
//while (document.getElementById("spaceShuttleHeight") != "0") {
//     leftButton.addEventListener("click", function(){
//         let rocket = document.getElementById("rocket");
//         rocket.style.position = "-10px"
//     })
// }
leftButton.addEventListener("click", function(){
    let rocket = document.getElementById("rocket");
    // rocket.position = 0;
    // console.log(rocket.position);
    // let currentPosition = parseInt(rocket.position);
    // console.log(currentPosition);
    // rocket.style.position -= "10px"
});

rightButton.addEventListener("click", function(){
    let rocket = document.getElementById("rocket");
    rocket.style += "10px"
});

upButton.addEventListener("click", function(){
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let currentPosition = Number(shuttleHeight.textContent);
    currentPosition += 10000
    shuttleHeight.textContent = String(currentPosition);
});

downButton.addEventListener("click", function(){
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let currentPosition = Number(shuttleHeight.textContent);
    currentPosition -= 10000
    shuttleHeight.textContent = String(currentPosition);
});

});