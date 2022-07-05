const 
materia=document.getElementById('materia'),
   valor=document.getElementById('valor'),
      btn_enviar=document.getElementById('btn_enviar'),
      btn_calcular=document.getElementById('btn_calcular'),
form=document.getElementById('myform'),
result=document.getElementById('result'),
calculo=document.getElementById('calculo'),
mysdatos=document.getElementById('resultados');
let misMaterias=[];
let valorMaterias=[];

btn_enviar.addEventListener('click',function(event){
   
    event.preventDefault();
    let mat=materia.value;
    let valr=valor.value;
    if(mat !='' && valr !=''){
        misMaterias.push(mat);
        console.log(misMaterias);
        valorMaterias.push(parseFloat(valr));
        console.log(valorMaterias);
        datosMateria();
        contarMaterias();
        Limpiar();
    }else{
        alert("No pueden haber Datos en Blanco");
    }
  

})
function Limpiar(){
    materia.value="";
    valor.value="";
}
function contarMaterias(){
    let contador=document.getElementById('asignamateria').value;;
    for(;contador<misMaterias.length;contador++){
         contador++;
         if(contador=contador){
        alert(`Has agregado tus :${contador} materias`);
        btn_enviar.disabled=true;
        btn_calcular.disabled=false;
        btn_calcular.classList.add("activo");
        }
}
}
function datosMateria(){
    datos="";
    for(i=0;i<misMaterias.length;i++){
        datos=datos+"<p> Nombre Materia :"+misMaterias[i]+" el valor: "+ valorMaterias[i]+"</p>";
    }
    mysdatos.innerHTML=datos;
}

btn_calcular.addEventListener('click', function(event){
      
    event.preventDefault();
 let nombre=document.getElementById('nombre').value;
 const valorFijo=20000,
        valorCarnet=8000,
        descuento=0.2;
        let cantidadMateria=misMaterias.length;
        let TotalValorMateria=0;
        let ValorTotal=0;
        for(i=0;i<cantidadMateria;i++){
            TotalValorMateria += valorMaterias[i];
        }
        ValorTotal=TotalValorMateria *descuento + valorFijo + valorCarnet;
        calculo.innerHTML= "El estudiante :"+ nombre + " El valor total de las materias es : "+ ValorTotal;
})