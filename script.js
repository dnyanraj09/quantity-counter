document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.querySelector('.decrease');
    const increaseBtn = document.querySelector('.increase');
    const quantityInput = document.querySelector('.quantity-input');
  
    decreaseBtn.addEventListener('click', function() {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  
    increaseBtn.addEventListener('click', function() {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue < 10) { 
        quantityInput.value = currentValue + 1;
      }
    });
  });
  