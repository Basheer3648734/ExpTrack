import Logo from "../logo/logo"
import  Image from 'next/image'
import Link from 'next/link'
export default function Navbar(){

    return (
        < nav className=" my-[20px] flex flex-row  items-center justify-between" >
        <Logo />
            {/* <Link href="#"><a className="flex items-center border-hidden border-transparent overflow-hidden rounded-md "><p className="inline-block bg-Blue text-[#ffffff] px-[15px] py-[5px] ">Sign In with </p><Image width="35px" height="35px" src="/images/google-logo.png"/></a></Link> */}
      </nav >
    )
}