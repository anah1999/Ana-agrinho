let olhoX, olhoY;
let etapa = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("#FFECB3"); // fundo claro

  desenhaCenario();
  desenhaRosto();

  olhoX = map(mouseX, 0, width, 130, 170);
  olhoY = map(mouseY, 0, height, 130, 170);

  // Pupilas móveis
  fill("black");
  circle(olhoX, olhoY, 10);
  circle(olhoX + 100, olhoY, 10);

  mostraEtapa();

  if (mouseIsPressed) {
    if (mouseX < 200) etapa = 1;         // Campo
    else if (mouseX < 400) etapa = 2;    // Estrada
    else etapa = 3;                      // Cidade
  }
}

function desenhaRosto() {
  fill("#FFCC80");
  circle(200, 200, 300); // cabeça
  fill("white");
  circle(150, 150, 60); // olho esq
  circle(250, 150, 60); // olho dir
  fill("#8D6E63");
  triangle(200, 180, 170, 220, 220, 220); // nariz
  line(150, 270, 250, 250); // boca
}

function desenhaCenario() {
  // Campo
  fill("#AED581");
  rect(0, 0, 200, 400);
  fill("green");
  textSize(20);
  text("🌾 Campo", 50, 30);

  // Estrada
  fill("#FFF9C4");
  rect(200, 0, 200, 400);
  fill("black");
  text("🚚 Estrada", 230, 30);

  // Cidade
  fill("#90CAF9");
  rect(400, 0, 200, 400);
  fill("gray");
  text("🏪 Cidade", 450, 30);
}

function mostraEtapa() {
  textSize(18);
  fill("black");

  if (etapa == 1) {
    text("Etapa: Plantio e colheita!", 50, 370);
    text("🚜🌱", 100,50);
  } else if (etapa == 2) {
    text("Etapa: Transporte dos alimentos.", 200, 370);
    text("🛻🛣️",280,60);
  } else if (etapa == 3) {
    text("Etapa: Chegada ao mercado e consumo.", 400, 370);
    text("🚛🌾",451,60);
  } else {
    text("Clique no cenário para explorar o caminho do alimento!", 100, 370);
  }
}
