import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = () => {
  return (
    <Component aria-label="Primary">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/manana-trail">Manana Trail</Link>
        </li>
        <li>
          <Link to="/moleka-trail">Moleka Trail</Link>
        </li>
        <li>
          <Link to="/waimea-valley">Waimea Valley</Link>
        </li>
        <li>
          <Link to="/diamond-head">Diamond Head</Link>
        </li>
        <li>
          <Link to="/lanikai-pillbox">Lanikai Pillbox</Link>
        </li>
        <li>
          <Link to="/lighthouse-trail">Lighthouse Trail</Link>
        </li>
      </ul>
    </Component>
  )
}

export default Nav

const Component = styled.nav`
  border-top: 1px solid var(--primary-light);
  border-bottom: 1px solid var(--primary-light);
  padding: 10px 0;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-width: 60vw;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  }
  li {
    list-style-type: none;
    margin-bottom: 0;
    &.active {
      @media (max-width: 500px) {
        display: none;
      }
    }
    a {
      color: var(--primary-light);
      padding: 5px 10px;
      font-weight: bold;
      text-decoration: none;
      &[aria-current="page"] {
        text-decoration: underline;
      }
      @media (max-width: 500px) {
        display: block;
        padding: 10px 10px;
      }
    }
  }
`
