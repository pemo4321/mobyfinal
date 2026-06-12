var params = new URLSearchParams(window.location.search);

function sendTo(url){
    // POPRAWKA: Usunięto ukośnik "/" z początku i dodano końcówkę ".html"
    location.href = url + '.html?' + params;
}

document.querySelectorAll(".bottom_element_grid").forEach((element) => {
    element.addEventListener('click', () => {
        sendTo(element.getAttribute("send"))
    })
})

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) {
        return 1;
    }
  
    if (/android/i.test(userAgent)) {
        return 2;
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 3;
    }
  
    return 4;
}
  
if (getMobileOperatingSystem() == 2){
    document.querySelector(".bottom_bar").style.height = "70px"
}
window.addEventListener("DOMContentLoaded", () => {
    const userImage = localStorage.getItem("userImage");

    if (userImage) {
        document.querySelector(".id_own_image").style.backgroundImage =
            `url('${userImage}')`;
    }
});
