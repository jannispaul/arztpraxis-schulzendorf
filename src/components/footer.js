import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { device } from '../theme/breakpoints'

// import styles from './footer.module.css'

const StyledFooter = styled.footer`
  width: 100%;
  background: #19284d;
  padding: 32px 16px;
  @media ${device.tablet} {
    padding: 48px 16px;
  }
`
const ContentContainer = styled.div`
  max-width: 1168px;
  margin: 0 auto;
  p,
  a,
  td {
    color: #fff;
    text-decoration: none;
  }
  & > div > div {
    margin: 0 0 32px 0;
  }
  @media ${device.tablet} {
    p,
    a,
    td {
      font-size: 18px;
    }
    & > div {
      max-width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
  @media ${device.laptop} {
    font-size: inherit;
  }
`
const StyledTable = styled.table`
  width: 100%;
  max-width: 400px;
`
const StyledTableRow = styled.tr`
  :nth-of-type(2n + 1) {
    background: rgba(255, 255, 255, 0.05);
  }
`
const StyledTableCell = styled.td`
  padding: 5px 10px;
  :nth-child(2) {
    text-align: right;
  }
`

const Backlink = styled.p`
  a {
    text-decoration: underline;
  }
`

const Footer = (props) => (
  <StyledFooter>
    <ContentContainer>
      <div>
        <div>
          <p>
            <strong>Peggy von Niederhäusern</strong>
            <br />
            Illgenstr. 4<br />
            15732 Schulzendorf
          </p>
          <p>
            Telefon: <a href="tel:03376248550">033762 48550</a>
            <br />
            Fax: 033762 48552
            <br />
            Email:{' '}
            <a href="mailto:info@arztpraxis-schulzendorf.de">
              info@arztpraxis-schulzendorf.de
            </a>
          </p>
        </div>
        <div>
          <p>
            <b>Öffnungszeiten</b>
          </p>
          {props.data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <StyledTable>
                <tbody>
                  <StyledTableRow>
                    <StyledTableCell>Montag</StyledTableCell>
                    <StyledTableCell>{node.frontmatter.monday}</StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Dienstag</StyledTableCell>
                    <StyledTableCell>
                      {node.frontmatter.tuesday}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Mittwoch</StyledTableCell>
                    <StyledTableCell>
                      {node.frontmatter.wednesday}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Donnerstag</StyledTableCell>
                    <StyledTableCell>
                      {node.frontmatter.thursday}
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Freitag</StyledTableCell>
                    <StyledTableCell>{node.frontmatter.friday}</StyledTableCell>
                  </StyledTableRow>
                </tbody>
              </StyledTable>
            </div>
          ))}
        </div>
        <div>
          <ul>
            <a href="https://www.jameda.de/schulzendorf/aerzte/innere-allgemeinmediziner/peggy-von-niederhaeusern/uebersicht/81191615_1/">
              Jameda
            </a>
            <li>
              <Link to="/impressum">Impressum</Link>
            </li>
            <li>
              <Link to="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>
      <Backlink>
        Design und Entwicklung: <a href="https://pixel-pink.de/">PixelPink</a>
      </Backlink>
    </ContentContainer>
  </StyledFooter>
)

// export default Footer

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/opening-hours.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/times/" } }) {
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
    render={(data) => <Footer data={data} {...props} />}
  />
)
