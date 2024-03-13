const getStoredCart = () => {
    const storageCart = localStorage.getItem('cart');
    if (storageCart) {
        return JSON.parse(storageCart);
    } else {
        return [];
    }
}

const saveCartToLs = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLs = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLs(cart);
}

export { addToLs,getStoredCart };
