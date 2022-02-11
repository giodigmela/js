var object = document.getElementById("object");
var button = document.getElementById("button");
var red = document.getElementById("red");
var green = document.getElementById("green");
var yellow = document.getElementById("yellow");

function changecolor(color) {
    object.style.background = color;
}

button.onclick = function(){

    if(object.className == "appear"){
        object.className = "";
        button.innerHTML = "appear";
    } else{
        object.className = "appear";
        button.innerHTML = "hide";
    }

};

red.onclick =  function(){
    changecolor("rgb(204, 7, 7)");
};

green.onclick =  function(){
    changecolor("green");
};

yellow.onclick =  function(){
    changecolor("yellow");
};

