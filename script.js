var character=document.getElementById("character");
var block=document.getElementById("block");
function jump(){
    if(character.classlist!="animate"){
    character.classList.add("animate");
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
   var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
if(blockLeft<60 && blockLeft>0 && characterTop>=170){
    block.style.animation="none";
    block.style.display="none";
    alert("u loose");
}
},10);

