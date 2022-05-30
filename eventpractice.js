var t = document.getElementById('target');
if(t.addEventListener){
    t.addEventListener('click', function(event){
        alert('Hello world, '+event.target.value);
    }); 
} else if(t.attachEvent){
    t.attachEvent('onclick', function(event){
        alert('Hello world, '+event.target.value);
    })
}