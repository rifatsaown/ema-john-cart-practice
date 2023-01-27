import React from 'react';

const Cart = () => {
    return (
        <div className='pl-5 mt-5'>
            <h3 className='text-2xl font-bold text-center mb-9'>Order Summary</h3>
            <p>Selected Item : </p>
            <p>Total Price :</p>
            <p>Total Shiping: </p>
            <p>Tax + Vat : </p>
            <p className='text-lg font-semibold'>Grand Total : </p>
        </div>
    );
}

export default Cart;
