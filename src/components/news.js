import React from 'react'
import { StaticQuery, graphql } from "gatsby"


// const News = () => (
//   <div>
//     <h1>NEWS:</h1>
//     <p>Welcome to page 2</p>
//   </div>
// )

// export default News


export default () => (
  <StaticQuery
    query={graphql`
      query NewsQuery {
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
                date
                title
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <h1>Aktuelles</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <p>{node.date}</p>
            <h3>{node.rawMarkdownBody}</h3>
          </div>
        ))}
      </div>
    )}
  />
)