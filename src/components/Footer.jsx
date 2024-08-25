import { FaPaperPlane } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="h-[620px] bg-gray-950 flex flex-col items-center justify-center gap-5">
                <div className="flex flex-col text-white text-center gap-4">
                    <h1 className="font-bold text-[40px]">Start for your first 30 days.</h1>
                    <p className="text-[18px]">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Type your e-mail address"
                            className="h-[65px] w-[468px] text-black px-3 outline-none text-lg"
                        />
                        <button className="h-[65px] w-[180px] bg-red-500 uppercase">
                            Get started
                        </button>
                    </div>
                </div>
                <div className="border border-gray-800 w-[85%] my-4"></div>
                <div className="flex justify-between gap-10 w-[85%]">
                    <div className="flex flex-col gap-2 w-[400px]">
                        <h1 className="text-white text-[20px] font-bold">
                            Questions? Call 0850-380-6444
                        </h1>
                        <p className="text-gray-500 text-[18px]">
                            Format for custom post types that are not book or you can use else
                            if to specify a second post type the same way as above.
                        </p>
                        <select
                            name=""
                            id=""
                            className="w-[200px] p-3 text-gray-800 outline-none"
                        >
                            <option value="" defaultChecked>
                                Language
                            </option>
                            <option value="">English</option>
                            <option value="">Turkish</option>
                            <option value="">Việt Nam</option>
                        </select>
                    </div>
                    <div className="text-gray-500 flex flex-col gap-2">
                        <h1 className="text-[20px] font-bold text-red-600 uppercase">
                            Play show
                        </h1>
                        <ul className="flex flex-col gap-2">
                            <Link>Play show</Link>
                            <Link>Devices</Link>
                            <Link>Tips</Link>
                            <Link>Contact</Link>
                            <Link>Legal Notices</Link>
                            <Link>Our Terms</Link>
                        </ul>
                    </div>
                    <div className="text-gray-500 flex flex-col gap-2">
                        <h1 className="text-[20px] font-bold text-red-600 uppercase">
                            Support
                        </h1>
                        <ul className="flex flex-col gap-2">
                            <Link>HelpCenter</Link>
                            <Link>FAQ</Link>
                            <Link>Account</Link>
                            <Link>Privacy Policy</Link>
                            <Link>Media Center</Link>
                            <Link>Support</Link>
                        </ul>
                    </div>
                    <div className="text-white w-[400px] flex flex-col gap-2">
                        <h1 className="text-[20px] font-bold text-red-600 uppercase">
                            Newsletter
                        </h1>
                        <p className="text-gray-500">
                            Format for custom post types that are not book or you can use else
                            if to specify a second post type the same way as above.
                        </p>
                        <form action="" className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="p-3 border border-gray-800 bg-transparent outline-none text-gray-500"
                            />
                            <button className="p-3 text-center bg-red-600 uppercase font-semibold flex items-center justify-center gap-2 hover:bg-transparent border border-red-600 transition duration-500">
                                <FaPaperPlane />
                                Submit now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center bg-black text-gray-500 py-5">
                    © 2024 Play Show. Product belongs to Tran Huu Hieu.
                </p>
            </div>
        </>
    )
}

export default Footer
