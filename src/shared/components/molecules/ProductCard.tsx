import type { ProductType } from '../../types/productType'

const ProductCard = ({ product }: ProductType) => {
  return (
    <div className='cursor-pointer p-1'>
      <img src={product.img} alt={product.name} />
      {/* Product colors */}
      <div className='flex items-center flex-wrap gap-2 my-2'>
        {product.colors.map((item, index) => (
          <div
            className={`rounded-full w-[1rem] h-[1rem] border border-[#444] ${item}`}
            key={`product-colors-${index}`}
          ></div>
        ))}
      </div>
      <h3 className='font-semibold'>{product.name}</h3>
      <h3 className='text-[#666666] my-1'>{product.category}</h3>
      <div className='flex gap-2 my-2 items-center'>
        <span className='border border-[#FFEDB3] bg-[#FFFCF3] rounded-md p-1'>
          {product.details}
        </span>
        <span className='font-semibold'>{product.price}</span>
      </div>
    </div>
  )
}

export default ProductCard
