import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/erika-and-ken.png"

const Header = ({ siteTitle }) => (
  <Component>
    <h1>
      <Link>
        <img src={logo} alt={siteTitle} />
      </Link>
    </h1>
  </Component>
)

export default Header

const Component = styled.header``
