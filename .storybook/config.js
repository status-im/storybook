import { addDecorator, configure } from '@storybook/react';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
