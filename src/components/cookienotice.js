import React from 'react'

class Cookienotice extends React.Component {
  componentDidMount () {
        window.addEventListener("load", function(){
            window.cookieconsent.initialise({
            "palette": {
                "popup": {
                "background": "#2e2e31",
                "text": "#fff"
                },
                "button": {
                "background": "#00863B",
                "text": "#fff"
                },
                "position": "bottom-right",
                "content": {
                  "message": "Diese Website nutzt Cookies um dein Er",
                  "dismiss": "Verstanden",
                  "link": "Mehr erfahren",
                  "href": "https://arztpraxis-schulzendorf.de/datenschutz"
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