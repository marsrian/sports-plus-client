import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckoutForm";

const Payment = () => {
  const selectClass = useLoaderData();
  console.log(selectClass);
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  return (
    <div className="w-full px-4 md:px-8">
      <h2 className="text-center text-3xl font-bold text-blue-400 my-3">~~ Payment ~~</h2>
      <p className="text-center text-xl">Please Pay Carefully</p>
      <Elements stripe={stripePromise}>
        <CheckOutForm
        className="mt-4"
        sportsName ={selectClass.className}
          price={selectClass.price}
          id={selectClass._id}
          selectClassId={selectClass.selectClassId}
        ></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
