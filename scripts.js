let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (
    miSrc ===
    "https://design.firefox.com/product-identity/firefox-nightly/firefox-logo-nightly.png"
  ) {
    miImage.setAttribute(
      "src",
      "https://www.einnova.com/wp-content/uploads/2017/02/Mozilla-Firefox-Historia.png"
    );
  } else {
    miImage.setAttribute(
      "src",
      "https://design.firefox.com/product-identity/firefox-nightly/firefox-logo-nightly.png"
    );
  }
};
let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
function estableceNombreUsuario() {
  let miNombre = prompt("Introduzca su nombre.");
  if (!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem("nombre", miNombre);
    miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
  }
}

if (!localStorage.getItem("nombre")) {
  estableceNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem("nombre");
  miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
}
miBoton.onclick = function () {
  estableceNombreUsuario();
};
