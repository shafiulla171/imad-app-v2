//counter code
var button=document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    //craete request to counter end point
    var request = XMLHttpRequest();
    //capture the response and store it
    request.onreadystatechange = function () {
        if(request.readyState == XMLHttpRequest.Done){
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