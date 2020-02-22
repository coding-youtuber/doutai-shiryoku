require('../css/app.css');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var myText = new function () {
  this.x = 0;
  this.y = canvas.height / 2;

  this.xSpeed = 3;
  this.fontSize = 48;
  this.sentence = "動体視力テスト";

  this.draw = function () {
    this.x += this.xSpeed;

    if(this.x > canvas.width + this.sentence.length * this.fontSize) {
      this.x = 0;
    }

    ctx.fillStyle = "#000";
    ctx.font = this.fontSize + "px serif";
    ctx.textAlign = "right";
    ctx.fillText(this.sentence, this.x, this.y);

  }
}

function loop() {
  ctx.fillStyle = "#ccc";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  myText.draw();

  requestAnimationFrame(loop);
}

var sentences = [
  "作って学ぶプログラミング入門",
  "チャンネル登録をよろしくお願いします",
  "高評価ボタンもよろしくお願いします"
];

var myButton = document.getElementById("myButton");
var slowButton = document.getElementById("slowButton");
slowButton.style.display = "none";

var prev_index = 0;
var randomIndex = 0;

myButton.addEventListener("click", function () {
  this.value = "問題を変える";
  myText.xSpeed = 30;

  slowButton.style.display = "block";

  while (prev_index == randomIndex) {
    randomIndex = Math.floor(Math.random() * sentences.length);
  }

  myText.sentence = sentences[randomIndex];

  prev_index = randomIndex;
});

slowButton.addEventListener("click", function () {
  myText.xSpeed = 1;
});

loop();
