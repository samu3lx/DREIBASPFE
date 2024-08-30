function carnePP(duracao) {
    if(duracao > = 6) {
        return 650;
       }else{
        return 400;

    }
}

function cervejaPP(duracao){
    if(duracao> = 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao) {
    if(duracao > = 6){
        return 1500;
    }else{
        returne 1000;
        
    }
}
 function calcular0 {
    const adultos = inptAdultos.value;
    const criancas = inptcriancas.value;
    const duracao = inputDuracao.value;
     
    const qdtTotalCarne = carnePP(duracao)*adultos+(carnePP(duracao)/2 * crianca);
    const qdtTotalCerveja = cervejaPP(duracao)*adultos;
    const qdtTotalBebidas = bebidasPP(duracao)*adultos+(bebidasPP(duracao)/2* criancas);
    resultado.innerHTML = `<h2 class= "result-info">Você vai precisar de:</h2>`
    resultado.innerHTML +=`
    <div class ="result-block">
    <img src="./assets/carne.svg"/>
    <p>${qdtTotalCarne/1000} Kg de Carne</p>
    </div>
    resultado.innerHTML +=`
    <img src="./assets/cerveja.svg"/>
    <p>${Math.ceil(qdtTotalCerveja/355)} latas de cerveja</p>
    </div>
    resultado.innerHTML +=`
    <div class ="result-block">
    <img src="./assets/refri.svg"/>
    <p>${Math.ceil(qdtTotalBebidas/2000)} garrafas e Bebidas</p>
    </div>
    </br>
    </br>
    </br>
    </b>
    </br>
    `
 }
    
 

}
