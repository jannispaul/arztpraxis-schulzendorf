import React from 'react'
import styles from './notice.module.css'
import Icon from './icon'
import { ICONS } from '../constants/icons.js'

const Notice = () => (
  <div className={styles.newsContainer}>
    <div className={styles.newsItem}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Icon icon={ICONS.WARNING} />
        </div>
        <div>
          <span className={styles.newsBody}>
            <b>Verdacht auf Coronavirusinfektion?</b>
            <br /> Bitte bleiben Sie Zuhause. Kommen Sie <b>nicht</b> in die
            Praxis, sondern <b>RUFEN SIE UNS AN</b>. Wir erklären Ihnen
            telefonisch den Weg zur Testung.
            <br />
            <b>Symptome</b>: SCHWERSTES Krankheitsgeühl, HOHES Fieber,
            Atemprobleme, Husten, SCHWERSTE Gliederschmerzen
            <br />
            <b>Risikofaktoren</b>: Reisen in Risikogebiete, Kontakt zu
            Reisenden, 
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default Notice
// export default () => (
//   <StaticQuery
//     query={graphql`
//       query NewsQuery {
//         allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/news/" } }) {
//           edges {
//             node {
//               id
//               rawMarkdownBody
//               frontmatter {
//                 date(formatString: "DD. MMMM YYYY", locale: "de-DE")
//                 title
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={data => (
//       <div className={styles.newsContainer}>
//         {data.allMarkdownRemark.edges.slice(1).map(({ node }) => (
//           <div key={node.id} className={styles.newsItem}>
//             <div className={styles.content}>
//               <div className={styles.icon}>
//                 <Icon icon={ICONS.WARNING} />
//               </div>
//               <div>
//                 <span className={styles.date}>{node.frontmatter.date}</span>
//                 <span className={styles.newsBody}>{node.rawMarkdownBody}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     )}
//   />
// )
