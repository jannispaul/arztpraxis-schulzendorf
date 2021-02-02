import React from 'react'
import styled from 'styled-components'
import { device } from '../theme/breakpoints'

const Container = styled.div`
  display: none;
  @media ${device.tablet} {
    display: block;
    position: fixed;
    z-index: 3;
    right: 0rem;
    bottom: 0rem;
  }
`
class JamedaBadge extends React.Component {
  constructor(props) {
    super(props)
    this.Source =
      'https://cdn1.jameda-elements.de/widgets/siegel/81191615_1/1448282/'
  }
  jsonConfig() {
    return JSON.stringify({
      episode: {
        media: {
          mp3:
            // "https://cdn.podigee.com/media/podcast_4411_podigee_podcast_news_episode_11_zahlenzauber_bei_podigee.mp3?v=1565954088&source=web_download&dl=1",
            // "https://cdn.podigee.com/media/podcast_15431_the_testers_episode_1_new_episode.mp3?v=1571041732&source=user_backend",
            `${this.props.source}`,
        },
      },
      options: {
        theme: {
          html: 'https://ueberstunde.com/podigee/index.html',
          css: `https://ueberstunde.com/podigee/index.css`,
        },
      },
    })
  }

  loadJamedaScript() {
    // load podigee player scripts when the component was mounted
    const script = document.createElement('script')
    script.src = this.Source
    script.async = true
    document.body.appendChild(script)
  }

  componentDidMount() {
    this.loadJamedaScript()
  }

  render() {
    return (
      <Container>
        <div
          id="jameda-widget-container1448282"
          style={{
            position: 'relative',
            width: '272px',
            height: '168px',
            margin: '15px',
            backgroundImage:
              'url(https://cdn1.jameda-elements.de/premium/widgets/_images/top10-top20-bg.png)',
            backgroundRepeat: 'no-repeat',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: '12px',
            lineHeight: '15px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '25px',
              left: '108px',
              width: '148px',
              height: '58px',
              overflow: 'hidden',
              whiteSpace: 'normal',
            }}
          >
            <a
              href="https://www.jameda.de/schulzendorf/aerzte/innere-allgemeinmediziner/peggy-von-niederhaeusern/uebersicht/81191615_1/?utm_content=Top5&utm_source=Kunden-Homepages&utm_medium=Badges&utm_term=81191615&utm_campaign=Badges"
              style={{
                fontSize: '15px',
                lineHeight: '18px',
                fontWeight: 'bold',
                color: '#01a3d4',
                textDecoration: 'none',
                border: '0px',
              }}
              target="_blank"
              rel="noreferrer"
            >
              Peggy von Niederhäusern
            </a>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '98px',
              left: '108px',
              width: '152px',
              height: '53px',
              overflow: 'hidden',
              color: '#888',
              fontSize: '11px',
              lineHeight: '13px',
            }}
          >
            <strong>Ärzte</strong>
            <br />
            in Schulzendorf auf&nbsp;
            <a
              href="https://www.jameda.de/schulzendorf/aerzte/gruppe/?utm_content=Top5&utm_source=Kunden-Homepages&utm_medium=Badges&utm_term=81191615&utm_campaign=Badges"
              className="jam_link_check"
              style={{
                color: '#069bd2',
                fontSize: '11px',
                textDecoration: 'none',
                border: '0px',
                backgroundColor: 'transparent !important',
              }}
              target="_blank"
              rel="noreferrer"
            >
              jameda
            </a>
          </div>
        </div>
      </Container>
    )
  }
}

export default JamedaBadge
