import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Popover from '../Popover'

import { navDropDownFactory } from './common'
import ThemePicker from './ThemePicker'
// import MobileNav from './MobileNav'
const NavBar = React.memo(props => {
  const {
    navLogo,
    snakeGrid,
    toc,
    searching,
    sorting,
    api,
    imageToAscii,
    nepaliDate,
    snakeGame,
  } = useStaticQuery(
    graphql`
      query images {
        navLogo: file(absolutePath: { regex: "/logo.png/" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <>
      <nav className="lg-navbar">
        <Image
          fixed={navLogo.childImageSharp.fixed}
          alt="Website logo"
          className={'lg-navbar-img'}
        />
        <Link to="/" className="lg-navbar__item lg-navbar__header">
          Developer Community Stats
        </Link>
        <ThemePicker />
      </nav>
    </>
  )
})

function DropDownDisplayItem({ image, title, info, as = 'div', ...props }) {
  const As = as
  return (
    <As
      className="lg-navbar__drop-down__item lg-navbar__drop-down__display-item"
      {...props}
    >
      <div className="lg-navbar__drop-down__image">
        <Image fixed={image} alt="Website logo" className={'lg-navbar-img'} />
      </div>
      <div className="lg-navbar__drop-down__text">
        {title}
        <div className="lg-navbar__drop-down__dim">{info}</div>
      </div>
    </As>
  )
}
export default NavBar
