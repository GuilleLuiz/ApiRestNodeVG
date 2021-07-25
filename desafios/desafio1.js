const text='Node. js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en . js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript.'
//buscar y contar las veces que se repite en un texto las palabras "node", "javascript" y "entorno"
const objDesf_1={
   //patrones que se deben buscar
   searchPattern:['node','javascript','entorno'],
   //contenedores de patrones
   arrayNode:[],
   arrayJs:[],
   arrayEntorno:[],
   //contadores de palabras
   countNode:0,
   countJs:0,
   countEntorno:0,
   //metodos de búsqueda
   buscar:function(text){
      //se separan las palabras y se guardan en un array
      const arrayPalabras=text.split(' ');
      //se identifican los patrones
      for (let i = 0; i < this.searchPattern.length; i++) {
         const pattern = this.searchPattern[i];
         switch (pattern) {
            case 'node':
               this.arrayNode=this.buscarPatron(arrayPalabras,pattern);
               this.countNode=this.arrayNode.length;
               break;
            case 'javascript':
               this.arrayJs=this.buscarPatron(arrayPalabras,pattern);
               this.countJs=this.arrayJs.length;
               break;
            case 'entorno':
               this.arrayEntorno=this.buscarPatron(arrayPalabras,pattern);
               this.countEntorno=this.arrayEntorno.length;
               break
            default:
               break;
         }
      }
   },
   buscarPatron:function(arrayPalabras,pattern){
      return arrayPalabras.filter(e=>e.toLowerCase().indexOf(pattern)>-1);
   },
   print:function(){
      this.searchPattern.forEach(e=>{
         switch (e) {
            case 'node':
               console.log(this.countNode+' veces Node')
               break;
            case 'javascript':
               console.log(this.countJs+' veces JavaScript')
               break;
            case 'entorno':
               console.log(this.countEntorno+' veces Entorno')
               break
            default:
               break;
         }
      });
   },
}

objDesf_1.buscar(text,[]);
objDesf_1.print();