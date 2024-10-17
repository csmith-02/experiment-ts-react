import { CartItem } from "../model/models"

type Props = {
    item: CartItem,
}

export default function CartItemComponent({ item }: Props) {

    return (
        <div className="flex w-2/5 p-2">
            <div className="flex items-center justify-evenly w-full">
                <img alt="item image" src={`${item.item.img}`} className="size-[200px]"/>
                <h1 className="text-3xl">{item.item.name}</h1>
                <h1 className="text-3xl">Qty: {item.quantity}</h1>
            </div>
        </div>
    )
}