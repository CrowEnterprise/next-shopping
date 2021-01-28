import 'tailwindcss/tailwind.css'
import Layout from '@components/Layout'
import {getGQLClient} from '@gql-request'
import AllProducts from '@components/products/all'
import {FIND_PRODUCTS} from '@gql/products.gql'
import Contexts from '@components/contexts'
import {Product} from '@types'

const PSC_Provider = Contexts.PSC.Provider

const IndexPage = (props: {products: Product[]}) => (
  <PSC_Provider value={props}>
    <Layout title="All Products - Crow Shopping">
      <AllProducts />
    </Layout>
  </PSC_Provider>
)

export const getStaticProps = async () => {
  const client = getGQLClient()
  const {products} = await client.request(FIND_PRODUCTS)

  return {
    props: {
      products: products,
    },
  }
}

export default IndexPage
