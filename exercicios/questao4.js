function clic(){
    var num=parseInt(prompt("digite um numero"));
    document.querySelector("p").innerHTML= "o antecessor de "+num+" é "+(num-1)+ " e o sucessor é "+(num+1);
}