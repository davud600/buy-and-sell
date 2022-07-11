import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function SidebarMenu() {
  const sidebarElement: any = useRef()

  useEffect(() => {
    const sidebarCurrent = sidebarElement.current
    sidebarCurrent.style.right = '-300px'

    setTimeout(() => {
      sidebarCurrent.style.right = '0'
    }, 0)
  }, [])

  return (
    <div
      ref={sidebarElement}
      className="absolute inset-y-0 right-0 z-10 m-0 transition-all bg-white sidebar-menu w-72">
      <div className="flex text-white bg-gray-800 h-44">
        <div className="relative h-100% px-10 w-screen">
          <Link href="/login">
            <span className="absolute self-end py-1 mb-5 text-lg font-semibold cursor-pointer bottom-8">
              Log In
            </span>
          </Link>
          <div className="absolute bottom-0 self-end mb-5 text-md">
            <span className="font-semibold text-gray-500">
              Dont have an account?{' '}
            </span>
            <Link href="/signup">
              <span className="font-semibold cursor-pointer">Sign up</span>
            </Link>
          </div>
        </div>
        {/* if logged in */}
      </div>
      <div className="flex flex-col divide-y-2">
        <div className="flex flex-col">
          <Link href="/">
            <div className="p-3 transition-colors cursor-pointer hover:bg-gray-200 focus:bg-gray-300">
              <span className="px-4"></span>
              <span className="text-sm">Discover</span>
            </div>
          </Link>
          {/* more options if logged in */}
        </div>
        <div className="flex flex-col">
          <Link href="/">
            <div className="p-3 transition-colors cursor-pointer hover:bg-gray-200">
              <span className="px-4"></span>
              <span className="text-sm">About us</span>
            </div>
          </Link>
          <Link href="/">
            <div className="p-3 transition-colors cursor-pointer hover:bg-gray-200">
              <span className="px-4"></span>
              <span className="text-sm">Terms and conditions</span>
            </div>
          </Link>
          <Link href="/">
            <div className="p-3 transition-colors cursor-pointer hover:bg-gray-200">
              <span className="px-4"></span>
              <span className="text-sm">Privacy Policy</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
