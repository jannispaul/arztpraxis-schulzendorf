import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from './news.module.css'
import Icon from './icon'
import {ICONS} from '../constants/icons.js'

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
      <div className={styles.newsContainer}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <div>
              <Icon icon={ICONS.BUBBLE} color="var(--primary-color)"/>
            </div>
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