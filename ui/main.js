console.log('Loaded!');
var img=document.getElementById("madi");
img.onclick = function(){
   var interval = setInterval(marginleft,50);
};
var margin=0;
marginleft = function(){
    margin = margin+1;
    img.style.marginRight='margin px';
    
};