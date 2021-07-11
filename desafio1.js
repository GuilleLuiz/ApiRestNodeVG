let text='node node node javascript node javascript node node javascript node node node node javascript javascript'

let objCount={
   node:0,
   js:0
}

objCount.node=text.split(' ').filter(e=>e=='node').length
objCount.js=text.split(' ').filter(e=>e=='javascript').length
console.log(objCount)