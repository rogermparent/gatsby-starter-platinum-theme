// This is a placeholder for latent shadowing in sibling themes
/** @jsx jsx */
import { jsx, Container, Flex } from "theme-ui"
import { Heading } from "@theme-ui/components"
import { Link, useStaticQuery, graphql } from "gatsby"

const SiteHeader = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
            type
          }
        }
      }
    }
  `);

  const { title, menuLinks } = data.site.siteMetadata;

  return (
    <header
      sx={{
        variant: "styles.invert",
        fontSize: 1,
        textAlign: 'center',
      }}
      id="header"
    >
      <Container sx={{
        py: [2,3],
        px: 1,
        display: 'flex',
        flexDirection: ['column', null, 'row'],
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link
          to='/'
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            flex: '0 0 auto',
          }}
        >
          <Heading sx={{
            fontSize: [4, 5]
          }}>{title}</Heading>
        </Link>
        <Flex
          as="nav"
          sx={{ flex: 'row nowrap' }}
        >
          {
            menuLinks.map((link, i)=>(
              link.type === 'internal' ?
              <Link
                to={link.link}
                sx={{variant: "styles.NavLink"}}
                key={i}
              >{link.name}</Link> :
              <a
                href={link.link}
                sx={{variant: "styles.NavLink"}}
                key={i}
              >{link.name}</a>
            ))
          }
        </Flex>
      </Container>
    </header>
  )
}

export default SiteHeader
