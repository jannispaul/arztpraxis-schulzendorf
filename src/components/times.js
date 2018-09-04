import React from 'react'
import { StaticQuery, graphql } from "gatsby"


export default () => (
  <StaticQuery
    query={graphql`
      query TimesQuery {
        allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/times/"}}) {
          edges {
            node {
              id
              rawMarkdownBody
              frontmatter {
                monday
                tuesday
                wednesday
                thursday
                friday
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
            <p>Montag: {node.frontmatter.monday}</p>
            <p>Dienstag: {node.frontmatter.tuesday}</p>
            <p>Mittwoch: {node.frontmatter.wednesday}</p>
            <p>Donnerstag: {node.frontmatter.thursday}</p>
            <p>Freitag: {node.frontmatter.friday}</p>
            <br />
            <h3>{node.rawMarkdownBody}</h3>
          </div>
        ))}
      </div>
    )}
  />
)