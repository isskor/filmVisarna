import React from "react";

const OrderDetails = () => {

    return(
        <div className="container OrderDetails">
            <div className="orderComplete">
                <h1>Your order is complete!</h1>
                <h2>Order Details:</h2>
                <p>Movie:</p>
                <p>Quantity:</p>
                <p>Total:</p>
            </div>
            <div className="orderconfirmation">
                <p>We have sent an orderconfirmation to your email to help you pick up your tickets when you arrive!</p>
            </div>
        </div>
    )
}  

export default OrderDetails;