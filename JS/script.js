document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".bar");
  const menu2 = document.querySelector(".bar2");
  const menuList = document.querySelector("nav ul");

  function showMenu() {
    menuList.classList.add("showmenu");
    menu2.style.display = "block";
    menu.style.display = "none";
  }

  function hideMenu() {
    menuList.classList.remove("showmenu");
    menu.style.display = "block";
    menu2.style.display = "none";
  }

  menu.addEventListener("click", () => {
    showMenu();
  });

  menu2.addEventListener("click", () => {
    hideMenu();
  });

  menuList.addEventListener("click", (event) => {
    // Check if the clicked element is a navbar link (anchor tag)
    if (
      event.target.tagName === "A" &&
      event.target.classList.contains("nav-link")
    ) {
      hideMenu();
    }
  });

  // Check window width on resize
  window.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 900) {
      menu.style.display = "none";
      menu2.style.display = "none";
    } else {
      if (menuList.classList.contains("showmenu")) {
        menu2.style.display = "block";
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
        menu2.style.display = "none";
      }
    }
  });
});

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".pop-container").style.display = "block";
  }, 500); // Adjusted the delay to 500 milliseconds
});

document.querySelector("#cls-pop").addEventListener("click", function () {
  document.querySelector(".pop-container").style.display = "none";
});
