//variable

let vHelado = 3000;
let vHeladoVegano = 3500;
let vegano = 0;
let normal = 0;
let tHelado;

let nombreCliente = prompt("Ingrese su nombre:");
alert("hola " + nombreCliente + " bienvenido a nuestra pagina");
let comprar = prompt("Desea comprar helado? s (si) n (no)");
while(comprar != "n"){

    tHelado = prompt("Indique el tipo de helado que desea: vg = vegano y nl = normal");
    switch (tHelado){
        case "vg":
            vegano = vegano + 1;
            comprar =prompt("Desea agregar otro helado? s (si) n (no)");
            break;
        case "nl":
            normal = normal + 1;
            comprar =prompt("Desea agregar otro helado? s (si) n (no)");
            break;    
    }   
}
let = totalPagar = vegano * vHeladoVegano + normal * vHelado; 
alert("El total a pagar sera de " + totalPagar);

