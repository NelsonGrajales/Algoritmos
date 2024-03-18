const lista = [1,2,3,4,5]

function busquedaBinaria(lista, val){
    let inicio = 0;
    let fin = lista.length - 1;

    while(inicio <= fin){
        const pm = Math.round((inicio + fin)/2);

        if(lista[pm] === val){
            return pm;
        }else if (lista[pm] < val) {
            inicio = pm + 1;
        }else{
            fin = pm - 1;
        }
    }
}

console.log(busquedaBinaria(lista,3))