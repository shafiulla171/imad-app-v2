//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    //to render the variable in correct span
    var span=document.getElementById('count');
    counter=counter+1;
    span.innerHTML=counter.toString();
};