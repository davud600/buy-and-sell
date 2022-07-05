import Link from 'next/link'

export default function SidebarMenu({ onClose }: any) {
  return (
    <div className="fixed inset-y-0 right-0 z-10 m-0 bg-white w-72">
      <div className="text-white bg-gray-800 h-44">
        <button
          className="fixed right-0 mr-2 text-xl font-bold"
          onClick={onClose}>
          x
        </button>
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
            <div className="p-3 cursor-pointer hover:bg-gray-200">
              <span className="px-4"></span>
              <span className="text-sm">About us</span>
            </div>
          </Link>
          <Link href="/">
            <div className="p-3 cursor-pointer hover:bg-gray-200">
              <span className="px-4"></span>
              <span className="text-sm">Terms and conditions</span>
            </div>
          </Link>
          <Link href="/">
            <div className="p-3 cursor-pointer hover:bg-gray-200">
              <span className="px-4"></span>
              <span className="text-sm">Privacy Policy</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
