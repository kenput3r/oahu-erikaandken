import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const LanikaiPillbox = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Lanikai Pillbox" />
      <Page>
        <h2>Lanikai Pillbox</h2>
        <div className="images">
          {data.allFile.edges.map(edge => (
            <Img
              key={edge.node.childImageSharp.id}
              fluid={edge.node.childImageSharp.fluid}
              alt="Lanikai Pillbox"
            />
          ))}
        </div>
      </Page>
    </Layout>
  )
}

export default LanikaiPillbox

const Page = styled.div`
  background-color: #000000;
  .images {
    margin: 0 auto;
    padding: 0 1.45rem;
    width: 100%;
    @media (max-width: 500px) {
      padding: 0 0;
    }
  }
  .gatsby-image-wrapper {
    margin-bottom: 1.45rem;
  }
`

export const query = graphql`
  query LanikaiPillboxPageQuery {
    allFile(
      filter: {
        relativeDirectory: { eq: "Lanikai_Pillbox" }
        ext: { regex: "/(jpg)|(png)|(jpeg)/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 2048) {
              ...GatsbyImageSharpFluid
            }
            id
          }
        }
      }
    }
  }
`
