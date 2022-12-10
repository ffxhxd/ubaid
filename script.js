let butn = document.getElementById("btn");
let imgg = document.getElementById("imgg");
let audioElement = new Audio(
  "Munni Badnaam Hui Darling (Female) - Dabangg 320 Kbps.mp3"
);

butn.addEventListener("click", () => {
  audioElement.play();
  imgg.style.transition = "all 250s ease-in-out";
  imgg.style.transform = "rotate(36000deg)";
});
