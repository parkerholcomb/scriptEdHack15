var timer = document.getElementById("timer");
var counter = 15;


id = setInterval(function() {
    counter--;
    if(counter == 0) {
        //bring up image of death and doom
        death();
        clearInterval(id);
    } else {
        timer.innerHTML = "You will run out of oxygen " + counter.toString() + " seconds.";
    }
}, 1000);


function death(){
    $("#visor").removeClass("earth");
    $("#visor").removeClass("rover");
    $("#visor").removeClass("desert");
    $("#visor").addClass("death");
}
    