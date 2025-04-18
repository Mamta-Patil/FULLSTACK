// import { NextResponse } from "next/server";
// import Stripe from "stripe";
// // import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(request) {
//   const { lineItems } = await request.json();
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: lineItems,
//     mode: "payment",
//     success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
//   });
//   return NextResponse.json({ sessionId: session.id });
// }



// import { NextResponse } from "next/server";
// import Stripe from "stripe";
import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  const { lineItems } = await request.json();
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
  });
  return NextResponse.json({ sessionId: session.id });
}
