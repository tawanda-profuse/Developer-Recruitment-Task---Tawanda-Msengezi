export type ProductType = {
  product: {
    img: string
    name: string
    category: string
    details: string
    price: string
    colors: string[]
  }
}

export interface ProductInterface {
  img: string
  name: string
  category: string
  details: string
  price: string
  colors: string[]
}
