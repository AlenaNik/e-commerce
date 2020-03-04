import Navbar from './Navbar'
import Link from 'next/link'
import styled from 'styled-components';

const Logo = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 2rem;
  position: relative;
  z-index: 2;
  font-weight: 200;
  height: 40px;
  letter-spacing: .1em;
  margin-left: 2rem;
  
  a {
        padding: 2rem 1rem;
        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme.black}
  }
  @media (max-width: 700px) {
      margin: 0;
      text-align: center;
  }
  
`

export const Header = () => {
    return  (
        <div>
            <div className="bar">
              <Logo>
                  <Link href="/">
                      <a>11 Stories</a>
                  </Link>
              </Logo>
                <Navbar/>
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
            <div>Cart</div>
        </div>
    )
}
