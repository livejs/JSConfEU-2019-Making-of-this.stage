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

// const {Slide, A} = Main
const {Slide, A, B} = Half

const notes = (
  <Notes>
    <p>
      We have the remixes and the timeline figured out, let's jump into the
      actual stage setup
    </p>
    <p />
  </Notes>
)

export default (
  <Slide key={uuid()}>
    <Plugins.Data luminave={['']} />
    {notes}

    <A>
      <Title>Stage</Title>

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

      {/* <FitImage src="media/" alt="" /> */}
    </A>

    <B>
      <StyledList>
        <Fragment order={2}>
          <li>5 x Projectors</li>
        </Fragment>
        <Fragment order={3}>
          <li>3 x DualHD (3840 x 1080) = 11520 x 1080</li>
        </Fragment>
        <Fragment order={4}>
          <li>
            <tt>window.innerWidth === 8212 && window.innerHeight === 1012</tt>
          </li>
        </Fragment>
        <Fragment order={5}>
          <li class="no-border">34 x RGB Lights over DMX512</li>
        </Fragment>
      </StyledList>
    </B>
  </Slide>
)
