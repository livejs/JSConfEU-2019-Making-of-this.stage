import React, {cloneElement, Component} from 'react'
import {render} from 'react-dom'
import styled, {css, keyframes} from 'styled-components'
import Deck, {Elements, Plugins} from '@dekk/dekk'
import Controller from './plugins/controller'
import LocalStorage from '@dekk/local-storage'
import SpeakerDeck from '@dekk/speaker-deck'
import Url, {search} from '@dekk/url'
import './styles/codemirror'
import Luminave from './plugins/luminave'
import StyledHeader from './components/styledHeader'
import StyledFooter from './components/styledFooter'
import LuminaveButton from './components/luminaveButton'

// prettier-ignore
const mySlides = [
  'cover', 
  // 'replay-the-intro', 
  'we-are-livejs',
  'silke-design-1',
  'silke-design-2',
  'silke-design-3',
  'silke-design-4',
  'silke-design-6',
  'silke-design-7',
  'silke-design-9',
  'silke-design-10',
  'silke-design-11',
  'silke-design-12',
  'silke-design-13',
  'silke-design-14',
  'silke-design-15',
  'silke-design-16',
  'silke-design-17',
  'silke-design-18',
  'take-that-never-forget',
  'sam-turns-it-into-chiptune',
  'hack-week',
  'hack-week-scrumboard',
  'intro-timeline',
  'more-remixes',
  'dominator',
  'dominator-modules',
  'dominator-abletonlive',
  'main-stage',
  'the-x',
  'the-x-mapping',
  'silke-design-x',
  // 'jsconfeu-projection-mapping',
  'vizra',
  'modv',
  'modv-live',
  'luminave',
  'luminave-light-mapping',
  'luminave-webusb-dmx512-controller',
  '2xaa-remix-soundcloud',
  'thank-you'
]

const {present, live} = search.parse(window.location.href)

const baseStyles = css`
  --slide-color: #000;
  --font-family: 'Montserrat', sans-serif;
  --title-font-size: 6em;
  --theme-primary: #e10179;
  --theme-primary-dark: #333;
  --theme-on-primary: #000;
  --theme-background: #fff;
  --theme-surface: #fff;

  --color-green: #35c9a4;
  --color-red: #da4453;
  --color-yellow: #ec9f00;
  --color-blue: #3caee5;

  background: var(--theme-background);

  a {
    text-decoration: none;
    color: var(--theme-on-primary);
    box-shadow: inset 0 -0.175em white, inset 0 -0.2em var(--theme-primary);
  }

  h2 {
    font-size: 3em;
  }

  .overlay {
    position: relative;
    height: 100%;
    width: 100%;

    .child {
      position: absolute;
      bottom: 15vh;
      left: 0;
    }
  }

  .columns {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1em;
    justify-items: center;
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleFrame = this.handleFrame.bind(this)
    this.setFrame = this.setFrame.bind(this)
    this.slides = this.props.slides
  }

  handleFrame(showFrame) {
    this.setState({
      showFrame
    })
  }

  setFrame() {
    this.setState(prevState => ({
      showFrame: !prevState.showFrame
    }))
  }

  render() {
    return (
      <Deck mixin={baseStyles} timer={30}>
        <Elements mode={['live']}>
          <StyledHeader isActive={this.state.showFrame}>
            <iframe
              src="http://localhost:8081"
              allow="midi, usb"
              sandbox="allow-same-origin allow-scripts allow-forms"
              style={{width: 100 + 'vw', height: 100 + 'vh'}}
              frameBorder="0"
            />
          </StyledHeader>

          <StyledFooter isActive={true}>
            <h1>
              <a href="https://twitter.com/LiveJS_network">@LiveJS_network</a>
            </h1>
            <h1>
              <a href="https://livejs.network">livejs.network</a>
            </h1>
          </StyledFooter>
        </Elements>

        <Plugins mode={['present']}>
          <Controller trigger="keydown" handleFrame={this.setFrame} />
          <Luminave
            publish
            showFrame={this.state.showFrame}
            handleFrame={this.setFrame}
          />
          <LuminaveButton onClick={this.setFrame}>Luminave</LuminaveButton>
        </Plugins>

        <Plugins mode={['live']}>
          <LocalStorage subscribe />
          <Luminave
            subscribe
            handleFrame={this.handleFrame}
            slides={this.slides}
          />
        </Plugins>

        <Plugins mode={['default']}>
          <Controller trigger="keydown" handleFrame={this.setFrame} />
        </Plugins>

        {this.slides}

        <Elements mode={['default']}>
          <StyledFooter isActive={true}>
            <h1>
              <a href="https://twitter.com/LiveJS_network">@LiveJS_network</a>
            </h1>
            <h1>
              <a href="https://livejs.network">livejs.network</a>
            </h1>
          </StyledFooter>
        </Elements>
      </Deck>
    )
  }
}

const mountPoint = document.getElementById('mount-point')

/**
 * Dynamically import the slides
 */
async function loadSlides() {
  const slides = []

  await Promise.all(
    mySlides.map(async (slide, index) => {
      let module = await import(`./slides/${slide}.js`)
      slides[index] = module.default
    })
  )

  return slides
}

loadSlides().then(slides => {
  render(<App slides={slides} />, mountPoint)
})
