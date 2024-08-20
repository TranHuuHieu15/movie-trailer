import { Link } from "react-router-dom"
import { FaSearch, FaYoutube } from "react-icons/fa"
// import "../index.css"
function Header() {
    return (
        <div className="flex gap-4 bg-transparent items-center justify-around h-[50px]">
            <div className="flex items-center justify-center gap-10">
                <h1 className="font-bold text-3xl cursor-pointer flex items-center justify-between gap-3">
                    <FaYoutube className="text-red-500 text-4xl" />
                    Play Show
                </h1>
                <nav className="h-[50px] flex justify-center items-center gap-6 uppercase font-bold">
                    <Link className=" hover:text-red-500" to="/">
                        Home
                    </Link>
                    <Link className=" hover:text-red-500" to="/about">
                        About
                    </Link>
                    <Link className=" hover:text-red-500" to="/contact">
                        Contact
                    </Link>
                </nav>
            </div>
            <div className="flex gap-4">
                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-2 border-2 outline-none border-neutral-800 rounded-lg"
                    />
                    <button className="text-xl w-[40px] flex items-center justify-center hover:text-red-500">
                        <FaSearch />
                    </button>
                </div>
                <button className="uppercase hover:text-red-500">Login</button>
            </div>
        </div>
    )
}

export default Header
