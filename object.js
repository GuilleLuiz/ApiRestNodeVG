const producto={
    nombre:'monitor gamer 20\"',
    precio:300000,
    info:{
        peso:'1kg',
        medida:'50cm'
    },
    disp:['los ángeles','chillán','concepción']
}
const bodega={
    nombreBodega:'los angeles',
    stockBodega:60
}

const dataObject={...producto,...bodega}

console.log(Object.keys(producto))
console.log(Object.keys(bodega))
console.log(Object.keys(dataObject))

// const {nombre,precio,info:{peso}}=producto
// function imp(){

// }
// console.log(peso)