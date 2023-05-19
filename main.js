var NumeroSelect=document.querySelector(".numero").innerHTML

    var NumeroValor=parseInt(NumeroSelect)

    const Botao_Add=document.querySelector(".botao-aumentar");

    const Botao_Reduzir=document.querySelector(".botao-diminuir"); 

    const Botao_Resetar=document.querySelector(".botao-reset");

    Botao_Add.addEventListener("click",AumentarNumero)

    Botao_Reduzir.addEventListener("click",ReduzirNumero)
  
    Botao_Resetar.addEventListener("click",Resetar)

    

    function AumentarNumero(){
        NumeroValor+=1
        document.querySelector(".numero").innerHTML=NumeroValor
        ChecarSinal()

      
    }

    function ReduzirNumero(){
        NumeroValor+= -1
        document.querySelector(".numero").innerHTML=NumeroValor
        ChecarSinal()

        
    } 


    function Resetar(){

        document.querySelector(".numero").innerHTML=NumeroValor=0
        ChecarSinal()
    }



    function ChecarSinal() {

        if(NumeroValor<0){
            document.querySelector(".numero").classList.add("negativo")
            document.querySelector(".numero").classList.remove("positivo")
            document.querySelector(".numero").classList.remove("zero")
            
        }
        if(NumeroValor>0){
            document.querySelector(".numero").classList.add("positivo")
            document.querySelector(".numero").classList.remove("negativo")
            document.querySelector(".numero").classList.remove("zero")
        }

        if(NumeroValor==0){
            document.querySelector(".numero").classList.add("zero")
            document.querySelector(".numero").classList.remove("negativo")
            document.querySelector(".numero").classList.remove("positivo")

        }
    
    }  

    