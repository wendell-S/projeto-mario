const botaoTrailer = document.querySelector(".botao-trailer")
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal")
const linkDoVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";
const video = document.getElementById("video");

function alternarModal(){
    modal.classList.add("aberto");
}


botaoTrailer.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
    
});





