document.getElementById("shop-now-btn").addEventListener("click", function() {
  window.location.href = "carneckpillow/carneckpillow.html";
});

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let mainContent = document.getElementById("main-content");

function toggleSidebar() {
  sidebar.classList.toggle("open");
  mainContent.classList.toggle("sidebar-open");
  menuBtnChange();
}

closeBtn.addEventListener("click", toggleSidebar);

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}
