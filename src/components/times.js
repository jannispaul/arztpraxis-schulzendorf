import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import ContentCard from './Layout/ContentCard'
import HeadlineText from './Layout/HeadlineText'
import EntranceImage from './Images/EntranceImage'
import { device } from '../theme/breakpoints'

const StyledSection = styled.section`
  @media ${device.tablet} {
    padding: 50px 16px 0;
  }
  @media ${device.laptop} {
    padding: 70px 16px 0;
  }
`
const StyledContent = styled.div`
  padding: 48px 16px;
  font-size: 18px;
  flex: 1 0 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledTable = styled.table`
  width: calc(100% + 32px);
  max-width: 400px;
  margin: 0 -16px 24px;
`
const StyledTableRow = styled.tr`
  :nth-of-type(2n + 1) {
    background: #fafafa;
  }
`
const StyledTableCell = styled.td`
  padding: 16px;
  :nth-child(2) {
    text-align: right;
  }
`

const Times = (props) => (
  <StyledSection id="oeffnungszeiten">
    <HeadlineText {...props}></HeadlineText>
    <ContentCard>
      <EntranceImage></EntranceImage>
      <StyledContent>
        <h3>{props.h3}</h3>
        {props.data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <StyledTable>
              <tbody>
                <StyledTableRow>
                  <StyledTableCell>{props.monday}</StyledTableCell>
                  <StyledTableCell>{node.frontmatter.monday}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>{props.tuesday}</StyledTableCell>
                  <StyledTableCell>{node.frontmatter.tuesday}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>{props.wednesday}</StyledTableCell>
                  <StyledTableCell>
                    {node.frontmatter.wednesday}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>{props.thursday}</StyledTableCell>
                  <StyledTableCell>{node.frontmatter.thursday}</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell>{props.friday}</StyledTableCell>
                  <StyledTableCell>{node.frontmatter.friday}</StyledTableCell>
                </StyledTableRow>
              </tbody>
            </StyledTable>
            <p>{node.rawMarkdownBody}</p>
          </div>
        ))}
      </StyledContent>
    </ContentCard>
  </StyledSection>
)

Times.defaultProps = {
  h3: 'Öffnungszeiten',
  monday: 'Montag',
  tuesday: 'Dienstag',
  wednesday: 'Mittwoch',
  thursday: 'Donnerstag',
  friday: 'Freitag',
}

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
    render={(data) => <Times data={data} {...props} />}
  />
)
