console.log('Loaded!');
var img=document.getElementById("madi");
img.onclick = function(){
   var interval = setInterval(moveleft,500);
};
var Right=0;
function moveleft() {
    Right = Right+10;
    img.style.marginRight=Right +'px';
    
}