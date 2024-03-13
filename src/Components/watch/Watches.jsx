import { useState,useEffect } from "react";
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


    useEffect(() =>{
        // console.log(watches.length)
        if(watches.length > 0 ){
            const getStoredCarts = getStoredCart();
            // console.log(getStoredCarts,watches)
            const saveCart = [];
            for(const id of getStoredCarts){
                console.log(id)
                const watch = watches.find(watch => watch.id === id)
                if(watch){
                    saveCart.push(watch);
                }
            }
            console.log('saved cart',saveCart)
            setCart(saveCart)

        }
    },[watches]);


    const handleAddToCart = (watch) => {
            const newCart = [...cart,watch];
            setCart(newCart);
            addToLs(watch)
            // console.log(watch)
    };
    return (
       <div>
            <h1>Total Watch: {watches.length}</h1>
            <Cart cart={cart} ></Cart>
            <div className="main-watches">
                {watches.map((watch) => (
                <Watch 
                    key={watch.id} 
                    watch={watch}
                    handleAddToCart = {handleAddToCart}
                ></Watch>
                ))}
             </div>
       </div>
    );
};

export default Watches;