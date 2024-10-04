
document.getElementById('estilo1').addEventListener('click', function() {
    const images = document.querySelectorAll('.image-gallery img');
    images.forEach(img => {
        img.style.borderRadius = '50%'; 
    });
});

document.getElementById('estilo2').addEventListener('click', function() {
    const images = document.querySelectorAll('.image-gallery img');
    images.forEach(img => {
        img.style.borderRadius = '0%'; 
    });
});


document.getElementById('estilo3').addEventListener('click', function() {
    const gallery = document.getElementById('ig'); 
    gallery.style.gridTemplateColumns = '1fr 1fr 1fr'; 
});

document.getElementById('estilo4').addEventListener('click', function() {
    const gallery = document.getElementById('ig'); 
    gallery.style.gridTemplateColumns = '1fr'; 
});

function rand(n){
   
     return(Math.floor(Math.random() * n + 1 ));
    }
    
    var cambia_imagen = new Array();
    cambia_imagen[0] = "https://images.unsplash.com/photo-1727829441330-9a743f524085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D";
    cambia_imagen[1] = "https://images.unsplash.com/photo-1727949395615-6a8759aeb561?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D";
    cambia_imagen[2] = "https://images.unsplash.com/photo-1727783851864-67d9d2e78ea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D";
    cambia_imagen[3] = "https://images.unsplash.com/photo-1727452166441-d1d8de08f041?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D";
    cambia_imagen[4] = "https://images.unsplash.com/photo-1727091462554-a36e6136b6ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D";
    cambia_imagen[5] = "https://images.unsplash.com/photo-1727717561078-a58d2a7cb1fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D";
    cambia_imagen[6] = "https://images.unsplash.com/photo-1719937050679-c3a2c9c67b0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D";
   





function cambiar(){
document.getElementById('ig1').addEventListener('click', function() {
    const primeraimagen = document.getElementById('img1').src=cambia_imagen[rand(7)-1];
   
});

}