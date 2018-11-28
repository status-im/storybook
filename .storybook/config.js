import { addDecorator, configure } from '@storybook/react'
import withBackgrounds from "@storybook/addon-backgrounds"

addDecorator(
  withBackgrounds([
    { name: 'default', value: '#eef2f5', default: true },
    { name: 'white', value: 'white' }
  ])
)

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
