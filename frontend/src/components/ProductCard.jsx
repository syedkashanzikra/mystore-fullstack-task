import { useState } from 'react'

const ProductCard = ({ product, onUpdate }) => {
  const [newPrice, setNewPrice] = useState(product?.current_price?.value || '')

  const handleUpdate = () => {
    const value = parseFloat(newPrice)
    if (!isNaN(value)) onUpdate(value)
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: 20, borderRadius: 8 }}>
      <h3>{product.title}</h3>
      <p>Current Price: {product.current_price ? `$${product.current_price.value}` : 'N/A'}</p>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <input
          value={newPrice}
          onChange={e => setNewPrice(e.target.value)}
          type="number"
          placeholder="New Price"
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={handleUpdate} style={{ padding: '8px 16px' }}>Update</button>
      </div>
    </div>
  )
}

export default ProductCard
