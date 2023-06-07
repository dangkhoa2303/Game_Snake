let snake, food;

function setup() {
   createCanvas(WITDH, HEIGHT);
   newGame();
}

function draw() {
   background(0);
   if(!snake.isDead){
      drawSnake();
   } else {
      newGame()
   }
}

function drawSnake() {
   // update SNAKE_SPEED khung
   if(frameCount % SNAKE_SPEED == 0)
   {
      snake.update();
   }
   //
   // textSize(15);
   // text("Score: " + snake.length, 0, 15);
   food.show();
   snake.show();

   // Xử lý khi rắn ăn thức ăn
   if(snake.head.x == food.x && snake.head.y == food.y){
      eatFood();
   }
}

function newGame() {
   snake = new Snake();
   food = new Food();
}

function eatFood() {
   snake.length++;
   food.newFood();
}

function keyPressed() {
   if (keyCode == UP_ARROW && snake.vel.y != 1) {
      snake.vel.y = -1;
      snake.vel.x = 0;
   } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
      snake.vel.y = 1;
      snake.vel.x = 0;
   }  else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
      snake.vel.y = 0;
      snake.vel.x = -1;
   } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
      snake.vel.y = 0;
      snake.vel.x = 1;
   }
}

