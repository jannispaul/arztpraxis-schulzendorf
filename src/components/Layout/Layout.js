import React from 'react'
import '../../theme/font-face.css'
import '../../theme/variables.css'
import '../../theme/styles.css'
import Nav from '../Nav/Nav'
import MobileMenu from '../Nav/MobileMenu'
import Footer from '../Footer'
import News from '../news'
import CookieNotice from '../cookienotice'
import Notice from '../notice'

class Layout extends React.Component {
  state = {
    mobileMenuOpen: false,
  }
  burgerButtonToggleClickHandler = () => {
    this.setState((prevState) => {
      return { mobileMenuOpen: !prevState.mobileMenuOpen }
    })
  }

  render() {
    return (
      <>
        <Nav
          burgerButtonClickHandler={this.burgerButtonToggleClickHandler}
          showMobileMenu={this.state.mobileMenuOpen}
        />
        <MobileMenu showMobileMenu={this.state.mobileMenuOpen} />
        <CookieNotice />
        <Notice></Notice>
        <News></News>
        <div>{this.props.children}</div>
        <Footer />
      </>
    )
  }
}

export default Layout
