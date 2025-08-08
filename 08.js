const massa = parseFloat (prompt ("Insira sua massa em kg, por favor"));
const altura= parseFloat (prompt ("Insira sua altura em metros (use ponto para separar os decimais, não vírgula), por favor"));
let imc = massa/(altura**2)
if  (imc <= 16.9)
{ 
 alert (`Seu IMC é ${imc}. Você está muito abaixo do peso`)
}
else if (imc <= 18.9)
    { 
 alert (`Seu IMC é ${imc}. Você está abaixo do peso`)
}
else if (imc <= 26.9)
    { 
 alert (`Seu IMC é ${imc}. Seu peso está dentro saudável (normal)`)
}
else if (imc <= 31.9)
    { 
 alert (`Seu IMC é ${imc}. Você está acima do peso`)
}
else 
    { 
 alert (`Seu IMC é ${imc}. Você está MUITO acima do peso, obesidade`)
}