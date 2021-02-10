import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/erika-and-ken.png"
import Nav from "../components/nav"

const Header = ({ siteTitle }) => (
  <Component>
    <div className="logo-container">
      <h1>
        <Link to="/" title="home">
          <img src={logo} alt={siteTitle} />
        </Link>
      </h1>
    </div>
    <Nav />
  </Component>
)

export default Header

const Component = styled.header`
  background-color: #000000;
  .logo-container {
    max-width: 150px;
    margin: 10px auto;
  }
  h1 {
    margin-bottom: 0;
  }
  img {
    margin-bottom: 0;
  }
`
