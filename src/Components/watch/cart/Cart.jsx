import PropTypes from 'prop-types'; 

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
             <h1>Total Cart:{cart.length}</h1>
             <div style={{
                border:'2px solid blue',
                margin: '10px',
                padding: '10px',
                borderRadius:'10px',
             }}>
                {
                    cart.map((watch,index) => 
                            <div  key={index} style={{border:'2px solid black',borderRadius:'10px',marginTop:'10px'}}>
                               <h2>{watch.model}</h2>
                               <button onClick={() => handleRemoveFromCart(watch.id) } >Remove</button>
                            </div>
                        )
                }
             </div>
        </div>
    );
};


Cart.propTypes = {
    cart : PropTypes.array.isRequired,
    handleRemoveFromCart:  PropTypes.func.isRequired
}


export default Cart;