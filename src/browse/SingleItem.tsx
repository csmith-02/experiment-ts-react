import { Item } from '../model/models'
import { Link } from 'react-router-dom'

type Props = {
    item: Item 
}

export default function SingleItem({ item }: Props) {
    return <div className="item-card w-1/4 h-1/2 p-4 bg-[#171715] rounded-lg flex flex-col items-center text-white mt-4">
        <img alt='item image' src={item.img} className='h-4/5 w-5/6'/>
        <div className='w-4/5 flex-1 flex flex-col'>
            <div className='flex-1'>
                <Link to={`/browse/${item.id}`}><h1 className='font-bold text-xl hover:cursor-pointer hover:text-[#e6a466] hover:underline'>{item.name}</h1></Link>
                <h1 className='text-[#e6a466]'>{item.description.length > 75 ? item.description.substring(0, 74) + "..." : item.description}</h1>
            </div>
            <div className='self-end flex justify-between w-full'>
                <h1>Price: ${item.price.toFixed(2)}</h1>
                <h1>Qty Remaining: {item.remaining}</h1>
            </div>
        </div>
    </div>
}