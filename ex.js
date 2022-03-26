function clica()
{
    var Anos  = window.document.getElementById("Idade");
    var res = window.document.getElementById("resposta")
    var resul = Number(Anos.value);

    if(resul >= 0 && resul < 15){
        res.innerHTML = (`Voce tem ${resul} anos voce é Criança`);
    }
   else if(resul >= 15 && resul < 30)
    {
        res.innerHTML = (`Voce tem ${resul} anos voce e Jovem`);
    }else if(resul >= 30 && resul < 60){
        res.innerHTML = (`Voce tem ${resul} anos voce e Adulto`);
    }else if(resul >= 60){
        res.innerHTML = (`Voce tem ${resul} anos voce e Idoso`);
    }
    
}