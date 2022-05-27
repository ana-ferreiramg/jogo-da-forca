// tabuleiro do jogo
// tracinhos para a palavra secreta (dashes)
// A página deve ter os traços indicando cada letra da palavra, separados por espaço
// desenhar boneco
// desenhar forca
let canvas = document.querySelector('#hangman-canvas');

function forca() {
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    // linha vertical esquerda
    let verticalEsquerda = new Path2D();
    ctx.fillStyle = '#0a3871';
    verticalEsquerda.rect(50, 30, 5, 200);
    ctx.fill(verticalEsquerda);

    // linha horizontal inferior
    let horizontalInferior = new Path2D();
    ctx.fillStyle = '#0a3871';
    horizontalInferior.rect(10, 225, 230, 5);
    ctx.fill(horizontalInferior);

    //linha horizontal superior
    let horizontalSuperior = new Path2D();
    ctx.fillStyle = '#0a3871';
    horizontalSuperior.rect(50, 30, 150, 5);
    ctx.fill(horizontalSuperior);

    //linha vertical direita
    let verticalDireita = new Path2D();
    ctx.fillStyle = '#0a3871';
    verticalDireita.rect(200, 30, 5, 20);
    ctx.fill(verticalDireita);
  } else {
    alert(`Seu navegador não suporta o canvas! :(`);
  }
}

function hangman(mistakes) {
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');

    switch (mistakes) {
      case 1:
        let cabeca = new Path2D();
        ctx.strokeStyle = '#0a3871';
        ctx.lineWidth = 5;
        cabeca.moveTo(223, 70);
        cabeca.arc(203, 70, 20, 0, 2 * Math.PI);
        ctx.stroke(cabeca);

        let boca = new Path2D();
        ctx.strokeStyle = '#0a3871';
        ctx.lineWidth = 3;
        boca.moveTo(210, 82);
        boca.arc(203, 82, 7, 0, Math.PI, true);
        ctx.stroke(boca);

        let olhoEsquerdo = new Path2D();
        ctx.strokeStyle = '#0a3871';
        ctx.lineWidth = 3;
        olhoEsquerdo.moveTo(200, 65);
        olhoEsquerdo.arc(195, 65, 4, 0, Math.PI * 2, true);
        ctx.stroke(olhoEsquerdo);

        let olhoDireito = new Path2D();
        ctx.strokeStyle = '#0a3871';
        ctx.lineWidth = 3;
        olhoDireito.moveTo(215, 65);
        olhoDireito.arc(210, 65, 4, 0, Math.PI * 2, true);
        ctx.stroke(olhoDireito);
        break;
      case 2:
        // corpo
        let corpo = new Path2D();
        ctx.strokeStyle = '#0a3871';
        ctx.lineWidth = 5;
        corpo.moveTo(203, 90);
        corpo.lineTo(200, 180);
        ctx.stroke(corpo);
        break;
      case 3:
        // braço esquerdo
        let bracoEsquerdo = new Path2D();
        ctx.strokeStyle = '#0a3871';
        ctx.lineWidth = 5;
        bracoEsquerdo.moveTo(180, 120);
        bracoEsquerdo.lineTo(203, 90);
        ctx.stroke(bracoEsquerdo);
        break;
      case 4:
        // braço direito
        let bracoDireito = new Path2D();
        ctx.strokeStyle = '#0a3871';
        ctx.lineWidth = 5;
        bracoDireito.moveTo(225, 120);
        bracoDireito.lineTo(203, 90);
        ctx.stroke(bracoDireito);
        break;
      case 5:
        // perna esquerda
        let pernaEsquerda = new Path2D();
        ctx.strokeStyle = '#0a3871';
        ctx.lineWidth = 5;
        pernaEsquerda.moveTo(185, 200);
        pernaEsquerda.lineTo(200, 178);
        ctx.stroke(pernaEsquerda);
        break;
      case 6:
        // perna direita
        let pernaDireita = new Path2D();
        ctx.strokeStyle = '#0a3871';
        ctx.lineWidth = 5;
        pernaDireita.moveTo(215, 200);
        pernaDireita.lineTo(200, 178);
        ctx.stroke(pernaDireita);
        break;
      default:
        alert('Você perdeu!');
    }
  } else {
    alert(`Seu navegador não suporta o canvas! :(`);
  }
}

export { forca, hangman };
