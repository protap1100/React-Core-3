import './watch.css'

const Watch = ({watch,handleAddToCart}) => {
    const {id,brand,price,model} = watch;
    return (
       
           
            <div className="watch-box">
                <h2>Id: {id}</h2>
                <h2>Brand : {brand}</h2>
                <h2>Brand : {model}</h2>
                <h3>Price : {price}</h3>
                <button onClick={() =>{handleAddToCart(watch)} }>Purchase Now</button>
            </div>
    );
};

export default Watch;