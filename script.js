const modeToggle = document.getElementById("mode-toggle");
const body = document.body;
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.onclick = () => {
  nav.classList.toggle("active");
};

modeToggle.onclick = () => {
  body.classList.toggle("dark");
  modeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
};
//typing text
const text = "Bringing comfort, taste, and cleanliness right to your doorstep."; // your one line

let index = 0;

function typeSingle() {
  document.querySelector(".typing-text").textContent = text.substring(0, index);
  index++;

  if (index > text.length) {
    index = 0; // restart typing
    setTimeout(typeSingle, 1); 
  } else {
    setTimeout(typeSingle, 50);
  }
}

typeSingle();




// Chef booking
let chefName = "";
let chefPrice = 0;

function openChefBooking(name, price) {
  chefName = name;
  chefPrice = price;
  document.getElementById("chef-booking-title").innerText = `Booking ${name} (₹${price}/Event)`;
  document.getElementById("chef-booking").style.display = "flex";
}
function closeChefBooking() {
  document.getElementById("chef-booking").style.display = "none";
}
function proceedChefPayment() {
  const date = document.getElementById("chef-date").value;
  const time = document.getElementById("chef-time").value;
  if (!date || !time) {
    alert("Please select date and time!");
    return;
  }
  closeChefBooking();
  window.location.href = "payment.html";
  setTimeout(() => {
    document.getElementById("confirmation").style.display = "flex";
  }, 2000);
}

// Maid booking
let maidName = "";
let maidPrice = 0;

function openMaidBooking(name, price) {
  maidName = name;
  maidPrice = price;
  document.getElementById("maid-booking-title").innerText = `Booking ${name} (₹${price}/hour)`;
  document.getElementById("maid-booking").style.display = "flex";
}
function closeMaidBooking() {
  document.getElementById("maid-booking").style.display = "none";
}
function proceedMaidPayment() {
  const date = document.getElementById("maid-date").value;
  const time = document.getElementById("maid-time").value;
  if (!date || !time) {
    alert("Please select date and time!");
    return;
  }
  closeMaidBooking();
  window.location.href = "payment.html";
  setTimeout(() => {
    document.getElementById("confirmation").style.display = "flex";
  }, 2000);
}

// Confirmation popup
function closeConfirm() {
  document.getElementById("confirmation").style.display = "none";
}

let selectedPayment = "";

function selectPayment(method) {
    selectedPayment = method;
    document.getElementById("selected-text").innerText = "Selected: " + method;
}

function confirmPayment() {
    if (selectedPayment === "") {
        alert("Please select a payment method!");
        return;
    }

    document.getElementById("payment-popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("payment-popup").style.display = "none";

    // Redirect back to home page
    window.location.href = "index.html";
}

function redirectTo(link) {
    window.location.href = link;
}

function showQR() {
    document.getElementById("qrBox").style.display = "block";
}

function goBack() {
    window.history.back();
}
