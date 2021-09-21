        //PEGANDO AS VARIÁVIES
let um = document.getElementById('um');
let dois = document.getElementById('dois');
let três = document.getElementById('três');
let quatro = document.getElementById('quatro');
let cinco = document.getElementById('cinco');
let useism = document.getElementById('seis');
let sete = document.getElementById('sete');
let oito = document.getElementById('oito');
let nove = document.getElementById('nove');
let x = document.getElementById('x');
let o = document.getElementById('o');
let empate = document.getElementById('empate');


            //FUNÇÃO PARA ADICONAR O 'X' OU 'O'
let number = 0;
function adicionar(element){
    if(element.innerHTML == ''){
        number ++
        if(number % 2 != 0){
            element.innerHTML = '<i class="fas fa-times"></i>';
            verificar();
        }else{
            element.innerHTML = '<i class="far fa-circle"></i>';
            verificar();
        } 
    }else{}
}

        //FUNÇÃO PARA VERIFICAR A VITÓRIA
function verificar(){
    setTimeout(() => {
        // OPÇÕES DE VITÓRIAS NA HORIZONTAL
        if(um.innerHTML != '' && um.innerHTML == dois.innerHTML && um.innerHTML == três.innerHTML){
            if(number % 2 != 0){//MESMO ESQUEMA DA FUNÇÃO DE COLOCAR O 'X' OU 'O', SE A VITÓRIA FOR COM O NÚMERO ÍMPAR, ENTÃO O JOGADOR X GANHOU, SE NÃO, A VITÓRIA É DO JOGADOR O.
                x.classList.toggle('mostrarVitória');
                recarregarJogo();
            }else{
                o.classList.toggle('mostrarVitória');
                recarregarJogo();
            }
        }
        else if(quatro.innerHTML != '' && quatro.innerHTML == cinco.innerHTML && quatro.innerHTML == seis.innerHTML){
            if(number % 2 != 0){//MESMO ESQUEMA DA FUNÇÃO DE COLOCAR O 'X' OU 'O', SE A VITÓRIA FOR COM O NÚMERO ÍMPAR, ENTÃO O JOGADOR X GANHOU, SE NÃO, A VITÓRIA É DO JOGADOR O.
                x.classList.toggle('mostrarVitória');
                recarregarJogo();
            }else{
                o.classList.toggle('mostrarVitória');
                recarregarJogo();
            }
        }
        else if(sete.innerHTML != '' && sete.innerHTML == oito.innerHTML && sete.innerHTML == nove.innerHTML){
            if(number % 2 != 0){//MESMO ESQUEMA DA FUNÇÃO DE COLOCAR O 'X' OU 'O', SE A VITÓRIA FOR COM O NÚMERO ÍMPAR, ENTÃO O JOGADOR X GANHOU, SE NÃO, A VITÓRIA É DO JOGADOR O.
                x.classList.toggle('mostrarVitória');
                recarregarJogo();
            }else{
                o.classList.toggle('mostrarVitória');
                recarregarJogo();
            }
        }


        // OPÇÕES DE VITÓRIAS NA VERTICAL
        else if(um.innerHTML != '' && um.innerHTML == quatro.innerHTML && um.innerHTML == sete.innerHTML){
            if(number % 2 != 0){//MESMO ESQUEMA DA FUNÇÃO DE COLOCAR O 'X' OU 'O', SE A VITÓRIA FOR COM O NÚMERO ÍMPAR, ENTÃO O JOGADOR X GANHOU, SE NÃO, A VITÓRIA É DO JOGADOR O.
                x.classList.toggle('mostrarVitória');
                recarregarJogo();
            }else{
                o.classList.toggle('mostrarVitória');
                recarregarJogo();
            }
        }
        else if(dois.innerHTML != '' && dois.innerHTML == cinco.innerHTML && dois.innerHTML == oito.innerHTML){
            if(number % 2 != 0){//MESMO ESQUEMA DA FUNÇÃO DE COLOCAR O 'X' OU 'O', SE A VITÓRIA FOR COM O NÚMERO ÍMPAR, ENTÃO O JOGADOR X GANHOU, SE NÃO, A VITÓRIA É DO JOGADOR O.
                x.classList.toggle('mostrarVitória');
                recarregarJogo();
            }else{
                o.classList.toggle('mostrarVitória');
                recarregarJogo();
            }
        }
        else if(três.innerHTML != '' && três.innerHTML == seis.innerHTML && três.innerHTML == nove.innerHTML){
            if(number % 2 != 0){//MESMO ESQUEMA DA FUNÇÃO DE COLOCAR O 'X' OU 'O', SE A VITÓRIA FOR COM O NÚMERO ÍMPAR, ENTÃO O JOGADOR X GANHOU, SE NÃO, A VITÓRIA É DO JOGADOR O.
                x.classList.toggle('mostrarVitória');
                recarregarJogo();
            }else{
                o.classList.toggle('mostrarVitória');
                recarregarJogo();
            }
        }

        // OPÇÕES DE VITÓRIAS NA DIAGONAL
        else if(um.innerHTML != '' && um.innerHTML == cinco.innerHTML && um.innerHTML == nove.innerHTML){
            if(number % 2 != 0){//MESMO ESQUEMA DA FUNÇÃO DE COLOCAR O 'X' OU 'O', SE A VITÓRIA FOR COM O NÚMERO ÍMPAR, ENTÃO O JOGADOR X GANHOU, SE NÃO, A VITÓRIA É DO JOGADOR O.
                x.classList.toggle('mostrarVitória');
                recarregarJogo();
            }else{
                o.classList.toggle('mostrarVitória');
                recarregarJogo();
            }
        }
        else if(três.innerHTML != '' && três.innerHTML == cinco.innerHTML && três.innerHTML == sete.innerHTML){
            if(number % 2 != 0){//MESMO ESQUEMA DA FUNÇÃO DE COLOCAR O 'X' OU 'O', SE A VITÓRIA FOR COM O NÚMERO ÍMPAR, ENTÃO O JOGADOR X GANHOU, SE NÃO, A VITÓRIA É DO JOGADOR O.
                x.classList.toggle('mostrarVitória');
                recarregarJogo();
            }else{
                o.classList.toggle('mostrarVitória');
                recarregarJogo();
            }
        }

        //CASO DER EMPATE
        else if(number == 9){
            empate.classList.toggle('mostrarVitória');
            recarregarJogo();
        }
    }, 100);
}
        //APÓS 2,5 SEGUNDOS DA REVELAÇÃO DO VITORIOSO, A PÁGINA IRÁ RECARREGAR
function recarregarJogo(){
    setTimeout(() => {
        location.reload();
    }, 2500);
}