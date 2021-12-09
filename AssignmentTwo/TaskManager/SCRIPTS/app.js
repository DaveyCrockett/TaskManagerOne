var important = false;
var icon;

function togglePriority() {
    console.log("Clicked!");

    if(important == true){
        icon.removeClass("fas").addClass("far");
        important = false;
    }else{
        icon.removeClass("far").addClass("fas");//No gain in performance though
        important = true;
    }
    
}

function init(){
    console.log("Task Manager!!");
    icon = $("#iPriority");
    //Hook events
    icon.click(togglePriority);

    // load data

}

window.onload=init;

// button that hides and shows register task