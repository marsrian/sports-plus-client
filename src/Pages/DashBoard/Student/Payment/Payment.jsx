import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    // const price = parseFloat(total.toFixed(2))
    const priceData = useParams();
    const price = parseFloat(priceData);
    return (
        <div className="w-full">
            <h2 className="text-center text-3xl font-bold text-blue-400 my-3">Payment</h2>
            <p className="text-center text-xl">~~ Please Pay Carefully ~~</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm  price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;