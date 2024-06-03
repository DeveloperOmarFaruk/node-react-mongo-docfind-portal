import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import React, { useEffect, useState } from "react";
import "./Order.css";

const CheckoutForm = ({ URL, appoinment, alert, navigate, setAppoinment }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const price = appoinment.appoinmentBookingFee;

  useEffect(() => {
    fetch(`${URL}/stripe-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [URL, price]);

  const handleSubmitStripe = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    setProcessing(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: appoinment.appoinmentName,
            email: appoinment.email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError.message);
    } else {
      setCardError("");
      setProcessing(false);

      const appoinmentPayment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transitions: paymentIntent.client_secret.slice("_secret")[0],
        name: appoinment.appoinmentName,
        email: appoinment.email,
        phone: appoinment.appoinmentPhone,
      };

      fetch(`${URL}/appoinments/${appoinment._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appoinmentPayment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.matchedCount > 0) {
            alert.show("Your Payment Successful");
            navigate(`/my-appoinment`);
            setSuccess(true);
            setAppoinment({});
          }
        });
    }
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmitStripe} className="stripe-form">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#273746 ",
                  "::placeholder": {
                    color: "#273746 ",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />

          {processing ? (
            <div className="spinner-border text-warning mt-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button
              type="submit"
              className="btn btn-warning pt-1 pb-1 pe-2 ps-2 m-5 ms-0"
              disabled={!stripe || success === true}
              style={{ margin: "3rem" }}
            >
              Pay {price} Taka
            </button>
          )}
        </form>
        <div>{cardError && <p className="text-danger">{cardError}</p>}</div>
      </div>
    </>
  );
};

export default CheckoutForm;
