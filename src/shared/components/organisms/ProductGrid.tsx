import ProductCard from '../molecules/ProductCard'
import jacket from '../../../assets/images/jacket.jpg'
import { COLORS } from '../../constants/colors'
import { useEffect, useState } from 'react'
import ProductSkeletonList from './ProductSkeletonList'
import type { ProductInterface } from '../../types/productType'

const ProductGrid = () => {
  const [pending, setPending] = useState(true)
  const [products, setProducts] = useState<ProductInterface[]>([])

  useEffect(() => {
    const fetchProducts = () => {
      // Simulating Axios or react-query for data fetching
      setTimeout(() => {
        setProducts([
          {
            img: jacket,
            name: '상품명이 노출 됩니다.상품명이 노출 됩니...',
            category: '{브랜드명} 그룹코드-색상명',
            details: '창고명 6자',
            price: '000,000원',
            colors: COLORS
          },
          {
            img: jacket,
            name: '상품명이 노출 됩니다.상품명이 노출 됩니...',
            category: '{브랜드명} 그룹코드-색상명',
            details: '창고명 6자',
            price: '000,000원',
            colors: COLORS
          },
          {
            img: jacket,
            name: '상품명이 노출 됩니다.상품명이 노출 됩니...',
            category: '{브랜드명} 그룹코드-색상명',
            details: '창고명 6자',
            price: '000,000원',
            colors: COLORS
          },
          {
            img: jacket,
            name: '상품명이 노출 됩니다.상품명이 노출 됩니...',
            category: '{브랜드명} 그룹코드-색상명',
            details: '창고명 6자',
            price: '000,000원',
            colors: COLORS
          }
        ])
        setPending(false)
      }, 2000)
    }
    fetchProducts()
  }, [])

  return (
    <>
      <h2 className='text-center font-bold mb-4'>
        상품진열이 타이틀이 들어갑니다.
      </h2>
      <h3 className='text-center'>
        부타이틀이 필요할 경우 텍스트가 들어갑니다.
      </h3>
      {pending ? (
        <div className='my-6'>
          <ProductSkeletonList quantity={4} />
        </div>
      ) : products.length > 0 ? (
        <div className='max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 my-8 gap-4'>
          {products.map((item, index) => (
            <ProductCard product={item} key={`${index}-product-grid`} />
          ))}
        </div>
      ) : (
        <p className='text-center text-[orangered] my-8 font-bold animate-pulse'>
          There are no products.
        </p>
      )}
    </>
  )
}

export default ProductGrid
