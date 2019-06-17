document.ready(function(){
    var dump = $("body>section");
    for(var i = 0; i < dump.length; i++){
        console.log("section #"+ dump[i].getAttribute("id") + " have DIVs: " + stack[i].getElementsByTagName('div').length);
    }
});