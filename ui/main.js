//counter code

//submit name

var submit = document.getElementById('submit_bt');
submit.onclick = function() {
    //craete request to counter end point
    var request = new XMLHttpRequest();
    //capture the response and store it
    request.onreadystatechange = function () {
        if(request.readyState == XMLHttpRequest.DONE){
            //take some action
            if(request.status == 200){
                 //capture the name
                  var names = request.responseText;
                  names = JSON.parse(names); //converting from sting to java array
                  var list='';
                  for (var i=0; i<names.length; i++){
                        list += '<li>'+ names[i] +'</li>';
        
                         }
                  var ul = document.getElementById('namelist');
                   ul.innerHTML= list;
    
               }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
   //to make request
   request.open('GET','http://shafiulla171.imad.hasura-app.io/submit-name?name=' + name,true);
   request.send(null);
    
};

    //create a request to server



    
   