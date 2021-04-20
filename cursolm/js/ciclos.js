window.onload = function(){

var contador=0;
var sumatoria=0

/*while(contador <3){
    console.log(contador);
    contador++;
}*/

//sumatoria de numero
/*var sumatoria=0;

while (contador<=10) {
    sumatoria=sumatoria+contador;
    contador++;
}
//project euler.net
console.log(sumatoria);*/

for (let index = 0; index <= 10; index++) {
    
    if(index%2==0){
        //console.log(index);
        sumatoria=sumatoria+index;
    }
    
}
console.log("La sumatoria es " + sumatoria);

}