// Update total price when selecting a service
const serviceDropdown = document.getElementById('service-dropdown');
const totalPriceElement = document.getElementById('total-price');

serviceDropdown.addEventListener('change', function () {
  const selectedOption = serviceDropdown.options[serviceDropdown.selectedIndex];
  const price = selectedOption.getAttribute('data-price');
  totalPriceElement.textContent = `$${price}`;
});

// Show payment section when proceeding to payment
function openPayment() {
  const paymentSection = document.getElementById('payment-section');
  paymentSection.classList.remove('hidden');
}

// Placeholder for payment confirmation
function confirmBooking() {
  alert("Thank you! Your booking is confirmed.");
  // Redirect or refresh the page after confirmation
  window.location.reload();
}
