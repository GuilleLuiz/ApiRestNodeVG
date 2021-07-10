const numeros=[1,2,3,4,5,6,7,8,9]
const cadenas=['uno','dos','tres','...']
const mix=['uno',2,true,{numero:1,nombre:'Luiz'}]

function imprimeArray(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log('['+i+'] '+element)
    }
}

imprimeArray(mix)