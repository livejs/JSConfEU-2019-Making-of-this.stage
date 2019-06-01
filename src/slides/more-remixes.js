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
import {Grid, Half, HalfVertical, Collage} from '../masters'
import {ImportantLink} from '../components/links'
import {
  topCenter,
  LargeImage,
  MediumImage,
  SmallImage
} from '../components/images'
import {fade, flip, cube} from '@dekk/animation'
import {StyledListLarge, StyledList} from '../components/list'

// const {Slide, A} = Main
// const {Slide, A, B} = Half
const {Slide, A, B, C} = Collage

const notes = (
  <Notes>
    <p>
      We wanted to have even more remixes with more tempo and we could have use
      loopdrop by Matt and improjam by halfbyte
    </p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Title>More Remixes!</Title>

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

    <B>
      <Fragment order={1}>
        <Subtitle>
          <TextMarker>loopdrop</TextMarker> <br />
          Matt McKegg
        </Subtitle>
      </Fragment>
    </B>

    <C>
      <Fragment order={2}>
        <Subtitle>
          <TextMarker>improjam</TextMarker> <br />
          halfbyte
        </Subtitle>
      </Fragment>
    </C>
  </Slide>
)
