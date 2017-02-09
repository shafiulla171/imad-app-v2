console.log('Loaded!');
var img=document.getElementById("madi");
img.onclick = function(){
   var interval = setInterval(moveleft,50);
};
var Right=0;
function moveleft() {
    Right = Right+100;
    img.style.marginRight=Right +'px';
    
}