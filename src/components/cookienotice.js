import React from 'react'

class Cookienotice extends React.Component {
  componentDidMount () {
        window.addEventListener("load", function(){
            window.cookieconsent.initialise({
            "palette": {
                "popup": {
                "background": "#000"
                },
                "button": {
                "background": "#f1d600"
                }
            }
            })});
        
    }
  render () {
    return (
        <span></span>
        )
  }
}

export default Cookienotice