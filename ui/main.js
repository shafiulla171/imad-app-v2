//counter code
var button=document.getElementById('counter');
var count=0;
button.onclick=function(){
    //to render the variable in correct span
    var span=document.getElementById('count');
    count=count+1;
    span.innerHTML=count.toString();
};