function valor() {
    let n1 = document.getElementById('cantidadTickets').ariaValueMax;
    let n2 = document.getElementById('brownsers').ariaValueMax;
    
    console.log((parseInt(n1) * 200) / 2)

    let resultado = ((parseInt(n1) * 200) / 2)

    document.getElementById('total').innerText = resultado

}
function limpiar(){
    document.getElementById('total').innerHTML = '';
    document.getElementById('cantidad').reset(); 
}

var y = document.getElementById('botonborrar');
y.addEventListener('click', limpiar);
