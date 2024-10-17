import { Link, useLocation } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import '../assets/styles.css'

export default function Header() {

    const path = useLocation()

    return <>
        <div className="h-[120px] flex items-center p-4 bg-[#171715] font-semibold text-xl">
            <nav className="flex items-center justify-between w-full gap-4 w-14/15">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <Link to={"/"}><img alt="shop logo" src="/shopping-logo.jpg" className="h-[120px] w-auto"/></Link>
                        <Link to={"/"}><h1 className="text-xl text-white font-bold">Generic Shopping App</h1></Link>
                    </div>
                    <ul className="ml-24 decoration-none flex gap-4 h-full font-bold text-white">
                        <li className={path.pathname === '/' ? 'text-[#e6a466]' : ''}><Link to={"/"}>Home</Link></li>
                        <li className={path.pathname === '/browse' ? 'text-[#e6a466]' : ''}><Link to={"/browse"}>Browse</Link></li>
                    </ul>
                </div>
                <Link to={"/cart"} className="flex text-white items-center text-2xl gap-3 py-2 px-4 rounded-lg bg-[#e6a466] hover:cursor-pointer rotate-container">
                    <h1>Cart</h1>
                    <FaShoppingCart className="rotate" />
                </Link>
            </nav>
        </div>
    </>
}