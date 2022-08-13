function permutar(){
    var hola=document.getElementById("datos");
    var hola2=hola.value;
    var arreglo="";
    var valores=[];
    for(var q=0;q<hola2.length;q++){
        if(hola2.charAt(q)!=',' && hola2.charAt(q)!='.'){
            arreglo=arreglo+hola2.charAt(q);
        }else{
            valores.push(arreglo);
            arreglo="";
        }
    }

   

    var resultados=permute(valores);

    var datosM="CANTIDAD PERMUTACIONES: "+resultados.length+"                                                                                ";
   
    for (var u=0;u<resultados.length;u++){
        datosM=datosM+"(";
        for (var t=0;t<resultados[0].length;t++){
            datosM=datosM+resultados[u][t]+"  ,";
        }
        datosM=datosM+")                                                                                "
    }

    var subir=document.getElementById("result").innerText=datosM


}

var permute = function(nums){
    var result = [];
    var backtrack = (i, nums) => {
      if(i===nums.length){
        result.push(nums.slice());
        return;
      }  
      for(let j = i; j < nums.length; j++){
        [nums[i],nums[j]] = [nums[j],nums[i]];
        backtrack(i+1, nums);
        [nums[i],nums[j]] = [nums[j],nums[i]];
      }
    }
    backtrack(0, nums);

    return result;
  };
