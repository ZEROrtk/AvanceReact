import { useState } from 'react'
import { Link } from 'react-scroll'
import {FaTimes} from 'react-icons/fa'
import { CiMenuFries } from 'react-icons/ci'

const Navbar = () => {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
   
    const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-600 transition">
        <ul className="text-center text-x1 p-20">
            <Link spy={true} smooth={true} to="Home">
                <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-700 hover:rounded">Home</li>
            </Link>
            <Link spy={true}smooth={true} to="Catalogo">
                <li className="my-4 py-4 border-b border-slate-700 hover:bg-slate-7 spy{}00 hover:rounded">Catalogo</li>
            </Link>
        </ul>
    </div>
    </>
  return (
    <nav>
        <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-4">
            <div className="flex items-center flex-1">
                <span className="text-3x1 font-bold cursor-pointer hover:text-fuchsia-600">ZeroStore</span>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
                    <Link spy={true} smooth={true}to="Home">
                    <li className="hover:text-fuchsia-600 transition cursor-pointer">Home</li>
                    </Link>
                    <Link spy={true} smooth={true} to="Catalogo">
                    <li className=" hover:text-fuchsia-600 transition cursor-pointer">Catalogo</li>
                    </Link>
                </ul>
                </div>
            </div>
            <div>
                {click && content}
            </div>
            <button className="block sm:hidden transtion" onClick={handleClick}>
                {click ? <FaTimes/> : <CiMenuFries/>}
            </button>
        </div>
    </nav>
  )
 }

export default Navbar;