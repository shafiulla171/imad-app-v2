console.log('Loaded!');
var img=document.getElementById("madi");
img.onclick = function(){
   var interval = setInterval(moveleft,50);
};
var marginRight=0;
function moveleft() {
    marginRight = marginRight+1;
    img.style.marginRight=marginRight +'px';
    
}