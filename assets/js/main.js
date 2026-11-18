// បង្ហាញសារពេលបញ្ចូល JavaScript ជោគជ័យ
console.log("Main.js loaded successfully!");

// មុខងារធ្វើបច្ចុប្បន្នភាពចំនួនទំនិញក្នុង Bag នៅលើ Navbar
function updateBagCount() {
    let cart = JSON.parse(localStorage.getItem('lh_cart')) || [];
    let totalCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    const bagCountElem = document.getElementById('bagCount');
    if (bagCountElem) {
        bagCountElem.innerText = totalCount;
    }
}

// ហៅមុខងារ updateBagCount ពេលទំព័រត្រូវបានផ្ទុកទិន្នន័យរួច
document.addEventListener("DOMContentLoaded", () => {
    updateBagCount();
});