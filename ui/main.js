console.log('Loaded!');
var img=document.getElementById("madi");
img.onclick = function(){
   var interval = setInterval(moveleft,50);
};
var Right=0;
function moveleft() {
    Right = Right+1;
    img.style.marginRight=Right +'px';
};
img.ondblclick = function(){
    var interval = setInterval(moveright,50);
};

function moveright() {
    Right = Right+10;
    img.style.marginleft=Right +'px';
};