import axios from 'axios'
import Price from '../models/price.model.js'

export const getProductById = async (req, res) => {
  const productId = parseInt(req.params.id)
  if (isNaN(productId)) return res.status(400).json({ error: 'Invalid product ID' })
  try {
    const productData = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    const priceDoc = await Price.findOne({ productId })
    const payload = {
      id: productData.data.id,
      title: productData.data.title,
      current_price: priceDoc ? {
        value: priceDoc.value,
        currency_code: priceDoc.currency_code
      } : null
    }
    res.json(payload)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch product' })
  }
}

export const updateProductPrice = async (req, res) => {
  const productId = parseInt(req.params.id)
  const { value, currency_code } = req.body
  if (isNaN(productId) || typeof value !== 'number') {
    return res.status(400).json({ error: 'Invalid input' })
  }
  try {
    const result = await Price.findOneAndUpdate(
      { productId },
      { value, currency_code: currency_code || 'USD' },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
    res.json({
      productId: result.productId,
      current_price: {
        value: result.value,
        currency_code: result.currency_code
      }
    })
  } catch (err) {
    res.status(500).json({ error: 'Failed to update price' })
  }
}
