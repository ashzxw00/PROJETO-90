score =0; // a variavel score esta com o valor de 0 

function updateScore(){
    score = score+1; // quando chamar a função a variavel score aumentara para +1
    document.getElementById("score").innerHTML="Pontuação:"+score; // o valor da variavel score ira juntar com pontuação e o valor(1 ou mais)
}

function saveScore(){
    localStorage.setItem("score", score); // ira salvar no armazenamento local a variavel definida que é score
}

function nextPage(){
    window.location="Activity_2.html"; // quando apertar no botão vai redirecionar na pagina colocada(activity_2.html)
}
