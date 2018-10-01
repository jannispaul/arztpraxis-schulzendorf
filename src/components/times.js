import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from "./times.module.css"
import SectionStandard from '../components/sectionstandard'



export default () => (
  <SectionStandard image="var(--color-primary-light)">
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
        <h2>Öffnungszeiten</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <table>
              <tbody>
                <tr>
                  <td>Montag</td>
                  <td>{node.frontmatter.monday}</td>
                </tr>
                <tr>
                  <td>Dienstag</td>
                  <td>{node.frontmatter.tuesday}</td>
                </tr>
                <tr>
                  <td>Mittwoch</td>
                  <td>{node.frontmatter.wednesday}</td>
                </tr>
                <tr>
                  <td>Donnerstag</td>
                  <td>{node.frontmatter.thursday}</td>
                </tr>
                <tr>
                  <td>Freitag</td>
                  <td>{node.frontmatter.friday}</td>
                </tr>
              </tbody>
            </table>
            <p>{node.rawMarkdownBody}</p>
          </div>
        ))}
      </div>
    )}
  />
  </SectionStandard>
)
