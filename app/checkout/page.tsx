// app/checkout/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCart } from "@/context/CartContext";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  zip: z.string().min(1, "ZIP is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
  payment: z.enum(["e-money", "cash"]),
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
}).refine((data) => data.payment === "cash" || (data.eMoneyNumber && data.eMoneyPin), {
  message: "Required for e-Money",
  path: ["eMoneyNumber"],
});

type FormData = z.infer<typeof schema>;

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const [showThankYou, setShowThankYou] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const paymentMethod = watch("payment");

  const onSubmit = () => {
    setShowThankYou(true);
    setTimeout(() => {
      clearCart();
      window.location.href = "/";
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <Link href="/" className="text-gray-500 hover:text-orange-500 text-sm">
          Go Back
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 grid md:grid-cols-3 gap-8">
        <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-2 bg-white p-8 rounded-lg">
          <h1 className="text-3xl font-bold mb-8">CHECKOUT</h1>

          {/* Billing */}
          <div className="mb-8">
            <h2 className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-4">
              BILLING DETAILS
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1">Name</label>
                <input {...register("name")} className="w-full border p-3 rounded-lg" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Email</label>
                <input {...register("email")} type="email" className="w-full border p-3 rounded-lg" />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Phone</label>
                <input {...register("phone")} className="w-full border p-3 rounded-lg" />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="mb-8">
            <h2 className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-4">
              SHIPPING INFO
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-1">Address</label>
                <input {...register("address")} className="w-full border p-3 rounded-lg" />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-1">ZIP</label>
                  <input {...register("zip")} className="w-full border p-3 rounded-lg" />
                  {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">City</label>
                  <input {...register("city")} className="w-full border p-3 rounded-lg" />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">Country</label>
                  <input {...register("country")} className="w-full border p-3 rounded-lg" />
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-4">
              PAYMENT DETAILS
            </h2>
            <div className="space-y-4">
              <div className="flex gap-8">
                <label className="flex items-center">
                  <input type="radio" value="e-money" {...register("payment")} className="mr-2" />
                  e-Money
                </label>
                <label className="flex items-center">
                  <input type="radio" value="cash" {...register("payment")} className="mr-2" />
                  Cash on Delivery
                </label>
              </div>

              {paymentMethod === "e-money" && (
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-1">e-Money Number</label>
                    <input {...register("eMoneyNumber")} className="w-full border p-3 rounded-lg" />
                    {errors.eMoneyNumber && <p className="text-red-500 text-xs mt-1">{errors.eMoneyNumber.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1">e-Money PIN</label>
                    <input {...register("eMoneyPin")} type="password" className="w-full border p-3 rounded-lg" />
                    {errors.eMoneyPin && <p className="text-red-500 text-xs mt-1">{errors.eMoneyPin.message}</p>}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-orange-500 text-white py-3 uppercase font-bold hover:bg-orange-400"
          >
            CONTINUE & PAY
          </button>
        </form>

        {/* Summary */}
        <div className="bg-gray-100 p-8 rounded-lg h-fit">
          <h2 className="text-xl font-bold mb-6">SUMMARY</h2>
          {cart.map((item: any) => (
            <div key={item.id} className="flex justify-between mb-4 items-center">
              <div className="flex gap-4">
                <Image
                  src={`/assets/product-${item.slug}/desktop/image-product.jpg`}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="rounded-lg"
                />
                <div>
                  <p className="font-bold text-sm">{item.name.split(" ").slice(0, 2).join(" ")}</p>
                  <p className="text-sm text-gray-500">$ {item.price}</p>
                </div>
              </div>
              <p className="text-sm font-medium">x{item.quantity}</p>
            </div>
          ))}
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">TOTAL</span>
              <span className="font-bold">$ {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">SHIPPING</span>
              <span className="font-bold">$ 50</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">VAT (20%)</span>
              <span className="font-bold">$ {(total * 0.2).toFixed(0)}</span>
            </div>
            <div className="flex justify-between text-orange-500 mt-4">
              <span className="font-bold">GRAND TOTAL</span>
              <span className="font-bold">$ {(total + 50).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
          <div className="bg-white p-8 rounded-lg max-w-md w-full text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
              Checkmark
            </div>
            <h2 className="text-3xl font-bold mb-4">THANK YOU<br />FOR YOUR ORDER</h2>
            <p className="text-gray-600 mb-8">
              You will receive an email confirmation shortly.
            </p>
            <button
              onClick={() => window.location.href = "/"}
              className="w-full bg-orange-500 text-white py-3 uppercase font-bold hover:bg-orange-400"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      )}
    </div>
  );
}