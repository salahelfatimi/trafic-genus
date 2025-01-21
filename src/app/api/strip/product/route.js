import Stripe from "stripe";

export async function GET(request) {
  const stripe = await new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const products = await stripe.products.list({limit:10,active:true});
    return new Response(JSON.stringify(products.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  const { productId } = await request.json();
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  try {
    const product = await stripe.products.retrieve(productId);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: product.default_price,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/google-marchand`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/google-marchand`,
    });
    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to create session:", error);
    return new Response(JSON.stringify({ error: "Failed to create session" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}