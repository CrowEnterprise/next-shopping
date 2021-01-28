import {useContext} from 'react'
import Contexts from '@contexts'

const AllProducts = () => {
  const {products} = useContext(Contexts.PSC)

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index}>{product.title}</li>
      ))}
    </ul>
  )
}

export default AllProducts
