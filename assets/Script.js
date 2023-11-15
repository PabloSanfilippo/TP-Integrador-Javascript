function BorrarDatos() {

    document.getElementById("campoNombre").value = "";
    document.getElementById("campoApellido").value = "";
    document.getElementById("campoCorreo").value = "";
    document.getElementById("cantidadTickets").value = "";
    document.getElementById("browser").value = "";
    document.getElementById("total").innerText = "";
}




 function valor() {
    let n1 = document.getElementById("cantidadTickets").value;
    let n2 = document.getElementById("browser").value;
    
    if (n2 == "Estudiante"){
        let valorSinDes = 200 * n1; 
        let valorConDes = valorSinDes - (valorSinDes * 0.8);
        
        document.getElementById("total").innerText = valorConDes;
    }
    
    if (n2 == "Trainee"){
        let valorSinDes = 200 * n1; 
        let valorConDes = valorSinDes - (valorSinDes * 0.5);

        document.getElementById("total").innerText = valorConDes;

    }

    if (n2 == "Junior"){
        let valorSinDes = 200 * n1; 
        let valorConDes = valorSinDes - (valorSinDes * 0.15);

        document.getElementById("total").innerText = valorConDes;
    }

    
 }