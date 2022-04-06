function calcularMedia() {
    var nome = document.getElementById("nome").value;
  
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
  
    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    var mediaFinalizada = media.toFixed(1).replace(".", ",");
    imprimirResposta(nome, media, mediaFinalizada);
  }
  
  function imprimirResposta(nome, media, mediaFinalizada) {
    if (media == 10) {
      var resultado = document.getElementById("mediaFinal");
      var resposta =
        " Excelente " +
        nome +
        ". Sua média final foi " +
        mediaFinalizada +
        ". Aprovado(a) com distinçâo!";
      resultado.innerHTML = resposta;
    } else if (media >= 7) {
      var resultado = document.getElementById("mediaFinal");
      var resposta =
        " Você foi aprovado(a) " +
        nome +
        ". Sua média final foi " +
        mediaFinalizada +
        ".";
      resultado.innerHTML = resposta;
    } else {
      var resultado = document.getElementById("mediaFinal");
      var resposta =
        " Sua média final foi " +
        mediaFinalizada +
        ". Você foi reprovado " +
        nome +
        ". Se esforce mais no próximo ano. Você consegue.";
      resultado.innerHTML = resposta;
    }
  }
  