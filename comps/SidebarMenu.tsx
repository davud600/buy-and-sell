export default function SidebarMenu({ onClose }: any) {
  return (
    <div className="fixed inset-y-0 right-0 z-10 m-0 bg-white w-72">
      <div className="text-white bg-gray-800 h-44">
        <button className="fixed right-0" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
