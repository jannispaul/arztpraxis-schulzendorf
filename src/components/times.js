import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from "./times.module.css"


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
      <div className={styles.timesContainer}>
        <h1>Öffnungszeiten</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <p>Montag: {node.frontmatter.monday}</p>
            <p>Dienstag: {node.frontmatter.tuesday}</p>
            <p>Mittwoch: {node.frontmatter.wednesday}</p>
            <p>Donnerstag: {node.frontmatter.thursday}</p>
            <p>Freitag: {node.frontmatter.friday}</p>
            <br />
            <p>{node.rawMarkdownBody}</p>
          </div>
        ))}
      </div>
    )}
  />
)