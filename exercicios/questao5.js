function clicou(){
   var a=parsefloat(prompt("Digite o primeiro numero: "));
   var b=parsefloat(prompt("Digite o segundo numero: "));
    document.querySelector("#somar").innerHTML=" a soma dos valores é: "+(a+b);
    document.querySelector("#mutiplicar").innerHTML=" a mutiplicaçao dos valores é: "+(a*b);
    document.querySelector("#dividir").innerHTML=" a divisao dos valores é: "+(a%b);
    document.querySelector("#subtrair").innerHTML=" a subtraçao dos valores é: "+(a-b);

}