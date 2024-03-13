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

const removeFromLs = id =>{
    const cart = getStoredCart();
    const remainingCart = cart.filter(idx => idx !== id );
    saveCartToLs(remainingCart);
}


export { addToLs,getStoredCart,removeFromLs };
