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
import {fade, flip, cube, slide} from '@dekk/animation'
import {StyledListLarge, StyledList} from '../components/list'

const {Slide, A} = Main
// const {Slide, A, B} = Half

const notes = (
  <Notes>
    <p>
      Vizra is my audio visualisation software - which has been being built for
      about 5 years or so now.
    </p>
    <p>
      The first version was this playground, where I learnt about analysing, and
      mixed video elements on the beat of the music, and drew loads of svgs and
      broke everything and then drew loads of things on canvas and still broke
      everything
    </p>
    <p>
      But I learnt so much and it still exists, however this year, it was time
      for real Vizra. It was going to do one thing.
    </p>
    <p>
      It’s a combination of my style as an artist and my style as a coder. It’s
      generative. It takes a bunch of canvas sprites, a bunch of parameters
      (analysis, MIDI, environmental) and generates visuals.
    </p>
    <p>
      There’s 4 main moving parts at the moment. Colours & palettes, vectors &
      grids, shapes & sprites and states (MIDI, audio anlysis)
    </p>
    <p>
      Almost all these parts are written in ES6 classes and included as modules.
      This has been a great learning experience and it’s nicely architected.
    </p>
    <p>
      It’s still in development, _but_ when it came to the X it was super easy
      to take Silke’s visuals she had put together for the branding for the
      conference, recreate them as canvas sprites and distribute them using the
      grid system - which for the most part is auto generated.
    </p>
    <p>
      For the X I had a custom grid method, so I could hard code in coordinates
      for placement of her “x-tiles” and any other visuals for the X
    </p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Title>
        <RainbowText text="Vizra" />
      </Title>
      <Subtitle>
        <a href="https://github.com/Rumyra/Vizra">github.com/Rumyra/Vizra</a>
      </Subtitle>

      {/* <Subtitle><a href=""></a></Subtitle> */}

      {/* <Title>
        <TextMarker>this.stage</TextMarker>
      </Title> */}

      {/* <Subtitle></Subtitle> */}

      {/* <StyledList>
        <Fragment order={2}>
          <li></li>
        </Fragment>
        <Fragment order={3}>
          <li></li>
        </Fragment>
        <Fragment order={4}>
          <li></li>
        </Fragment>
        <Fragment order={5}>
          <li class="no-border"></li>
        </Fragment>
      </StyledList> */}

      {/* <LargeImage 
          src="media/"
          alt=""
      /> */}

      {/* <FitImage src="media/" alt="" /> */}
    </A>

    {/* <B>
     <Title>Making of</Title>
    </B> */}
  </Slide>
)
