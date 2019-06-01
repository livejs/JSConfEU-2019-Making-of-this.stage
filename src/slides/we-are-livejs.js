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
import {topCenter, LargeImage, MediumImage} from '../components/images'
import {fade, flip, cube} from '@dekk/animation'
import {StyledListLarge, StyledList} from '../components/list'

// const {Slide, A} = Main
const {Slide, A, B} = Half

const notes = (
  <Notes>
    <p>We are LiveJS, a collective of audio & visual artists</p>
    <p>
      Most of the things you have seen is created by at least one of us using
      JavaScript and most of the time we are doing everything live.
    </p>
    <p>The core crew consists of Jan, Martin, Matt, Ruth, Sam & Tim</p>
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <MediumImage src="media/live-js-heart.svg" alt="LiveJS" />
    </A>

    <B>
      <StyledList>
        <Fragment order={1}>
          <li>Jan Krutisch (halfbyte)</li>
        </Fragment>
        <Fragment order={2}>
          <li>Martin Schuhfuss (usefulthink)</li>
        </Fragment>
        <Fragment order={3}>
          <li>Matt McKegg (DESTROY WITH SCIENCE)</li>
        </Fragment>
        <Fragment order={4}>
          <li>Ruth John (Rumyra)</li>
        </Fragment>
        <Fragment order={5}>
          <li>Sam Wray (2xAA & NOSIGNAL)</li>
        </Fragment>
        <Fragment order={6}>
          <li class="no-border">Tim Pietrusky (NERDDISCO)</li>
        </Fragment>
      </StyledList>
    </B>
  </Slide>
)
