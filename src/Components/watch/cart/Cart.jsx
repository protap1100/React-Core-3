const Cart = ({cart}) => {
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
                    cart.map((bottle,index) => 
                            <div  key={index} style={{border:'2px solid black',borderRadius:'10px',marginTop:'10px'}}>
                               <h2>{bottle.model}</h2>
                            </div>
                        )
                }
             </div>
        </div>
    );
};

export default Cart;