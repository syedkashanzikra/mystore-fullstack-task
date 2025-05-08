import { useState } from 'react'
import ProductForm from './components/ProductForm'
import ProductCard from './components/ProductCard'
import { fetchProductById, updateProductPrice } from './services/api'

function App() {
  const [product, setProduct] = useState(null)
  const [id, setId] = useState('')

  const handleFetch = async (productId) => {
    const data = await fetchProductById(productId)
    setId(productId)
    setProduct(data)
  }

  const handleUpdate = async (newPrice) => {
    await updateProductPrice(id, { value: newPrice, currency_code: 'USD' })
    const updated = await fetchProductById(id)
    setProduct(updated)
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 40, fontFamily: 'sans-serif' }}>
      <h2>Product Price Manager</h2>
      <ProductForm onFetch={handleFetch} />
      {product && <ProductCard product={product} onUpdate={handleUpdate} />}
    </div>
  )
}

export default App
