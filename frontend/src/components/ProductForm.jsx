import { useState } from 'react'

const ProductForm = ({ onFetch }) => {
  const [id, setId] = useState('')

  const handleFetch = () => {
    if (id.trim()) onFetch(id)
  }

  return (
    <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
      <input
        value={id}
        onChange={e => setId(e.target.value)}
        placeholder="Enter Product ID"
        style={{ flex: 1, padding: 8 }}
      />
      <button onClick={handleFetch} style={{ padding: '8px 16px' }}>Fetch</button>
    </div>
  )
}

export default ProductForm
