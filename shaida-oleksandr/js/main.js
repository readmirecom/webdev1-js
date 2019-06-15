$(document).ready(function(){

    var stack = $("body>section");
    
    // section #id_attr have DIVs: 2
    for(let i = 0; i < stack.length; i++){
        console.log("section "+ stack[i].getAttribute("id") + " have DIVs: " + stack[i].getElementsByTagName('div').length);
        
    }
   
});