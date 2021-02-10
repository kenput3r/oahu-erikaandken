import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <Page>
        <BackgroundImage
          fluid={data.coverImage.childImageSharp.fluid}
          className="hero"
        >
          <h2>O'ahu 2021</h2>
        </BackgroundImage>
      </Page>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    coverImage: file(relativePath: { eq: "Balcony/IMG_4993.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Page = styled.div`
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  h2 {
    color: #ffffff;
    font-size: 3rem;
    padding: 1.45rem;
  }
`
