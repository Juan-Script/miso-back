import { ProductEntry } from "./types"
import productData from './products.json'

const products: Array<ProductEntry> = productData as Array<ProductEntry>

export const getEntries = () => products;

export const addEntry = () => null