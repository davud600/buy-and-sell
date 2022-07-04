import Product from './Product'

export default function PopularItems() {
  return (
    <>
      <div className="grid grid-cols-1 overflow-x-hidden sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-x-2 sm:gap-x-4 gap-y-4">
        <Product product_id={0} />
        <Product product_id={1} />
        <Product product_id={1} />
        <Product product_id={1} />
        <Product product_id={1} />
        <Product product_id={1} />
        <Product product_id={1} />
        <Product product_id={1} />
        <Product product_id={1} />
        <Product product_id={1} />
        <Product product_id={1} />
      </div>
      <div className="flex justify-center mt-16 flex-column">
        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:bg-blue-800">
          Load more
        </button>
      </div>
    </>
  )
}
