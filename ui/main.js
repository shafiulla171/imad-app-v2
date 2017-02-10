//counter code
var button=document.getElementById('counter');
button.onclick = function () {
    //craete request to counter end point
    var request = new XMLHttpRequest();
    //capture the response and store it
    request.onreadystatechange = function () {
        if(request.readyState == XMLHttpRequest.DONE){
            //take some action
            if(request.status == 200){
             var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();
            
        }
    }
    };
   //to make request
   request.open('GET','http://shafiulla171.imad.hasura-app.io/counter',true);
   request.send(null);
    
};
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_bt');
submit.onclick = function() {
    //create a request to server
    
    //capture the name
    var names = ['name1','name2','name3','name4'];
    var list='';
    for (var i=0; i<names.length; i++){
        list += '<li>'+ names[i] +'</li>';
        
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML= list;
    
}