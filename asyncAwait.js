let paises=[]

const add_Pais=pais=>new Promise(
    (resolve,reject)=>{
        if(pais=='Canada'){
            reject(`el país ${pais} no es de latinoamérica`);
        }
        setTimeout(() => {
            paises.push(pais);
            resolve(`agregando... ${pais}`);
        }, 3000);
    }
)

async function init_Proceso(){
    let result;
    try {
        result=await add_Pais('Chile');
        console.log(result);
        result=await add_Pais('Argentina');
        console.log(result);
        result=await add_Pais('Perú');
        console.log(result);
        result=await add_Pais('Bolivia');
        console.log(result);    
        result=await add_Pais('Canada');
        console.log(result);    
    } catch (error) {
        console.log(error);
    }    
    console.log(paises);
}

init_Proceso();