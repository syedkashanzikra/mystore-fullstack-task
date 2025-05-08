import mongoose from 'mongoose'

const priceSchema = new mongoose.Schema({
  productId: { type: Number, required: true, unique: true },
  value: { type: Number, required: true },
  currency_code: { type: String, default: 'USD' }
}, { timestamps: true })

export default mongoose.model('Price', priceSchema)
