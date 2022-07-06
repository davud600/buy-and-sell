import { useState } from 'react'
import Link from 'next/link'
import Modal from './Modal'
import SidebarMenu from './SidebarMenu'

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <nav className="top-0 z-10 py-2.5 bg-white shadow-lg fixed w-screen px-2">
      <div className="container flex items-center justify-center mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-sm font-bold cursor-pointer sm:text-xl whitespace-nowrap">
            Buy &amp; Sell
          </span>
        </Link>
        <div className="flex w-9/12 ml-2 sm:ml-4 md:order-2">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"></path>
              </svg>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-lg text-gray-900 bg-gray-200 border border-transparent rounded-lg focus:border-gray-300 outline-0 focus:bg-white w-1000"
              placeholder="Search..."
            />
          </div>
          <button
            data-collapse-toggle="mobile-menu-3"
            type="button"
            className="inline-flex items-center ml-2 text-gray-500 rounded-lg p sm:p-2 sm:ml-4 hover:bg-gray-200 focus:outline-none"
            aria-controls="mobile-menu-3"
            aria-expanded="false"
            onClick={() => setIsSidebarOpen(true)}>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
      <Modal open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <SidebarMenu />
      </Modal>
    </nav>
  )
}
