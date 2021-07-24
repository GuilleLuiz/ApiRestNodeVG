let paises=[];

function add_Pais(pais,callback){
    paises.push(pais);
    console.log(`agregando... ${pais}`);
    callback();
    
}
function view_Paises(){
    console.log(paises);
}
function init_IngresoPaises(){
    setTimeout(() => {
        add_Pais('Chile',view_Paises);
        setTimeout(() => {
            add_Pais('Argentina',view_Paises);
            setTimeout(() => {
                add_Pais('Perú',view_Paises);
                setTimeout(() => {
                    add_Pais('Bolivia',view_Paises);
                    setTimeout(() => {
                        add_Pais('Ecuador',view_Paises);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}

init_IngresoPaises();