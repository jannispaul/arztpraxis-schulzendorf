import React from 'react'
import { StaticQuery, graphql } from "gatsby"


export default () => (
  <StaticQuery
    query={graphql`
      query TimesQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark {
          edges {
            node {
              id
              rawMarkdownBody
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>Öffnungszeiten</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>{node.rawMarkdownBody}</h3>
          </div>
        ))}
      </div>
    )}
  />
)