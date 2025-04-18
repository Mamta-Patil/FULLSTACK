// // import { loadStripe } from "@stripe/stripe-js";
// // export async function checkout ({lineItems})
// // {
// //     let stripepromise = null 
// //     let getstripe =  ({})=>{
// //         if(!stripepromise)
// //         {
// //             stripepromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
// //         }
// //         return stripepromise
// //     }
// //         const stripe = await getstripe()
// // await stripe.redirectToCheckout({
// //     mode:"payment",
// //     lineItems,
// //     successUrl : `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
// //     cencelUrl : window.location.orgin
// // })
    
// // }
// import { loadStripe } from "@stripe/stripe-js";

// export async function checkout({ lineItems }) {
//   let stripePromise = null;

//   const getStripe = () => {
//     if (!stripePromise) {
//       stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
//     }
//     return stripePromise;
//   };

//   const stripe = await getStripe();

//   await stripe.redirectToCheckout({
//     mode: "payment",
//     lineItems,
//     successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//     cancelUrl: `${window.location.origin}/cancel`,
//   });
// }



import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ lineItems }) {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lineItems }),
  });
  const { sessionId } = await response.json();

  const stripe = await stripePromise;
  await stripe.redirectToCheckout({
    sessionId,
  });
}