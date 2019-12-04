/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { Layout } from "gatsby-theme-platinum"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({data}) => {
  return(
    <Layout>
      <MDXRenderer>
        {data.contentPage.parent.body}
      </MDXRenderer>
    </Layout>
  )
}
export const query = graphql`
  query ContentPageDefaultQuery($id: String!) {
    contentPage(id: {eq: $id}) {
      id
      pagePath
      template
      ... on MdxContentPage {
        parent {
          ... on Mdx {
            body
          }
        }
      }
    }
  }
`
