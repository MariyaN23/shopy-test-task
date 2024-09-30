import {ProductWithCount} from "../redux/cart/cartReducer";
import {loadStripe} from "@stripe/stripe-js";

export const makePayment = async (itemsInCart: ProductWithCount[]) => {
    const stripe = await loadStripe("pk_test_51Q2u9203aO49S2nL7RuZ2jGFJXtSlYKo2im1YME0HgNQAvvBKVR4ACRdCTsfgrIgcj6rHdGf2ybxCfMs8c3CGMVE00ZXqn86z8")
    const body = {
        products: itemsInCart
    }
    const headers = {
        "Content-Type": "application/json"
    }
    /*const response = await fetch(`http://localhost:5000/stripe/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })*/
    const response = await fetch(`https://shopy-test-task-back.onrender.com/stripe/create-checkout-session`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })

    const session = await response.json()
    const result = await stripe!.redirectToCheckout({
        sessionId: session.id
    })

    if (result.error) {
        console.log(result.error)
    }
}