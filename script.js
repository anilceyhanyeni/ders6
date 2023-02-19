let akordiyonButonlar = document.getElementsByClassName("accordion");
let i; //<<undefined

for (i = 0; i < akordiyonButonlar.length; i++) {
  akordiyonButonlar[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}