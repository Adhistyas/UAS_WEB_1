document.addEventListener("DOMContentLoaded", function () {
  const connectWA = document.getElementById("connectKontak");
  const scrollBtn = document.getElementById("connectBtn");
  const scrollTarget = document.getElementById("connect");

  connectWA.addEventListener("click", function () {
    window.open("https://wa.me/6281293277441", "_blank");
  });

  scrollBtn.addEventListener("click", function () {
    scrollTarget.scrollIntoView({ behavior: "smooth" });
  });

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyzCQUvX1R9icx85gYbjSPRYTEa9CTJwCPikT0rZm-IwPM5htie-grodPlUrSq2VgM/exec";

  const form = document.forms["seduh-coffee"];
  const btnKirim = document.querySelector(".btn-kirim");
  const btnLoading = document.querySelector(".btn-loading");
  const myAlert = document.querySelector(".my-alert");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    btnLoading.classList.remove("d-none");
    btnKirim.classList.add("d-none");

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        form.reset();

        form.classList.remove("was-validated");
        btnLoading.classList.add("d-none");
        btnKirim.classList.remove("d-none");

        myAlert.classList.remove("d-none");
        myAlert.classList.add("show");

        setTimeout(() => {
          myAlert.classList.remove("show");
          myAlert.classList.add("d-none");
        }, 5000);
        console.log("Success!", response);
      })
      .catch((error) => {
        btnLoading.classList.add("d-none");
        btnKirim.classList.remove("d-none");
        alert("Terjadi kesalahan. Silakan coba lagi.");
        console.error("Error!", error.message);
      });
  });
});
