import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import styles from './sectionstandard.module.css'
// import styles from './times.module.css'



const Times = (props) => (
  <section className={styles.section}>
    <div className={styles.imageContainer}>
      <Img fluid={props.data.image.childImageSharp.fluid} className={styles.img} alt="Arztpraxis von innen"/>
    </div>
    <div className={styles.contentContainer}>
      <div className={styles.contentContainerBody}>
      <div className={styles.timesContaineer}>
        <h2>Öffnungszeiten</h2>
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
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

      </div>
    </div>
  </section>
)



export default props => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/testimage.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
  render={data => <Times data={data} {...props} />}
/>
)




// export default () => (
//   <SectionStandard image="var(--color-primary-light)">
//   <StaticQuery
//     query={graphql`
//       query TimesQuery {
//         allMarkdownRemark (filter: {fileAbsolutePath: {regex: "/times/"}}) {
//           edges {
//             node {
//               id
//               rawMarkdownBody
//               frontmatter {
//                 monday
//                 tuesday
//                 wednesday
//                 thursday
//                 friday
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div className={styles.timesContainer}>
//         <h2>Öffnungszeiten</h2>
//         {data.allMarkdownRemark.edges.map(({ node }) => (
//           <div key={node.id}>
//             <table>
//               <tbody>
//                 <tr>
//                   <td>Montag</td>
//                   <td>{node.frontmatter.monday}</td>
//                 </tr>
//                 <tr>
//                   <td>Dienstag</td>
//                   <td>{node.frontmatter.tuesday}</td>
//                 </tr>
//                 <tr>
//                   <td>Mittwoch</td>
//                   <td>{node.frontmatter.wednesday}</td>
//                 </tr>
//                 <tr>
//                   <td>Donnerstag</td>
//                   <td>{node.frontmatter.thursday}</td>
//                 </tr>
//                 <tr>
//                   <td>Freitag</td>
//                   <td>{node.frontmatter.friday}</td>
//                 </tr>
//               </tbody>
//             </table>
//             <p>{node.rawMarkdownBody}</p>
//           </div>
//         ))}
//       </div>
//     )}
//   />
//   </SectionStandard>
// )




