import { api } from "@/boot/axios"

export const getProducts = (params = {}) => {
  return api.get('/product', { params }).then(({ data }) => data)
}

export const createProduct = (params = {}) => {
  return api.post('/product', params).then(({ data }) => data)
}

export const updateProduct = (id, params = {}) => {
  return api.put(`/product/${id}`, params).then(({ data }) => data)
}

export const deleteProduct = (id) => {
  return api.delete(`/product/${id}`).then(({ data }) => data)
}