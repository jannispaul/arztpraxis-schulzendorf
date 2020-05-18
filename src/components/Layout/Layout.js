import React from 'react'
import '../../theme/font-face.css'
import '../../theme/variables.css'
import '../../theme/styles.css'
import Nav from '../Nav/Nav'
import MobileMenu from '../Nav/MobileMenu'
import Footer from '../footer'

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
        {/* The following line causes an error */}
        <MobileMenu showMobileMenu={this.state.mobileMenuOpen} />
        {/* <CookieNotice /> */}
        <div>{this.props.children}</div>
        <Footer />
      </>
    )
  }
}

export default Layout
