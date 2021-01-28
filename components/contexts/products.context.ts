import React from 'react'
import {Product} from '@types'

interface InterfaceProductsContext {
  products: Product[]
}

const defaultValue: InterfaceProductsContext = {
  products: [],
}

export const ProductsContext = React.createContext<InterfaceProductsContext>(
  defaultValue,
)
