console.log('Loaded!');
var img=document.getElementById("madi");
img.onclick = function(){
   var interval = setInterval(moveleft,50);
};
var margin=0;
function moveleft() {
    margin = margin+1;
    img.style.marginRight=margin +'px';
    
}