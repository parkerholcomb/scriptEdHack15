
function randomize_start_postion(element){
    console.log("randomize");
    var posx = (Math.random() * ($(document).width() - ".hidden-object")).toFixed();
    var posy = (Math.random() * ($(document).height() - ".hidden-object")).toFixed();
    
    $(this).css({
        'left':posx+'px',
        'top':posy+'px',
    })
}

randomize_start_postion("hidden-wrench");
randomize_start_postion("hidden-fuel");
randomize_start_postion("hidden-rocket");



$('#hidden-wrench').click(function() {
    console.log("clicked wrench");
    $(this).remove()
    $('#wrench').addClass('completed');
    check_complete();
    
})

$('#hidden-fuel').click(function() {
    console.log("clicked fuel");
    $(this).remove()
    $('#fuel').addClass('completed');
    check_complete();
})


$('#hidden-rocket').click(function() {
    console.log("clicked rocket");
    $(this).remove()
    $('#rocket').addClass('completed');
    check_complete();
})



$('.nav').click(function() {
    var current_view = $("#visor").attr("class");
    var direction = $(this).attr("id");
    var new_class = navigate_to(current_view, direction);
    $("#visor").removeClass();
    $("#visor").addClass(new_class);
});


function navigate_to(current_view, direction){
    var nav_class;
    
    if(current_view === "earth") {
        if  (direction === "right") {
            nav_class="rover";
        } else {
            nav_class="desert";
        }
    }
    
    if(current_view === "rover") {
        if  (direction === "left") {
            nav_class="earth";
        } else {
            nav_class = current_view;
        }
    }
    
     if(current_view === "desert") {
        if  (direction === "right") {
            nav_class="earth";
        } else {
            nav_class = current_view;
        }
    }
    
    return nav_class;
}

function check_complete() {
    var length = $('.completed').length;
    if(length == 3) {
        blastoff();
    }
    
}

    
function blastoff(){
  console.log("winner winner chicken dinner!");
  $("#visor").removeClass();
  $('#visor').addClass('blastoff');
  document.getElementById("song").play();
  
}