/* eslint-disable no-restricted-syntax */
/* eslint-disable import/prefer-default-export */
import httpStatus from 'http-status'
import catchAsync from '../helpers/catchAsync.mjs'
import { errorResponseSpecification } from '../helpers/errorResponse.mjs'
import pick from '../helpers/pick.mjs'
import response from '../helpers/resolvedResponse.mjs'
import { productService } from '../services/index.mjs'

export const getProducts = catchAsync(async (req, res) => {
  try {
    const products = await productService.getAllProduct()

    response(res, httpStatus.OK, httpStatus[200], products)
  } catch (err) {
    errorResponseSpecification(err, res)
  }
})

export const getProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  try {
    const product = await productService.getProductById(id)
    if (!product) {
      return response(res, httpStatus.OK, httpStatus[200])
    }

    response(res, httpStatus.OK, httpStatus[200], product)
  } catch (err) {
    errorResponseSpecification(err, res)
  }
})

export const createProduct = catchAsync(async (req, res) => {
  const data = pick(req.body, [
    'name',
    'price',
    'discount',
    'image',
    'listSubImage',
    'description',
    'quantity',
    'ram',
    'rom',
    'battery',
    'screensize',
    'screenType',
    'color',
    'cpu',
    'gpu',
    'release',
    'warranty',
    'bonus',
    'catalogId',
    'brandId',
  ])
  try {
    const product = await productService.createProduct(data)

    return response(res, httpStatus.OK, httpStatus[200], product)
  } catch (err) {
    errorResponseSpecification(err, res)
  }
})

export const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params
  const data = pick(req.body, [
    'name',
    'price',
    'discount',
    'image',
    'listSubImage',
    'description',
    'quantity',
    'ram',
    'rom',
    'battery',
    'screensize',
    'screenType',
    'color',
    'cpu',
    'gpu',
    'release',
    'warranty',
    'bonus',
    'catalogId',
    'brandId',
  ])

  try {
    const updatedProduct = await productService.updateProductById(id, data)
    if (!updateProduct) {
      return response(res, httpStatus.NO_CONTENT, httpStatus[204])
    }

    response(res, httpStatus.OK, httpStatus[200], updatedProduct)
  } catch (err) {
    errorResponseSpecification(err, res)
  }
})

export const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params

  try {
    const prod = await productService.deleteProductById(id)
    if (!prod) {
      return response(res, httpStatus.NO_CONTENT, httpStatus[204])
    }

    response(res, httpStatus.OK, httpStatus[200], prod)
  } catch (err) {
    errorResponseSpecification(err, res)
  }
})

export const getShortProductList = catchAsync(async (req, res) => {
  const idList = (req.body?.idList) ? { _id: req.body?.idList } : {}

  try {
    const products = await productService.getProductsWithProjection(idList, 'name price imageLink discount color ram rom battery')

    response(res, httpStatus.OK, httpStatus[200], products)
  } catch (err) {
    errorResponseSpecification(err, res)
  }
})

export const checkProductOrderCondition = catchAsync(async (req, res) => {
  const { cart } = req.body
  const condition = []
  try {
    const products = await productService.getProductsByIds(cart, 'quantity name')
    for (const product of products) {
      for (const item of cart) {
        if (product._id.toString() === item.id) {
          const result = {
            id: product._id.toString(),
            name: product.name,
            isEnoughAmount: !((product.quantity < item.amount)),
          }
          condition.push(result)
        }
      }
    }

    response(res, httpStatus.OK, httpStatus[200], condition)
  } catch (err) {
    errorResponseSpecification(err, res)
  }
})
