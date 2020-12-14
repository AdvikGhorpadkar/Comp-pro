var backround = createSprite(200, 200);
backround.setAnimation("background.jpg_1");
backround.scale = 0.8;

var face_mask = createSprite(140, 207);
face_mask.setAnimation("shield-min (1).png_1");
face_mask.scale = 0.05;

var mask = createSprite(321, 212);
mask.setAnimation("mask3.1.png_1");
mask.scale = 0.14;

var sanitiser = createSprite(316, 108);
sanitiser.setAnimation("sanitiser2.png_1");
sanitiser.scale = 0.1;

var virus = createSprite(500, 200);
virus.setAnimation("covid2.png");
virus.scale = 0.1;
virus.velocityX = -2;
virus.rotation = 10;
virus.rotationSpeed = 2;

var player = createSprite(65, 220);
player.setAnimation("man png 2.png_1");
player.scale = 0.2;

function draw() {
  text("Game rules - click on all the accessories that you will need to be safe from", 5, 15);
  text(" the virus. You have 5 seconds to find 3 items. GOOD LUCK!!! ", 10, 30);
  textFont("times new roman");
  if (mousePressedOver(sanitiser)) {
    sanitiser.x = 500;
    virus.velocityX = -1.5;
    virus.rotationSpeed = 1.5;
    var san2 = createSprite(68, 228);
    san2.setAnimation("hand blue.png_1");
    san2.scale = 0.2;
  }
  if (mousePressedOver(mask)) {
    mask.x = 500;
    var mask_on_face = createSprite(51, 173);
    mask_on_face.setAnimation("mask on face.png_1");
    mask_on_face.scale = 0.2;
  }
  if (mousePressedOver(face_mask)) {
    face_mask.x = 500;
    var sh_face = createSprite(52, 158);
    sh_face.setAnimation("sh on face.png_1");
    sh_face.scale = 0.2;
  }
  if (virus.collide(player)) {
    var gameOver = createSprite(200, 200);
    gameOver.setAnimation("go.png_1");
    gameOver.scale = 0.6;
    virus.rotationSpeed = 0;
    var infect = createSprite(200, 75);
    infect.setAnimation("infect.jpg_1");
    infect.scale = 0.3;
  }
  
  if ((face_mask.x&&mask.x&&sanitiser.x)>400) {
    var win = createSprite(200, 180);
    virus.velocityX = 0;
    win.setAnimation("win.jpg_1");
  }
  drawSprites();
}