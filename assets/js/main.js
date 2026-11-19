// បង្ហាញសារពេលបញ្ចូល JavaScript ជោគជ័យ
console.log("Main.js loaded successfully!");

// មុខងារធ្វើបច្ចុប្បន្នភាពចំនួនទំនិញក្នុង Bag នៅលើ Navbar
function updateBagCount() {
  let cart = JSON.parse(localStorage.getItem("lh_cart")) || [];
  let totalCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const bagCountElem = document.getElementById("bagCount");
  if (bagCountElem) {
    bagCountElem.innerText = totalCount;
  }
}

// ហៅមុខងារ updateBagCount ពេលទំព័រត្រូវបានផ្ទុកទិន្នន័យរួច
document.addEventListener("DOMContentLoaded", () => {
  updateBagCount();
});

document.addEventListener("click", (e) => {
  const openBtn = e.target.closest('[data-bs-toggle="drawer"]');
  if (openBtn) {
    const target = openBtn.getAttribute("data-bs-target");
    const dialog = document.querySelector(target);
    if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
    }
  }

  const closeBtn = e.target.closest('[data-bs-dismiss="drawer"]');
  if (closeBtn) {
    const dialog = closeBtn.closest("dialog");
    if (dialog && typeof dialog.close === "function") {
      dialog.close();
    }
  }

  // ចុចក្រៅ dialog (លើ backdrop) ដើម្បីបិទ
  if (e.target.tagName === "DIALOG") {
    e.target.close();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const carouselEl = document.getElementById("carouselExampleInterval");
  const toggleBtn = document.getElementById("carouselToggleBtn");

  if (!carouselEl || typeof bootstrap === "undefined" || !bootstrap.Carousel) return;

  const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl, {
    interval: 2000,
    ride: "carousel",
    pause: false
  });

  carousel.cycle();

  if (toggleBtn) {
    let isPaused = false;
    toggleBtn.addEventListener("click", () => {
      if (isPaused) {
        carousel.cycle();
        toggleBtn.textContent = "Pause";
        toggleBtn.setAttribute("aria-label", "Pause");
        isPaused = false;
      } else {
        carousel.pause();
        toggleBtn.textContent = "Play";
        toggleBtn.setAttribute("aria-label", "Play");
        isPaused = true;
      }
    });
  }
});
