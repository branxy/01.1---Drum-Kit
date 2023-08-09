const btns = document.querySelectorAll(".key");
btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const audio = document.querySelector(
      `audio[data-key="${btn.getAttribute("data-key")}"]`
    );
    btn.classList.add("active");
    audio.play();
    audio.addEventListener("ended", () => {
      btn.classList.remove("active");
    });
    audio.currentTime = 0;
  })
);

window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.code.slice(-1)}"]`);
  const button = document.querySelector(`.key[data-key="${e.code.slice(-1)}"]`);
  button.classList.add("active");
  audio.play();
  audio.addEventListener("ended", () => {
    button.classList.remove("active");
  });
  audio.currentTime = 0;
});
