import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BaseLayout from "gatsby-theme-platinum/src/components/base-layout"
import SEO from "gatsby-theme-platinum/src/utils/seo"

const BaseLayoutWithSEO = ({
  children,
  description,
  lang,
  meta,
  keywords,
  title,
}) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          siteUrl
          title
        }
      }
    }
  `)

  const { siteMetadata } = site

  return (
    <BaseLayout>
      <SEO
        siteTitle={siteMetadata.title}
        siteDescription={siteMetadata.description}
        siteAuthor={siteMetadata.author}
        description={description}
        lang={lang}
        meta={meta}
        keywords={keywords}
        title={title}
      />
      {children}
    </BaseLayout>
  )
}

export default BaseLayoutWithSEO
