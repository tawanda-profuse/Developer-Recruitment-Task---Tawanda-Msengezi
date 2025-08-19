import ProductSkeleton from '../molecules/ProductSkeleton'

const ProductSkeletonList = ({ quantity = 3 }: { quantity?: number }) => {
  return (
    <div className='flex gap-4 flex-wrap justify-center'>
      {new Array(quantity).fill(<ProductSkeleton />)}
    </div>
  )
}

export default ProductSkeletonList
