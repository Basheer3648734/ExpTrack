import Image from "next/image"
import Link from "next/link"
import Layout from "../components/layout/layout"
import Navbar from "../components/navbar/navbar"

export default function Home() {
  return (
    <Layout>
      <Navbar/>
      <section className="text-center h-[60vh] mt-[20vh]" >
        <p className="font-[700] text-[2rem] md:text-[2.5rem] lg:text-[3rem] mb-[1rem] opacity-[80%]">Let’s embrace accountability</p>
        <p className="w-[100%] m-auto md:w-[90%] lg:w-[65%]">In the world of inflation, where money gets spent before earning, it is very important to keep track of our expenses. we are here to help you track your expenses with loosing a Penny.</p>
        <div className="inline-block margin-auto mt-[2rem]">

        <Link href="#"><a className="flex items-center border-hidden border-transparent overflow-hidden rounded-md margin-auto"><p className="inline-block bg-Blue text-[#ffffff] px-[45px] py-[5px] ">Sign In with </p><Image width="35px" height="35px" src="/images/google-logo.png" /></a></Link>
        </div>
      </section>
    </Layout>
  )
}
