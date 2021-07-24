let paises=['Chile','Argentina','Perú','Bolivia'];

function addPais(pais,callback){
    setTimeout(() => {
        paises.push(pais);

        callback()
    }, 2000);
}
function viewPaises(){
    console.log(paises);
}

addPais('Ecuador',viewPaises);