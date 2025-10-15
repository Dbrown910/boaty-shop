document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const cartContainer = document.querySelector('.cart-container');
    const checkboxes = document.querySelectorAll('input[name="mod"]');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartContainer) {
        cartContainer.addEventListener('click', () => {
            window.location.href = '/checkout';
        });
    }

    function updateCartCount() {
        if (cartCount) {
            cartCount.textContent = cart.length;
        }
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function initializeCheckboxStates() {
        checkboxes.forEach(checkbox => {
            if (cart.includes(checkbox.value)) {
                checkbox.checked = true;
            }
        });
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                if (!cart.includes(checkbox.value)) {
                    cart.push(checkbox.value);
                }
            } else {
                cart = cart.filter(item => item !== checkbox.value);
            }
            saveCart();
            updateCartCount();
        });
    });

    updateCartCount();
    initializeCheckboxStates();
});
