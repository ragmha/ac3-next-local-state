import { ApolloClient } from "@apollo/client"
import { cache } from "operations/cache"

export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
})
