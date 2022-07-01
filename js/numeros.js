const
A=document.getElementById("numeroUno"),
B=document.getElementById("numeroDos"),
C=document.getElementById("numeroTres"),
D=document.getElementById("numeroCuatro"),
botonCalcular=document.getElementById("calcular"),
resultado=document.getElementById("resultado"),
resultadodos=document.getElementById("resultadodos")

botonCalcular.addEventListener('click', function(){

if((A.value == B.value) || (A.value == C.value) || (A.value == D.value)){
    resultado.innerHTML="Numros repetidos";
}else if((B.value == C.value) || (B.value == D.value)){
    resultado.innerHTML="Numros repetidos";
}else if((C.value == D.value)){
    resultado.innerHTML="Numros repetidos";
}else{
    let mayor=Math.max(A.value,B.value,C.value,D.value);
    if(mayor == A.value){
        resultado.innerHTML="El Numero mayor es: " +mayor;
    }else if(mayor == B.value){
        resultado.innerHTML="El Numero mayor es: " +mayor;
    }else if(mayor == C.value){
        resultado.innerHTML="El Numero mayor es: " +mayor;
    }else if(mayor == D.value){
        resultado.innerHTML="El Numero mayor es: " +mayor;
    }
        let menor=Math.min(A.value,B.value,C.value,D.value);
        if(menor == A.value){
            resultadodos.innerHTML="El Numero mayor es: " +menor;
        }else if(menor == B.value){
            resultadodos.innerHTML="El Numero mayor es: " +menor;
        }else if(menor == C.value){
            resultadodos.innerHTML="El Numero mayor es: " +menor;
        }else if(menor == D.value){
            resultadodos.innerHTML="El Numero mayor es: " +menor; 
    }
   
}


})