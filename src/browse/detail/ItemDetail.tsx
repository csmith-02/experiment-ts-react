import { Link, useParams, Navigate } from "react-router-dom"
import { items } from '../../model/models'

export default function ItemDetail() {

    const { itemId } = useParams()

    const item = items.find(item => item.id.toString() === itemId)

    if (!item) {
        Navigate({to: "/page-not-found"})
    }

    return <div className="flex-1 flex flex-col justify-center items-center font-semibold">
        <h1>{item?.name}</h1>
        <h1 className="max-w-[400px]">{item?.description}</h1>
        <h1>${item?.price}</h1>
        <br/>
        <br/>
        <h1>Note: This page is just for practice using slugs (i.e. dynamic urls)</h1>
        <br/>
        <Link to={"/browse"}><h1 className="text-4xl">&larr; <span className="hover:underline">Back</span></h1></Link>
    </div>
}