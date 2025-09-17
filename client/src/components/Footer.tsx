import Image from "next/image"
import Link from "next/link"

const Footer = () =>{
    return(
        <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-8 bg-gray-800 p-8 rounded-lg">
            <div className="flex flex-col gap-4 items-center md:items-start">

            <Link href="/" className="flex items-center">
            <Image
            src="/logo.png"
            alt="TrendFury"
            width={36}
            height={36}
            className="w-6 md:w-9 md:h-9"
            />
            <p className="hidden md:block text-md font-medium tracking-wider text-white">TRENDFURY</p>
            </Link>
            <p className="text-sm text-gray-200">13 2025 TrendFury</p>
            <p className="text-sm text-gray-200">All Rights Reserved</p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/">Homepage</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Terms Of Services</Link>
                <Link href="/">Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/">All Products</Link>
                <Link href="/">New Arrivals</Link>
                <Link href="/">Best Sellers</Link>
                <Link href="/">Salary</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Affiliate Programs</Link>
            </div>
        </div>
    )
}

export default Footer