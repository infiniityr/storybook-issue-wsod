import Vue from 'vue'
import { sortStories } from './util/story_helper'

import React from 'react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

const SORT_ORDER = {
  Introduction: [
    'Welcome',
    'Getting Started',
  ],
  Advanced: [
    'Theme',
    'Icons',
    'Base Components',
    'Event Tracking',
    'Static CSS',
  ],
  Store: [
    'Getting Started',
  ],
  Forms: [],
  Components: [],
  Icons: [],
};

export const parameters = {
  controls: {
    expanded: true,
    hideNoControlsWarning: true
  },
  options: {
    storySort: sortStories(SORT_ORDER),
  },
  docs: {
    inlineStories: false,
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable story={PRIMARY_STORY} />
        <Stories />
      </>
    ),
  },
}

export const decorators = [
  (story, context) => {
    // wrap the passed component within the passed context
    const wrapped = story(context)
    // extend Vue to use Vuetify around the wrapped component
    return Vue.extend({
      components: { wrapped },
      props: {
        dark: {
          type: Boolean,
          default: context.args.dark,
        },
      },
      watch: {
        dark: {
          immediate: true,
          handler (val) {
            this.$vuetify.theme.dark = val
          }
        },
      },
      template: `
        <v-app>
          <v-container fluid>
            <wrapped />
          </v-container>
        </v-app>
      `
    })
  },
]