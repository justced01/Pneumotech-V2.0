function setup(htmlComponent) {				  
    htmlComponent.addEventListener('DataChanged', function(event) {
        document.getElementById('risk').innerHTML = htmlComponent.Data[0];
        document.getElementById('type').innerHTML = htmlComponent.Data[1];
    });    
}