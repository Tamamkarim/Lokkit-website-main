import React from 'react'
import './Products.css'
import { encryptedFlashDrives, encryptedHDDSDD } from '../../api/productData'

function Product({ name, price, size, img, isNew }) {
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      className="product"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isNew && <div className="new-badge">New</div>}
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p className="product-price">Price: {price}</p>
      {isHovered && <button className="buy-button">Buy</button>}
    </div>
  )
}
const CategoryLabel = ({ category }) => <h2>{category}</h2>

function ProductsList({ categoryName, products }) {
  return (
    <div className="product-category">
      <CategoryLabel category={categoryName} />
      <div className="category-products">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  )
}

export default function Products() {
  const newProducts = encryptedFlashDrives
    .concat(encryptedHDDSDD)
    .filter((product) => product.isNew)

  return (
    <>
      <div className="products">
        <h1>Products</h1>
      </div>
      <div className="product-list">
        <ProductsList categoryName={'New products'} products={newProducts} />

        <ProductsList
          categoryName={'Encrypted flash drives'}
          products={encryptedFlashDrives.filter((product) => !product.isNew)}
        />
        <ProductsList
          categoryName={'Encrypted SSD & HDD'}
          products={encryptedHDDSDD.filter((product) => !product.isNew)}
        />
      </div>
    </>
  )
}
