let paises=[];

const add_Pais=pais=>new Promise(
    (resolve,reject)=>{
        if(pais=='Canada'){
            reject(`el país ${pais} no es de latinoamérica`);
        }
        setTimeout(() => {
            paises.push(pais);
            resolve(`agregado... ${pais}`);
        }, 3000);
    }
);

add_Pais('Chile')
    .then(result=>{
        console.log(result);
        console.log(paises);
        return add_Pais('Argentina');
    })
    .then(result=>{
        console.log(result);
        console.log(paises);
        return add_Pais('Perú');            
    })
    .then(result=>{
        console.log(result);
        console.log(paises);
        return add_Pais('Bolivia');
    })
    .then(result=>{
        console.log(result);
        console.log(paises);
        return add_Pais('Canada');
    })
    .catch(result=>{
        console.log(result);
        console.log(paises);
    })