import Config from './config'
import React from 'react'
import uuid from 'uuid/v4'
import Fragment from '@dekk/fragment'
import {Text, Title, Subtitle, Uppercase, Bold, Center, Code} from '@dekk/text'
import {default as MaskedImage, FitImage} from '@dekk/image'
import Notes from '@dekk/speaker-notes'
import {Main} from '@dekk/master-slides'
import {Plugins} from '@dekk/deck'
import {RainbowText, TextMarker} from '../components'
import {css} from 'styled-components'
import {Grid, Half, HalfVertical} from '../masters'
import {ImportantLink} from '../components/links'
import {
  topCenter,
  LargeImage,
  MediumImage,
  SmallImage
} from '../components/images'
import {fade, flip, cube} from '@dekk/animation'
import {StyledListLarge, StyledList} from '../components/list'

const {Slide, A} = Main
// const {Slide, A, B} = Half

const notes = (
  <Notes>
    <h3 />
    <p>
      Matt & Jan created DOMinator to create all sounds using Web Audio and Web
      MIDI to trigger the sounds
    </p>
    <p>
      In the end there are 3 differnt input sources: loopdrop, improjam and
      ableton live. Ableton has all the videos in sequence and when something
      should happen, it sends a MIDI message to DOMinator to stop / start a
      sound and
    </p>
    <p>Based on the actual timeline, they trigger different sounds</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Title>
        <RainbowText time={1} text="DOMinator" />
      </Title>
      <Subtitle>
        <a href="https://github.com/livejs/DOMinator">
          github.com/livejs/DOMinator
        </a>
      </Subtitle>

      {/* <Title>
        <TextMarker>this.stage</TextMarker>
      </Title> */}

      {/* <Subtitle></Subtitle> */}

      {/* <StyledList>
        <Fragment order={2}>
          <li class="light-border space-top"></li>
        </Fragment>
        <Fragment order={3}>
          <li class="light-border"></li>
        </Fragment>
        <Fragment order={4}>
          <li class="light-border"></li>
        </Fragment>
        <Fragment order={5}>
          <li class="no-border"></li>
        </Fragment>
      </StyledList> */}

      {/* <LargeImage 
          src="media/"
          alt=""
      /> */}
    </A>

    {/* <B>
     <Title>Making of</Title>
    </B> */}
  </Slide>
)
