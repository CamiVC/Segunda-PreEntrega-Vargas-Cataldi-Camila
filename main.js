
class producto {
    constructor(nombre, cantidad){
        this.nombre=nombre
        this.cantidad=cantidad
    }
}

const carrito = []

let opcion = 0

function comprar(){

const prod = new producto (prompt("Que producto quiere agregar?"), parseFloat(prompt("Cuántas unidades de ese producto quiere?")))
carrito.push(prod)

console.log(carrito)

while (true){
    opcion = prompt("Elija una de estas opciones para continuar\n1- Agregar otro producto\n2- Eliminar último producto agregado\n3- Ver todos los productos\n4- Ver total de productos\n5- Finalizar")
    if (opcion==1){
        comprar()
        break
    } else if (opcion==2){
        eliminar()
        
    } else if (opcion==3){
        totalcarrito()
        
    }else if (opcion==4){
        totalprod()
        
    } else if (opcion==5){
        const elementos = carrito.map((el)=> el.nombre)
        alert ("Los productos en su carrito son " + elementos)
        let acum = 0
    const num = carrito.map((prod)=> prod.cantidad)
    num.forEach(cantidad=>{
        acum+=cantidad
    })
    console.log(acum)
    alert ("Usted tiene " + acum + " productos en su carrito")
        alert("Gracias por dejarnos ayudar!")
        break
    } else {
        alert("Por favor ingrese una opción válida")
    }
} 
}

function eliminar(){
    
    while(true){
        opcion = prompt("Está seguro que quiere eliminar el último producto agregado?\n1- Si\n2-No")
        if (opcion == 1){
            carrito.pop()
            alert("Producto eliminado del carrito")
            break
        } else if (opcion == 2){
            break
        } else {
            alert("Por favor seleccione una opción valida")
        }
    }
}

function totalcarrito(){
    const elementos = carrito.map((el)=> el.nombre)
    alert ("Los productos en su carrito son " + elementos)
}

function totalprod(){
    let acum = 0
    const num = carrito.map((prod)=> prod.cantidad)
    num.forEach(cantidad=>{
        acum+=cantidad
    })
    console.log(acum)
    alert ("Usted tiene " + acum + " productos en su carrito")
}

alert("Acá te ayudaremos a armar tu carrito de compras")
comprar()
