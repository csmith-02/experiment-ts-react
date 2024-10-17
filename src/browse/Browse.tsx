import { items } from '../model/models'
import SingleItem from './SingleItem'

export default function Browse() {
    return (
        <div className={`item-container flex-1 p-8 flex flex-wrap gap-2 justify-evenly ${items.length > 3 ? 'overflow-y-scroll' : ''}`}>
            {items.map(item => (
                <SingleItem item={item} key={item.id}/>
            ))}
        </div>
    )
}