const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");

const jump = () => {
  if (mario.classList != "jump") {
    mario.classList.add("jump");

    setTimeout(() => {
      mario.classList.remove("jump");
    }, 500);
  }
};

const loop = setInterval(() => {
  const pipePositionX = pipe.offsetLeft;
  const marioPositionY = Number(
    window.getComputedStyle(mario).getPropertyValue("bottom").replace("px", "")
  );

  const cloudsPositionX = clouds.offsetLeft;

  if (pipePositionX <= 120 && pipePositionX > 0 && marioPositionY < 100) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePositionX}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPositionY}px`;

    mario.src = "./imgs/game-over.png";
    mario.style.width = "100px";
    mario.style.marginLeft = "20px";

    clouds.style.animation = "none";
    clouds.style.left = `${cloudsPositionX}px`;

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
