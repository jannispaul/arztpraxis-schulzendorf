import React from 'react'
// import jamedaScript from '../jameda.js'
// import {jamedaScript} from '../../jamedaScript'
export default class Jamedamodule extends React.Component {  
 
  render() {  
    return (
      <div id="jam-ota-info_81191615_1"><div style = { {float: 'left'} }><span style = { {color: '#01a3d4'} } role="img" aria-label="lock">&#x1f512;</span> SSL-verschlüsselt</div><div style = { {float: 'right'} }> ein Service von <a href="https://www.jameda.de/schulzendorf/aerzte/innere-allgemeinmediziner/peggy-von-niederhaeusern/uebersicht/81191615_1/" target="_blank" rel="noopener noreferrer" style= {{ color: '#01a3d4', textDecoration: 'none'}}><strong>jameda</strong></a>&nbsp;</div></div>
    )
  }
  componentDidMount(){
    // const jamedaScript = require('../jameda.js');
    // console.log(require('../jameda.js'))
    // const jamedaScript = window.jamedaScript;   
  }
}