import React from 'react'
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query NewsQuery {
        allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/news/"}}) {
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
            <br />
            <hr></hr>
          </div>
        ))}
      </div>
    )}
  />
)