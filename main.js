/* AULA 1
var nome= "Gabriel Becker";
var idade= "19";
var idade2= "10";
//var idade= 19;
//var idade2= 10;
var frase= "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos!");
alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"))
*/

/* AULA 2
var lista=["maçã","pêra","laranja"]
var fruta=[{nome:"melão", cor:"amarelo", preço:"5,00"},{nome:"melancia", cor:"verde", preço:"15,00"}]

console.log(fruta[1].nome);
console.log(fruta[0]);
alert(fruta[1].nome);

//lista.push("uva");  //ADICIONA
//lista.pop();        //REMOVE
console.log(lista);
console.log(lista[0]);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
console.log(lista.join(" | "));
console.log(lista.join("  "));
console.log(lista.reverse());
*/

/* AULA 3
//var idade= prompt("qual sua idade");
var idade= 18;
if (idade>=18){
  alert("Maior de idade");
}else {
  alert("Menor de idade");
}
*/

/*
var count= 0;
while (count<=5){
  console.log(count);
  alert(count);
  count = count + 1; //ou count++;
}
*/

/*
for(count=0; count<=5; count++){
  alert(count);
}
*/

/*
var d= new Date();
alert(d);
alert(d.getYear());
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
function soma(n1, n2){
  return n1 + n2;
}
alert (soma(5,10));
*/

/*
function setReplace(frase, trecho, novo_trecho){
  return frase.replace(trecho, novo_trecho);
}
alert(setReplace("vai japão","japão","brasil"));
*/

/*
var validar;
function validaIdade(idade){
  //var validar;
  if(idade >= 18){
    validar= true;
  }else{validar= false}
  return validar;
}
var idade= prompt("qual sua idade?")
console.log(validaIdade(idade));
*/

/*
function clicou(){
  //alert("Obrigado por clicar") //mostra um alerta
  document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
  //adiciona um texto na página
}

function redirecionar(){
  window.open("https://globallabs.academy/"); 
  //ou
  window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
  //document.getElementById("mouseMove").innerHTML = "Obrigado por passar o mouse";
  elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento){
  //document.getElementById("mouseMove").innerHTML = "Passe o mouse aqui";
  elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
  alert("Página carregada")
}

function funcaoChange(elemento){
  console.log(elemento.value)
}
*/