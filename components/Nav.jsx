"use client"

import Link from "next/link"
import Image from "next/image"
import styles from '../styles/globals.css'
import { useState } from "react"

const Nav = () => {

  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2" >
        <Link href='/' className="flex gap-2 flex-center">
          <Image
            width={60}
            height={60}
            src="/assets/logo_white.png"
            alt="Promptopia Logo"
            className="svg-logo"
          />
          <p className="mt-2 logo_text inline-block align-middle">
            Code_Z
          </p>
        </Link>
        {/* Desktop Navigation */}
        <div className="sm:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <Link href="/location">Elhelyezkedés</Link>
            <Link href="/services">Szolgáltások</Link>
            <Link href="/prices">Árak</Link>
            <Link href="/contact">Kapcsolat</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
          <button
            onClick={() => setToggleDropdown((prev) => !prev)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>


          </button>
        </div>

      </div >
      {toggleDropdown && (
        <div className="space-y-1 px-3 pb-3 pt-2 sm:hidden">
          <ul className="text-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="">
              <Link
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                href="/location"
                onClick={() => setToggleDropdown(false)}
              >Elhelyezkedés</Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                href="/services"
                onClick={() => setToggleDropdown(false)}
              >Szolgáltások</Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                href="/prices"
                onClick={() => setToggleDropdown(false)}
              >Árak</Link>
            </li>
            <li>
              <Link
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                href="/contact"
                onClick={() => setToggleDropdown(false)}
              >Kapcsolat</Link>
            </li>
          </ul>
        </div>
      )}
    </nav >
  )
}

export default Nav
