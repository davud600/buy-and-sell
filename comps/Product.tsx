import Image from 'next/image'
import product0image from '../public/images/1.jpg'
import product1image from '../public/images/2.jpg'

export default function Product({ product_id }: any) {
  return (
    <div className="flex flex-col justify-between bg-white border border-gray-200 border-solid rounded-md aspect-square">
      <div className="h-40">
        {/* <Image
          src={product_id === 0 ? product0image : product1image}
          alt="no image"
          width="300%"
          height="100%"
          // layout="fill"
          className="rounded-t-md"
        /> */}
      </div>
      <div className="p-3">
        <div>
          <p className="text-base font-normal text-gray-500">City</p>
          <p className="text-lg font-semibold">Product name</p>
        </div>
        <div>
          <p className="text-base font-normal text-gray-500">Category</p>
          <p className="text-lg font-semibold">Price $</p>
        </div>
      </div>
    </div>
  )
}
