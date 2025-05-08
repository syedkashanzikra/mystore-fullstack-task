import axios from 'axios'

const baseURL = 'http://localhost:4000'

export const fetchProductById = async (id) => {
  const res = await axios.get(`${baseURL}/products/${id}`)
  return res.data
}

export const updateProductPrice = async (id, payload) => {
  await axios.put(`${baseURL}/products/${id}`, payload)
}
