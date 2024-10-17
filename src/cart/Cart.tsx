import { useState } from "react"
import { CartItem } from "../model/models"
import { items } from "../model/models";
import CartItemComponent from "./CartItemComponent";

export default function Cart() {


    const [cartItems] = useState<CartItem[]>([
        {
            id: Date.now() + 1,
            item: items[0],
            quantity: 2
        },
        {
            id: Date.now() + 2,
            item: items[4],
            quantity: 1
        }
    ]); 

    const totalAmount: number = cartItems.reduce((prev, current) => {
        return prev + (current.item.price * current.quantity)
    }, 0)

    return (
        <>
            <div className="flex-1 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">Your Cart ({cartItems.length} items)</h1>
                {cartItems.map((item)=>(
                    <CartItemComponent item={item} />
                ))}
                <br/>
                <br/>
                <div>
                    <h1 className="text-xl">Subtotal: ${totalAmount.toFixed(2)}</h1>
                    <h1 className="text-xl">Total: ${(totalAmount * 1.07).toFixed(2)}</h1>
                </div>
                <div>
                    <br/>
                    <button className="px-4 py-2 bg-[#e6a466] text-white rounded-lg text-xl">Checkout</button>
                </div>
            </div>
        </>
    )
}