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
                date (formatString: "DD. MMMM YYYY")
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
            <p>{node.frontmatter.date}</p>
            <p>{node.rawMarkdownBody}</p>
            <br />
            <hr></hr>
          </div>
        ))}
      </div>
    )}
  />
)