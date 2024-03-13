import { useState, useEffect } from "react";
import Watch from "./Watch";
import { addToLs, getStoredCart } from "../../utilits/localstorage";
import Cart from "./cart/Cart";

const Watches = () => {
    const [watches, setWatches] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("watches.json")
        .then((res) => res.json())
        .then((data) => setWatches(data));
    }, []);

    useEffect(() => {
        const getStoredCarts = getStoredCart();
        const savedWatches = [];
        
        if (watches.length > 0) {
            for (const id of getStoredCarts) {
                const watch = watches.find((watch) => watch.id === id);
                if (watch) {
                    savedWatches.push(watch);
                }
            }
            setCart(savedWatches);
        }
    }, [watches]);

    const handleAddToCart = (watch) => {
        const newCart = [...cart, watch];
        setCart(newCart);
        addToLs(watch.id);
    };

    return (
        <div>
            <h1>Total Watch: {watches.length}</h1>
            <Cart cart={cart}></Cart>
            <div className="main-watches">
                {watches.map((watch) => (
                    <Watch
                        key={watch.id}
                        watch={watch}
                        handleAddToCart={handleAddToCart}
                    ></Watch>
                ))}
            </div>
        </div>
    );
};

export default Watches;
