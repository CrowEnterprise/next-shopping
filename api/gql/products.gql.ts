import {gql} from 'graphql-request'

const FIND_PRODUCTS = gql`
  query GetProducts(
    $sort: String = "title:asc"
    $limit: Int = 10
    $start: Int = 0
    $where: JSON = {}
  ) {
    products(sort: $sort, limit: $limit, start: $start, where: $where) {
      id
      title
      description
      cost
      quantityAvailable
      type
      averageRating
      status
      sku
      partNumber
      shipping
      photos {
        url
      }
    }
  }
`
